import { Link } from "wouter";
import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/">
          <a className="text-2xl font-bold tracking-tight font-heading">Fabson Industries</a>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium" aria-label="Main navigation">
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="hover:text-muted-foreground transition-colors" aria-label="Go to home section">
            Home
          </button>
          <button onClick={() => scrollToSection("services")} className="hover:text-muted-foreground transition-colors" aria-label="Go to services section">
            Services
          </button>
          <button onClick={() => scrollToSection("gallery")} className="hover:text-muted-foreground transition-colors" aria-label="Go to gallery section">
            Gallery
          </button>
          <button onClick={() => scrollToSection("contact")} className="hover:text-muted-foreground transition-colors" aria-label="Go to contact section">
            Contact
          </button>
        </nav>

        <div className="flex items-center gap-4">
          <a href="tel:+919148345113" className="hidden md:flex items-center gap-2 text-sm font-medium hover:text-muted-foreground transition-colors" aria-label="Call Fabson Industries">
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span>Call Now</span>
          </a>
          <Button variant="default" className="hidden md:flex items-center gap-2 bg-black text-white hover:bg-black/90 rounded-none" asChild>
            <a href="https://wa.me/919148345113" target="_blank" rel="noopener noreferrer" aria-label="Contact Fabson Industries on WhatsApp">
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              <span>WhatsApp</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
