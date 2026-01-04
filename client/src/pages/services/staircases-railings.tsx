import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileNav } from "@/components/layout/MobileNav";
import { StructuredData } from "@/components/seo/StructuredData";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Staircases & Railings Fabrication in Mangalore",
  description: "Custom staircases and railings fabrication services in Mangalore by Fabson Industries. Premium stainless steel and iron staircases, balustrades, and handrails.",
  provider: {
    "@type": "LocalBusiness",
    name: "Fabson Industries",
  },
  areaServed: {
    "@type": "City",
    name: "Mangalore",
  },
  serviceType: "Staircases & Railings Fabrication",
};

export default function StaircasesRailings() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground flex flex-col">
      <StructuredData type="service" data={serviceSchema} />
      <Navbar />
      
      <main className="flex-grow">
        <section className="pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight font-heading mb-6">
                Staircases & Railings Fabrication in Mangalore | Fabson Industries
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Custom staircases and railings fabrication in Mangalore. Premium stainless steel and iron staircases, balustrades, handrails, and safety railings for homes and commercial buildings.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-black text-white hover:bg-black/90 h-14 px-8 text-lg rounded-none">
                  <a href="tel:+919148345113">Call for Free Estimate</a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-black text-black hover:bg-black hover:text-white h-14 px-8 text-lg rounded-none">
                  <a href="https://wa.me/919148345113" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container px-4 mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
                  Staircases & Railings in Mangalore
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Fabson Industries specializes in custom staircases and railings fabrication in Mangalore. We create beautiful, safe, and durable staircases and railings using premium stainless steel and iron materials.
                </p>
                <h3 className="text-2xl font-bold font-heading mb-4 mt-8">
                  Our Staircases & Railings Services
                </h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                    <span><strong>Stainless Steel Staircases:</strong> Modern, durable staircases with various designs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                    <span><strong>Iron Staircases:</strong> Traditional and contemporary iron staircase designs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                    <span><strong>Handrails & Balustrades:</strong> Custom handrails and balustrades for safety and aesthetics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                    <span><strong>Safety Railings:</strong> Industrial and residential safety railings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                    <span><strong>Spiral Staircases:</strong> Space-efficient spiral staircase designs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                    <span><strong>Custom Designs:</strong> Tailored staircase and railing solutions</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold font-heading mb-4">
                  Why Choose Fabson Industries?
                </h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="font-bold">Safety First:</strong> All railings and staircases meet safety standards and building codes
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="font-bold">Premium Materials:</strong> High-quality stainless steel and iron for durability
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="font-bold">Custom Design:</strong> Staircases designed to match your architectural style
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="font-bold">Expert Installation:</strong> Professional installation by experienced technicians
                    </div>
                  </li>
                </ul>

                <div className="bg-secondary/30 p-6 border border-border">
                  <h4 className="font-bold text-lg mb-3">Service Areas</h4>
                  <p className="text-sm text-muted-foreground">
                    We provide staircases and railings fabrication services across Mangalore, Udupi, Kasaragod, and surrounding areas in Karnataka.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-black text-white">
          <div className="container px-4 mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              Need Custom Staircases or Railings?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Get a free consultation and estimate for your staircases and railings project in Mangalore.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-black hover:bg-white/90 h-14 px-8 text-lg rounded-none">
                <a href="tel:+919148345113">Call +919148345113</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black h-14 px-8 text-lg rounded-none bg-transparent">
                <a href="https://wa.me/919148345113" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
}



