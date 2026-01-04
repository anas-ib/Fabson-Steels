import { useState, lazy, Suspense } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileNav } from "@/components/layout/MobileNav";
import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { CostTransparency } from "@/components/sections/CostTransparency";
import { SiteVisit } from "@/components/sections/SiteVisit";
import { QuoteModal } from "@/components/ui/QuoteModal";
import { StructuredData, localBusinessSchema } from "@/components/seo/StructuredData";

// Lazy load below-the-fold components - they're not needed for initial render
const Gallery = lazy(() => import("@/components/sections/Gallery"));
const Testimonials = lazy(() => import("@/components/sections/Testimonials"));
const Contact = lazy(() => import("@/components/sections/Contact"));

export default function Home() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const handleOpenQuote = (service?: string) => {
    setSelectedService(service);
    setIsQuoteOpen(true);
  };

  const handleBookVisit = () => {
    const element = document.getElementById("book-visit");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground flex flex-col">
      <StructuredData type="localBusiness" data={localBusinessSchema} />
      <Navbar />
      
      <main className="flex-grow">
        <Hero 
          onBookVisit={handleBookVisit} 
          onGetQuote={() => handleOpenQuote()} 
        />
        <Process />
        <Services onSelectService={handleOpenQuote} />
        <QuoteModal 
          isOpen={isQuoteOpen} 
          onClose={() => setIsQuoteOpen(false)} 
          defaultService={selectedService}
        />
        <CostTransparency />
        <SiteVisit />
        <Suspense fallback={null}>
          <Gallery />
        </Suspense>
        <Suspense fallback={null}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={null}>
          <Contact />
        </Suspense>
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
}
