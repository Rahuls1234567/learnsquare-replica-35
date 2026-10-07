import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

const jakarta = Plus_Jakarta_Sans({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-jakarta",
});

export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:8080'),
    title: "LEARNSQUARE",
    description: "LEARNSQUARE - AI Powered Education Platform",
    authors: [{ name: "LEARNSQUARE" }],
    icons: {
        icon: "/fav icon.png",
        shortcut: "/fav icon.png",
        apple: "/fav icon.png",
    },
    openGraph: {
        title: "LEARNSQUARE",
        description: "LEARNSQUARE - AI Powered Education Platform",
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
        <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
            <body className={inter.className}>
                <Providers>
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
