import { Cpu, Code2, Gem, BookMarked, Presentation, ClipboardList, FileText, Mail, Home } from "lucide-react";

export type CmsCardConfig = {
    contentKey: string;
    pageName: string;
    badge?: string;
    icon: React.ComponentType<{ className?: string }>;
    color: string;
    iconColor: string;
};

/** All CMS-editable cards - matches website layout */
export const CMS_CARDS: CmsCardConfig[] = [
    // About Us
    { contentKey: "about_main_heading", pageName: "About Us - Main Heading", icon: FileText, color: "from-indigo-500/10 to-purple-500/10", iconColor: "text-indigo-600", badge: "About" },
    { contentKey: "about_intro", pageName: "About Us - Intro", icon: FileText, color: "from-indigo-500/10 to-purple-500/10", iconColor: "text-indigo-600", badge: "About" },
    { contentKey: "about_vision_section", pageName: "About Us - Vision", icon: FileText, color: "from-indigo-500/10 to-purple-500/10", iconColor: "text-indigo-600", badge: "About" },
    // Contact
    { contentKey: "contact_heading", pageName: "Contact - Heading", icon: Mail, color: "from-cyan-500/10 to-blue-500/10", iconColor: "text-cyan-600", badge: "Contact" },
    { contentKey: "contact_subtitle", pageName: "Contact - Subtitle", icon: Mail, color: "from-cyan-500/10 to-blue-500/10", iconColor: "text-cyan-600", badge: "Contact" },
    { contentKey: "contact_form_intro", pageName: "Contact - Form Intro", icon: Mail, color: "from-cyan-500/10 to-blue-500/10", iconColor: "text-cyan-600", badge: "Contact" },
    // Products Section (Home)
    { contentKey: "products_heading", pageName: "Products - Section Heading", icon: Home, color: "from-blue-500/10 to-indigo-500/10", iconColor: "text-blue-600", badge: "Home" },
    { contentKey: "product_aicas", pageName: "AICAS", icon: Cpu, color: "from-blue-500/10 to-indigo-500/10", iconColor: "text-blue-600", badge: "AI Powered" },
    { contentKey: "product_syntaxworks", pageName: "SyntaxWorks", icon: Code2, color: "from-purple-500/10 to-fuchsia-500/10", iconColor: "text-purple-600", badge: "Coding" },
    { contentKey: "product_myskillforge", pageName: "MySkillForge", icon: Gem, color: "from-emerald-500/10 to-teal-500/10", iconColor: "text-emerald-600", badge: "Skill Building" },
    { contentKey: "product_semesterprep", pageName: "SemesterPrep", icon: BookMarked, color: "from-orange-500/10 to-red-500/10", iconColor: "text-orange-600", badge: "Exam Prep" },
    { contentKey: "product_training", pageName: "Training Programs", icon: Presentation, color: "from-pink-500/10 to-rose-500/10", iconColor: "text-pink-600", badge: "Industry Ready" },
    { contentKey: "product_testpreppro", pageName: "Test Prep - Pro", icon: ClipboardList, color: "from-cyan-500/10 to-blue-500/10", iconColor: "text-cyan-600", badge: "Assessment" },
];
