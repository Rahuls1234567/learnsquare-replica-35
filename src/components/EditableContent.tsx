"use client";

import React, { useState, useEffect } from "react";
import { useAdmin } from "@/src/context/AdminContext";
import { Edit3 } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
} from "@/src/components/ui/dialog";
import { Button } from "@/src/components/ui/button";
import { sanitizeHtml } from "@/lib/sanitize";
import { toast } from "sonner";

interface EditableContentProps {
    contentKey: string;
    description?: string;
    className?: string;
    defaultContent: React.ReactNode;
    /** When the inline edit dialog opens or closes (e.g. pause hero carousel) */
    onEditOpenChange?: (open: boolean) => void;
}

export const EditableContent = ({
    contentKey,
    description,
    className,
    defaultContent,
    onEditOpenChange,
}: EditableContentProps) => {
    const { isAdmin, editMode } = useAdmin();
    const [htmlContent, setHtmlContent] = useState<string | null>(null);
    const [tempHtml, setTempHtml] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const contentRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Uses the batch cache — all EditableContent on the page share ONE API call
        fetchContent(contentKey, (html) => {
            setHtmlContent(html || "");
            setTempHtml(html || "");
            setLoading(false);
        });
    }, [contentKey]);

    const handleSave = async () => {
        setSaving(true);
        try {
            const res = await fetch("/api/admin/content/update", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: 'include',
                body: JSON.stringify({
                    content_key: contentKey,
                    html_content: tempHtml,
                }),
            });

            if (res.ok) {
                // Invalidate this key in the cache so next load gets fresh data
                invalidateContent(contentKey);
                setHtmlContent(tempHtml);
                setIsEditing(false);
                onEditOpenChange?.(false);
                toast.success("Content updated successfully!");
            } else {
                toast.error("Failed to update content.");
            }
        } catch (error) {
            toast.error("An error occurred while saving.");
        } finally {
            setSaving(false);
        }
    };

    const handleOpenChange = (open: boolean) => {
        if (open && !tempHtml && !htmlContent && contentRef.current) {
            // Extract current HTML if no persisted content exists
            setTempHtml(contentRef.current.innerHTML.trim());
        }
        setIsEditing(open);
        onEditOpenChange?.(open);
    };

    if (loading) {
        return <div className={className}>{defaultContent}</div>;
    }

    const displayContent = htmlContent ? (
        <div 
            dangerouslySetInnerHTML={{ __html: sanitizeHtml(htmlContent) }} 
        />
    ) : defaultContent;

    if (!isAdmin || !editMode) {
        return <div className={className}>{displayContent}</div>;
    }

    return (
        <div className={`relative group ${className}`}>
            <div 
                ref={contentRef}
                className="transition-all duration-300 group-hover:ring-2 group-hover:ring-indigo-500/50 group-hover:ring-offset-2 rounded-lg"
            >
                {displayContent}
            </div>
            
            <Dialog open={isEditing} onOpenChange={handleOpenChange}>
                <DialogTrigger asChild>
                    <button 
                        className="absolute -top-3 -right-3 z-50 p-2 bg-indigo-600 text-white rounded-full shadow-lg opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:scale-110 active:scale-95"
                        title={`Edit ${description || contentKey}`}
                    >
                        <Edit3 className="w-4 h-4" />
                    </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[700px] bg-[#171523] border-white/10 text-white">
                    <DialogHeader>
                        <DialogTitle className="text-xl font-bold flex items-center gap-2">
                            <Edit3 className="w-5 h-5 text-indigo-400" />
                            Edit {description || contentKey.replace(/_/g, " ")}
                        </DialogTitle>
                    </DialogHeader>
                    
                    <div className="py-4 space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-400">HTML Content</label>
                            <textarea
                                value={tempHtml}
                                onChange={e => setTempHtml(e.target.value)}
                                spellCheck={false}
                                className="w-full min-h-[300px] max-h-[500px] rounded-xl border border-white/10 bg-black/40 p-5 font-mono text-xs text-white placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-indigo-500/50 resize-y custom-scrollbar"
                                style={{ fontFamily: '"Fira code", "Fira Mono", monospace' }}
                            />
                        </div>
                        
                        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2">Live Preview</label>
                            <div 
                                className="cms-content max-h-[200px] overflow-auto text-sm"
                                dangerouslySetInnerHTML={{ __html: sanitizeHtml(tempHtml) }}
                            />
                        </div>
                    </div>

                    <DialogFooter className="gap-2">
                        <Button 
                            variant="ghost" 
                            onClick={() => {
                                setIsEditing(false);
                                onEditOpenChange?.(false);
                            }}
                            className="text-slate-400 hover:text-white hover:bg-white/5"
                        >
                            Cancel
                        </Button>
                        <Button 
                            onClick={handleSave} 
                            disabled={saving}
                            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8"
                        >
                            {saving ? "Saving..." : "Save Changes"}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
};
