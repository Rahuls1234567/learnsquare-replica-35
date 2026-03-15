"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { LogOut, FileText, Users, Mail, BookOpen, GraduationCap, RefreshCw, X, User, Edit3, MessageSquare, ImageIcon, ExternalLink, FileCode } from "lucide-react";
import { useAdmin } from "@/src/context/AdminContext";

type ReportCounts = {
    contact: number;
    syntaxwork: number;
    aicas: number;
    trainingRequest: number;
    testPrepPro: number;
    enrolment: number;
    semesterPrep: number;
    total: number;
};

type ReportKey = keyof Omit<ReportCounts, "total">;

const REPORT_LABELS: { key: ReportKey; label: string; icon: typeof FileText }[] = [
    { key: "contact", label: "Contact Form", icon: Mail },
    { key: "syntaxwork", label: "Syntax Works", icon: FileText },
    { key: "aicas", label: "AICAS", icon: BookOpen },
    { key: "trainingRequest", label: "Training Programs", icon: GraduationCap },
    { key: "testPrepPro", label: "Test Prep Pro", icon: FileText },
    { key: "enrolment", label: "MySkillForge Enrolments", icon: Users },
    { key: "semesterPrep", label: "Semester Prep", icon: BookOpen },
];

const TABLE_COLUMNS: Record<ReportKey, { key: string; label: string }[]> = {
    contact: [
        { key: "firstName", label: "First Name" },
        { key: "lastName", label: "Last Name" },
        { key: "email", label: "Email" },
        { key: "whatsappNo", label: "Phone" },
        { key: "collegeName", label: "College" },
        { key: "message", label: "Message" },
        { key: "createdAt", label: "Date" },
    ],
    syntaxwork: [
        { key: "firstName", label: "First Name" },
        { key: "lastName", label: "Last Name" },
        { key: "email", label: "Email" },
        { key: "whatsappNo", label: "Phone" },
        { key: "message", label: "Message" },
        { key: "createdAt", label: "Date" },
    ],
    aicas: [
        { key: "firstName", label: "First Name" },
        { key: "lastName", label: "Last Name" },
        { key: "email", label: "Email" },
        { key: "whatsappNo", label: "Phone" },
        { key: "collegeName", label: "College" },
        { key: "city", label: "City" },
        { key: "message", label: "Message" },
        { key: "createdAt", label: "Date" },
    ],
    trainingRequest: [
        { key: "firstName", label: "First Name" },
        { key: "lastName", label: "Last Name" },
        { key: "email", label: "Email" },
        { key: "whatsappNo", label: "Phone" },
        { key: "collegeName", label: "College" },
        { key: "message", label: "Message" },
        { key: "createdAt", label: "Date" },
    ],
    testPrepPro: [
        { key: "firstName", label: "First Name" },
        { key: "lastName", label: "Last Name" },
        { key: "email", label: "Email" },
        { key: "whatsappNo", label: "Phone" },
        { key: "collegeName", label: "College" },
        { key: "message", label: "Message" },
        { key: "createdAt", label: "Date" },
    ],
    enrolment: [
        { key: "firstName", label: "First Name" },
        { key: "lastName", label: "Last Name" },
        { key: "email", label: "Email" },
        { key: "mobileNumber", label: "Phone" },
        { key: "course", label: "Course" },
        { key: "program", label: "Program" },
        { key: "branch", label: "Branch" },
        { key: "yearOfStudy", label: "Year" },
        { key: "semester", label: "Semester" },
        { key: "createdAt", label: "Date" },
    ],
    semesterPrep: [
        { key: "name", label: "Name" },
        { key: "email", label: "Email" },
        { key: "mobile", label: "Phone" },
        { key: "university", label: "University" },
        { key: "college", label: "College" },
        { key: "password", label: "Password" },
        { key: "createdAt", label: "Date" },
    ],
};

const formatDate = (v: unknown) => {
    if (!v) return "-";
    const d = new Date(String(v));
    return isNaN(d.getTime()) ? String(v) : d.toLocaleDateString("en-IN", { dateStyle: "short" });
};

