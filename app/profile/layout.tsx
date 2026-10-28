import { privateMetadata } from "@/lib/seo";

export const metadata = privateMetadata("My Profile | LEARNSQUARE");

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
