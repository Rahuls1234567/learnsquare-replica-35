import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import EmpoweringSection from "@/components/EmpoweringSection";
import ClientsLogoBar from "@/components/ClientsLogoBar";
import ProductsSection from "@/components/ProductsSection";
import SemesterPrepSection from "@/components/SemesterPrepSection";
import CollaborationsSection from "@/components/CollaborationsSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroCarousel />
    <EmpoweringSection />
    <ClientsLogoBar />
    <ProductsSection />
    <SemesterPrepSection />
    <CollaborationsSection />
    <Footer />
    <WhatsAppButton />
  </div>
);

export default Index;
