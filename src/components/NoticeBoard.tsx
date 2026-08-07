"use client";

import { useEffect, useState } from "react";
import { Bell, X } from "lucide-react";
import { EditableContent } from "./EditableContent";

const NoticeBoard = () => {
  const [visible, setVisible] = useState(false);
  const [content, setContent] = useState("");
  const [contentLoading, setContentLoading] = useState(true);
  const [enabled, setEnabled] = useState(false);
  const [enabledLoading, setEnabledLoading] = useState(true);

  useEffect(() => {
    setVisible(true);
  }, []);

  useEffect(() => {
    const fetchEnabled = async () => {
      try {
        const res = await fetch("/api/content/home_notice_board_enabled");
        if (res.ok) {
          const data = await res.json();
          setEnabled(data.htmlContent === "true");
        }
      } catch {
        setEnabled(false);
      } finally {
        setEnabledLoading(false);
      }
    };
    fetchEnabled();
  }, []);

  if (!visible) return null;

  // Admin's enable/disable switch (default: off) always takes precedence,
  // even for admins in Live Edit mode — managed via the admin dashboard.
  const isDisabled = !enabledLoading && !enabled;
  if (isDisabled) return null;

  // Hide the notice board entirely once we know there's no content to show.
  const isEmpty = !contentLoading && !content.trim();
  if (isEmpty) return null;

  return (
    <div className="fixed left-1/2 top-24 z-[55] w-[calc(100%-2rem)] max-w-3xl -translate-x-1/2 md:top-28">
      <div className="relative overflow-hidden rounded-lg border border-white/15 bg-[#100722]/95 text-white shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-cyan-300" />
        <div className="flex items-start gap-3 px-4 py-3 md:px-5 md:py-4">
          <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-200 ring-1 ring-indigo-300/20">
            <Bell className="h-4 w-4" />
          </div>

          <div className="min-w-0 flex-1">
            <p className="mb-1 text-[11px] font-black uppercase tracking-[0.24em] text-indigo-200">
              Notice Board
            </p>
            <EditableContent
              contentKey="home_notice_board"
              description="Home Notice Board"
              className="text-sm font-semibold leading-relaxed text-slate-100 md:text-base"
              plainText
              readOnly
              onContentChange={(value, loading) => {
                setContent(value);
                setContentLoading(loading);
              }}
              defaultContent={null}
            />
          </div>

          <button
            type="button"
            onClick={() => setVisible(false)}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Close notice board"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoticeBoard;
