import { CheckCircle2 } from "lucide-react";

type Tone = "light" | "dark";

/** Inline message under a form field. Renders nothing when there is no error. */
export const FieldError = ({ message, tone = "light" }: { message?: string; tone?: Tone }) =>
    message ? (
        <p role="alert" className={`text-xs font-semibold mt-1.5 ${tone === "dark" ? "text-red-400" : "text-red-600"}`}>
            {message}
        </p>
    ) : null;

/** Shown in place of a form after it was submitted successfully. */
export const FormSuccess = ({
    title,
    message,
    actionLabel,
    onAction,
    tone = "light",
}: {
    title: string;
    message: string;
    actionLabel?: string;
    onAction?: () => void;
    tone?: Tone;
}) => {
    const dark = tone === "dark";
    return (
        <div
            role="status"
            className={`flex flex-col items-center text-center gap-4 rounded-2xl border p-8 ${dark ? "border-emerald-400/30 bg-emerald-400/10" : "border-emerald-200 bg-emerald-50"}`}
        >
            <CheckCircle2 className={`w-12 h-12 ${dark ? "text-emerald-400" : "text-emerald-600"}`} />
            <div className="space-y-1.5">
                <p className={`text-xl font-black ${dark ? "text-white" : "text-slate-900"}`}>{title}</p>
                <p className={`text-sm font-medium ${dark ? "text-slate-300" : "text-slate-600"}`}>{message}</p>
            </div>
            {actionLabel && onAction && (
                <button
                    type="button"
                    onClick={onAction}
                    className={`text-sm font-bold underline underline-offset-4 ${dark ? "text-indigo-300 hover:text-white" : "text-indigo-600 hover:text-indigo-800"}`}
                >
                    {actionLabel}
                </button>
            )}
        </div>
    );
};
