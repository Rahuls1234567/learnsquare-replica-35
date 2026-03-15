"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { getAuthFromCookie } from "@/lib/auth";

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
    const [isAdmin, setIsAdmin] = useState(false);
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        const auth = getAuthFromCookie();
        if (auth?.isAdmin) {
            setIsAdmin(true);
        }
    }, []);

    return (
        <AdminContext.Provider value={{ isAdmin, editMode, setEditMode }}>
            {children}
        </AdminContext.Provider>
    );
};

export const useAdmin = () => useContext(AdminContext);
