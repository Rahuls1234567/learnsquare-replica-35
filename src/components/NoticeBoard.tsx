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
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[99] bg-black/50 backdrop-blur-sm"
                        onClick={handleClose}
                    />

                    {/* Centered Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.88, y: 40 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.88, y: 40 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 pointer-events-none"
                    >
                        <div className="bg-white border border-slate-200 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.35)] rounded-2xl overflow-hidden relative group max-h-[85vh] w-full sm:w-[32rem] flex flex-col pointer-events-auto">
                            {/* Decorative Top Border */}
                            <div className="h-1.5 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex-shrink-0"></div>

                            <button
                                onClick={handleClose}
                                className="absolute top-4 right-4 p-1.5 bg-white hover:bg-slate-100 text-slate-500 hover:text-slate-800 rounded-full transition-colors z-10 shadow-md border border-slate-200"
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
                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-100 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
                                        <Megaphone className="w-3.5 h-3.5" />
                                        Announcement
                                    </div>
                                    <h3 className="text-2xl font-black text-slate-900 mb-3 leading-tight tracking-tight">
                                        {notice.title}
                                    </h3>
                                    <div className="text-slate-700 text-[15px] leading-relaxed whitespace-pre-wrap font-medium">
                                        {notice.content}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