export default function AdminPage() {
    const router = useRouter();
    const [mounted, setMounted] = useState(false);
    const [reports, setReports] = useState<ReportCounts | null>(null);
    const [loading, setLoading] = useState(true);
    const [selectedCard, setSelectedCard] = useState<ReportKey | null>(null);
    const [tableData, setTableData] = useState<Record<string, unknown>[]>([]);
    const { editMode, setEditMode } = useAdmin();
    const [tableLoading, setTableLoading] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;
        const auth = typeof document !== "undefined" && (() => {
            const m = document.cookie.match(/auth=([^;]+)/);
            if (!m) return null;
            try { return JSON.parse(atob(m[1])); } catch { return null; }
        })();
        if (!auth || !auth.isAdmin) {
            router.replace("/login");
        }
    }, [mounted, router]);

    useEffect(() => {
        if (!mounted) return;
        const fetchReports = async () => {
            try {
                const res = await fetch("/api/admin/reports");
                if (res.ok) {
                    const data = await res.json();
                    setReports(data);
                }
            } catch {
                setReports(null);
            } finally {
                setLoading(false);
            }
        };
        fetchReports();
    }, [mounted]);

    const refreshReports = async () => {
        setLoading(true);
        try {
            const res = await fetch("/api/admin/reports");
            if (res.ok) {
                const data = await res.json();
                setReports(data);
            }
        } finally {
            setLoading(false);
        }
    };

    const fetchTableData = async (key: ReportKey) => {
        setTableLoading(true);
        setSelectedCard(key);
        try {
            const res = await fetch(`/api/admin/reports?list=${key}`);
            if (res.ok) {
                const data = await res.json();
                setTableData(data);
            } else {
                setTableData([]);
            }
        } catch {
            setTableData([]);
        } finally {
            setTableLoading(false);
        }
    };

    const clearTable = () => {
        setSelectedCard(null);
        setTableData([]);
    };

    const logout = () => {
        document.cookie = "auth=; path=/; max-age=0";
        router.replace("/login");
    };

    if (!mounted) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-100">
                <p className="text-slate-600">Loading...</p>
            </div>
        );
    }

    const selectedLabel = selectedCard
        ? (REPORT_LABELS.find((r) => r.key === selectedCard)?.label || "")
        : "";

    const reportDate = new Date().toLocaleDateString("en-IN", { dateStyle: "long" });

    return (
        <div className="min-h-screen bg-slate-50">
            <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-4">
                    <img src="/logo/LEARNSQUARE_LOGO (500x200).png" alt="LEARNSQUARE" className="h-10 object-contain" />
                    <div className="hidden sm:block h-6 w-px bg-slate-200" />
                    <span className="font-bold text-slate-800">Enquiry Reports</span>
                </div>
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => {
                            setEditMode(true);
                            router.push("/");
                        }}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-50 text-indigo-700 hover:bg-indigo-100 text-sm font-bold transition-all border border-indigo-100"
                    >
                        <Edit3 className="w-4 h-4" />
                        Manage Content
                    </button>
                    <div className="hidden sm:block h-6 w-px bg-slate-200 mx-2" />
                    <Link
                        href="/profile"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium transition-colors"
                    >
                        <User className="w-4 h-4" />
                        Profile
                    </Link>
                    <button
                        onClick={logout}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-sm"
                    >
                        <LogOut className="w-4 h-4" />
                        Logout
                    </button>
                </div>
            </header>
            <main className="p-6 lg:p-8">
                <div className="max-w-6xl mx-auto">
                    {/* Report Header */}
                    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 mb-8">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                            <div>
                                <h1 className="text-2xl font-black text-slate-800 tracking-tight">Student Enquiry Report</h1>
                                <p className="text-slate-500 text-sm mt-1">Generated on {reportDate}</p>
                            </div>
                            <button
                                onClick={refreshReports}
                                disabled={loading}
                                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white disabled:opacity-50 text-sm font-semibold self-start"
                            >
                                <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
                                Refresh Data
                            </button>
                        </div>
                    </div>

                    {loading && !reports ? (
                        <p className="text-slate-500">Loading reports...</p>
                    ) : reports ? (
                        <>
                            {/* Summary Cards - Compact */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 mb-8">
                                {REPORT_LABELS.map(({ key, label, icon: Icon }) => {
                                    const isSelected = selectedCard === key;
                                    return (
                                        <button
                                            key={key}
                                            type="button"
                                            onClick={() => fetchTableData(key)}
                                            className={`text-left rounded-xl p-3 sm:p-4 flex items-center gap-3 transition-all border ${
                                                isSelected
                                                    ? "bg-indigo-50 border-indigo-300 shadow-md ring-2 ring-indigo-200"
                                                    : "bg-white border-slate-200 hover:border-indigo-200 hover:shadow-sm"
                                            }`}
                                        >
                                            <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${isSelected ? "bg-indigo-100" : "bg-slate-100"}`}>
                                                <Icon className={`w-4 h-4 ${isSelected ? "text-indigo-600" : "text-slate-500"}`} />
                                            </div>
                                            <div className="min-w-0">
                                                <p className="text-slate-500 text-[10px] sm:text-xs font-semibold uppercase tracking-wider truncate">{label}</p>
                                                <p className="text-xl sm:text-2xl font-black text-slate-800">{reports[key]}</p>
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>

                            {selectedCard && (
                                <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
                                    <div className="px-6 py-4 bg-gradient-to-r from-slate-800 to-slate-700 flex items-center justify-between">
                                        <h2 className="font-bold text-white text-lg">
                                            {selectedLabel} – Detailed Records
                                            <span className="ml-2 font-normal text-slate-300">({tableData.length} {tableData.length === 1 ? "entry" : "entries"})</span>
                                        </h2>
                                        <button
                                            onClick={clearTable}
                                            className="p-2 rounded-lg text-slate-300 hover:bg-white/10 hover:text-white transition-colors"
                                            aria-label="Close table"
                                        >
                                            <X className="w-5 h-5" />
                                        </button>
                                    </div>
                                    <div className="overflow-x-auto">
                                        {tableLoading ? (
                                            <div className="p-16 text-center">
                                                <div className="inline-block w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin mb-3" />
                                                <p className="text-slate-500 font-medium">Loading records...</p>
                                            </div>
                                        ) : tableData.length === 0 ? (
                                            <div className="p-16 text-center text-slate-500 font-medium">No records found</div>
                                        ) : (
                                            <table className="w-full text-sm min-w-[600px]">
                                                <thead>
                                                    <tr className="bg-slate-100">
                                                        <th className="px-5 py-4 text-left font-bold text-slate-600 text-xs uppercase tracking-widest w-14 border-b-2 border-slate-200">#</th>
                                                        {TABLE_COLUMNS[selectedCard].map((col) => (
                                                            <th
                                                                key={col.key}
                                                                className="px-5 py-4 text-left font-bold text-slate-600 text-xs uppercase tracking-wider whitespace-nowrap border-b-2 border-slate-200"
                                                            >
                                                                {col.label}
                                                            </th>
                                                        ))}
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {tableData.map((row, i) => (
                                                        <tr
                                                            key={i}
                                                            className={`border-b border-slate-100 transition-colors hover:bg-indigo-50/50 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}
                                                        >
                                                            <td className="px-5 py-4 text-slate-400 font-mono text-xs font-semibold">{i + 1}</td>
                                                            {TABLE_COLUMNS[selectedCard].map((col) => {
                                                                const val = col.key === "createdAt" ? formatDate(row[col.key]) : String(row[col.key] ?? "-");
                                                                const isEmail = col.key === "email";
                                                                return (
                                                                    <td
                                                                        key={col.key}
                                                                        className={`px-5 py-4 max-w-[220px] truncate ${isEmail ? "text-indigo-600 font-medium" : "text-slate-700"}`}
                                                                        title={val.length > 30 ? val : undefined}
                                                                    >
                                                                        {val}
                                                                    </td>
                                                                );
                                                            })}
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        )}
                                    </div>
                                </div>
                            )}
                        </>
                    ) : (
                        <p className="text-red-600">Failed to load reports</p>
                    )}

                </div>
            </main>
        </div>
    );
}
