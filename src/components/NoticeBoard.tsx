"use client";

import { useEffect, useState } from "react";
import { X, Megaphone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Notice = {
    id: number;
    title: string;
    content: string;
    image: string | null;
    startDate: string;
    endDate: string;
};

export default function NoticeBoard() {
    const [notice, setNotice] = useState<Notice | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const fetchNotice = async () => {
            try {
                const res = await fetch("/api/notices");
                if (res.ok) {
                    const notices: Notice[] = await res.json();
                    if (notices.length > 0) {
                        const activeNotice = notices[0];
                        setNotice(activeNotice);
                        setTimeout(() => setIsVisible(true), 500);
                    }
                }
            } catch (error) {
                console.error("Failed to fetch notices:", error);
            }
        };

        fetchNotice();
    }, []);

    const handleClose = () => {
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && notice && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -20, x: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -20, x: 20 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="fixed top-24 right-6 z-[100] w-[calc(100%-3rem)] sm:w-[28rem] shadow-2xl"
                >
                    <div className="bg-white/95 backdrop-blur-xl border border-slate-200/60 shadow-2xl rounded-2xl overflow-hidden relative group max-h-[calc(100vh-8rem)] flex flex-col">
                        {/* Decorative Top Border */}
                        <div className="h-1.5 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex-shrink-0"></div>
                        
                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-4 p-1.5 bg-white/80 hover:bg-slate-100 text-slate-500 hover:text-slate-800 rounded-full transition-colors z-10 backdrop-blur-md shadow-sm border border-slate-200"
                            aria-label="Close Notice"
                        >
                            <X className="w-4 h-4" />
                        </button>

                        <div className="overflow-y-auto custom-scrollbar flex-1">
                            {notice.image && notice.image.trim().length > 0 && (
                                <div className="w-full h-48 sm:h-56 overflow-hidden bg-slate-100 relative">
                                    <img
                                        src={notice.image}
                                        alt="Announcement"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).style.display = 'none';
                                            (e.target as HTMLImageElement).parentElement!.style.display = 'none';
                                        }}
                                    />
                                </div>
                            )}

                            <div className="p-6 sm:p-8">
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
                                    <Megaphone className="w-3.5 h-3.5" />
                                    Announcement
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-3 leading-tight tracking-tight">
                                    {notice.title}
                                </h3>
                                <div className="text-slate-600 text-[15px] leading-relaxed whitespace-pre-wrap font-medium">
                                    {notice.content}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
