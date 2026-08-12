"use client";

import { useEffect, useState } from "react";
import { Bell, ChevronDown, X } from "lucide-react";

type Notice = {
  id: number;
  title: string;
  content: string;
  image: string | null;
};

const NoticeBoard = () => {
  const [visible, setVisible] = useState(false);
  const [notices, setNotices] = useState<Notice[]>([]);
  const [dismissed, setDismissed] = useState<number[]>([]);
  const [expanded, setExpanded] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setVisible(true);
  }, []);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const res = await fetch("/api/notices");
        if (res.ok) {
          const data = await res.json();
          setNotices(Array.isArray(data) ? data : []);
        }
      } catch {
        setNotices([]);
      } finally {
        setLoading(false);
      }
    };
    fetchNotices();
  }, []);

  if (!visible || loading) return null;

  const activeNotices = notices.filter((n) => !dismissed.includes(n.id));
  if (activeNotices.length === 0) return null;

  const toggleExpanded = (id: number) => {
    setExpanded((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  return (
    <div className="fixed left-1/2 top-24 z-[55] w-[calc(100%-2rem)] max-w-md -translate-x-1/2 space-y-4 md:top-28">
      {activeNotices.map((notice) => {
        const isExpanded = expanded.includes(notice.id);
        return (
          <div
            key={notice.id}
            className="relative overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-b from-[#150a2e]/97 to-[#0a0518]/97 text-white shadow-[0_30px_80px_-10px_rgba(0,0,0,0.55)] backdrop-blur-xl ring-1 ring-white/5"
          >
            <div className="absolute inset-x-0 top-0 z-10 h-[2px] bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-cyan-300" />

            {notice.image && (
              <div className="relative h-44 w-full overflow-hidden sm:h-52">
                <img
                  src={notice.image}
                  alt={notice.title || "Notice"}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0518] via-[#0a0518]/10 to-transparent" />
              </div>
            )}

            <button
              type="button"
              onClick={() => setDismissed((prev) => [...prev, notice.id])}
              className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-slate-200 backdrop-blur-md transition-colors hover:bg-black/60 hover:text-white"
              aria-label="Close notice"
            >
              <X className="h-4 w-4" />
            </button>

            <div className={`px-5 py-4 sm:px-6 sm:py-5 ${notice.image ? "-mt-8 relative z-10" : ""}`}>
              <div className="mb-2 flex items-center gap-2.5">
                {!notice.image && (
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-200 ring-1 ring-indigo-300/20">
                    <Bell className="h-4 w-4" />
                  </div>
                )}
                <p className="text-[11px] font-black uppercase tracking-[0.24em] text-indigo-200">
                  Notice Board
                </p>
              </div>

              {notice.title && (
                <h3 className="mb-1.5 text-base font-black leading-snug text-white sm:text-lg">
                  {notice.title}
                </h3>
              )}

              <p
                className={`whitespace-pre-wrap text-sm leading-relaxed text-slate-300 sm:text-[15px] ${
                  isExpanded ? "" : "line-clamp-3"
                }`}
              >
                {notice.content}
              </p>

              {notice.content.length > 160 && (
                <button
                  type="button"
                  onClick={() => toggleExpanded(notice.id)}
                  className="mt-2 flex items-center gap-1 text-xs font-bold text-indigo-300 transition-colors hover:text-indigo-200"
                >
                  {isExpanded ? "Show less" : "Read more"}
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NoticeBoard;
