import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import DevWarmup from "@/components/DevWarmup";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:8080'),
    title: "Learn Square",
    description: "Learn Square Generated Project",
    authors: [{ name: "Learn Square" }],
    icons: {
        icon: "/images/learnsquare_icon.png",
        shortcut: "/images/learnsquare_icon.png",
        apple: "/images/learnsquare_icon.png",
    },
    openGraph: {
        title: "Learn Square",
        description: "Learn Square Generated Project",
        type: "website",
        images: ["/logo/LEARNSQUARE_LOGO (500x200).png"]
    },
    twitter: {
        card: "summary_large_image",
        images: ["/logo/LEARNSQUARE_LOGO (500x200).png"]
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Providers>
                    <DevWarmup />
                    {children}
                </Providers>

                {/* SVG Filter to remove white backgrounds from logos */}
                <svg style={{ position: "absolute", width: 0, height: 0 }} aria-hidden="true" focusable="false">
                    <defs>
                        <filter id="remove-white" colorInterpolationFilters="sRGB">
                            <feColorMatrix type="matrix" values="1 0 0 0 0
                                                   0 1 0 0 0
                                                   0 0 1 0 0
                                                   -1.1 -1.1 -1.1 1 1" />
                        </filter>
                    </defs>
                </svg>
            </body>
        </html>
    );
}
