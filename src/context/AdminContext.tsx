"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { getAuthFromCookie } from "@/lib/auth";
import { usePathname } from "next/navigation";

type AdminContextType = {
    isAdmin: boolean;
    editMode: boolean;
    setEditMode: (mode: boolean) => void;
};

const AdminContext = createContext<AdminContextType>({
    isAdmin: false,
    editMode: false,
    setEditMode: () => {},
});

export const AdminProvider = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();
    const [isAdmin, setIsAdmin] = useState(false);
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        const auth = getAuthFromCookie();
        setIsAdmin(!!auth?.isAdmin);
    }, [pathname]);

    return (
        <AdminContext.Provider value={{ isAdmin, editMode, setEditMode }}>
            {children}
        </AdminContext.Provider>
    );
};

export const useAdmin = () => useContext(AdminContext);
