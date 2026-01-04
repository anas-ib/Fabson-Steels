import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileNav } from "@/components/layout/MobileNav";
import { StructuredData } from "@/components/seo/StructuredData";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import weldingImg from "@assets/stock_images/customfabrication.png";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Industrial Fabrication Services in Mangalore",
  description: "Professional industrial steel fabrication services in Mangalore by Fabson Industries. Custom metal fabrication, structural steel work, and industrial solutions.",
  provider: {
    "@type": "LocalBusiness",
    name: "Fabson Industries",
  },
  areaServed: {
    "@type": "City",
    name: "Mangalore",
  },
  serviceType: "Industrial Steel Fabrication",
};

export default function IndustrialFabrication() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground flex flex-col">
      <StructuredData type="service" data={serviceSchema} />
      <Navbar />
      
      <main className="flex-grow">
        <section className="pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight font-heading mb-6">
                Industrial Fabrication Services in Mangalore | Fabson Industries
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Expert industrial steel fabrication in Mangalore. Custom metal fabrication, structural steel work, machinery frames, and industrial solutions for businesses across Karnataka.
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

        <section className="py-12">
          <div className="container px-4 mx-auto">
            <div className="aspect-[16/9] overflow-hidden">
              <img src={weldingImg} alt="Industrial fabrication services in Mangalore by Fabson Industries" className="w-full h-full object-cover" loading="lazy" decoding="async" />
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container px-4 mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
                  Industrial Steel Fabrication in Mangalore
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Fabson Industries provides comprehensive industrial fabrication services in Mangalore. We specialize in custom metal fabrication, structural steel work, and industrial solutions for manufacturing, processing, and commercial facilities.
                </p>
                <h3 className="text-2xl font-bold font-heading mb-4 mt-8">
                  Our Industrial Fabrication Services
                </h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                    <span><strong>Structural Steel Work:</strong> Beams, columns, frames, and support structures</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                    <span><strong>Machinery Frames:</strong> Custom frames and bases for industrial equipment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                    <span><strong>Custom Metal Fabrication:</strong> Precision fabrication to exact specifications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                    <span><strong>Industrial Racks & Storage:</strong> Heavy-duty storage solutions for warehouses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                    <span><strong>Pipe & Duct Work:</strong> Custom piping and ventilation systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                    <span><strong>Welding Services:</strong> Professional welding for all industrial applications</span>
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
                      <strong className="font-bold">Precision Engineering:</strong> Accurate fabrication meeting industrial standards
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="font-bold">Quality Materials:</strong> Premium steel grades for durability and performance
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="font-bold">On-Time Delivery:</strong> Reliable project completion within deadlines
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="font-bold">Experienced Team:</strong> Skilled fabricators with 10+ years of experience
                    </div>
                  </li>
                </ul>

                <div className="bg-secondary/30 p-6 border border-border">
                  <h4 className="font-bold text-lg mb-3">Industries We Serve</h4>
                  <p className="text-sm text-muted-foreground">
                    Manufacturing, Processing Plants, Warehouses, Commercial Buildings, and Industrial Facilities across Mangalore and Karnataka.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-black text-white">
          <div className="container px-4 mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              Need Industrial Fabrication Services?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Contact Fabson Industries for professional industrial fabrication solutions in Mangalore. Free consultation and estimates.
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



