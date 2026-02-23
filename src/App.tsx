import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AicasPage from "./pages/AicasPage";
import SyntaxWorksPage from "./pages/SyntaxWorksPage";
import MySkillForgePage from "./pages/MySkillForgePage";
import TrainingProgramsPage from "./pages/TrainingProgramsPage";
import TestPrepProPage from "./pages/TestPrepProPage";
import SemesterPrepPage from "./pages/SemesterPrepPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aicas" element={<AicasPage />} />
          <Route path="/syntaxworks" element={<SyntaxWorksPage />} />
          <Route path="/myskillforge" element={<MySkillForgePage />} />
          <Route path="/training-programs" element={<TrainingProgramsPage />} />
          <Route path="/testpreppro" element={<TestPrepProPage />} />
          <Route path="/semesterprep" element={<SemesterPrepPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;