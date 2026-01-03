import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileNav } from "@/components/layout/MobileNav";
import { StructuredData } from "@/components/seo/StructuredData";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import kitchenImg from "@assets/stock_images/kitchen.jpg";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Kitchen Stainless Steel Works in Mangalore",
  description: "Professional kitchen stainless steel fabrication services in Mangalore by Fabson Industries. Modular kitchen cabinets, sinks, countertops, and fittings.",
  provider: {
    "@type": "LocalBusiness",
    name: "Fabson Industries",
  },
  areaServed: {
    "@type": "City",
    name: "Mangalore",
  },
  serviceType: "Kitchen Stainless Steel Fabrication",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What kitchen stainless steel services do you provide in Mangalore?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fabson Industries provides complete kitchen stainless steel works including modular kitchen cabinets, sinks, countertops, storage units, and custom fittings in Mangalore.",
      },
    },
    {
      "@type": "Question",
      name: "Do you use food-grade stainless steel for kitchen work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we use premium food-grade stainless steel (304/316 grade) for all kitchen fabrication work, ensuring hygiene, durability, and easy maintenance.",
      },
    },
  ],
};

export default function KitchenSteel() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground flex flex-col">
      <StructuredData type="service" data={serviceSchema} />
      <StructuredData type="faq" data={faqSchema} />
      <Navbar />
      
      <main className="flex-grow">
        <section className="pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight font-heading mb-6">
                Kitchen Stainless Steel Works in Mangalore | Fabson Industries
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Professional kitchen stainless steel fabrication in Mangalore. Modular kitchen cabinets, sinks, countertops, and custom fittings. Food-grade materials.
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
              <img src={kitchenImg} alt="Kitchen stainless steel works in Mangalore by Fabson Industries" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container px-4 mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
                  Kitchen Stainless Steel Fabrication in Mangalore
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Fabson Industries specializes in premium kitchen stainless steel works in Mangalore. We fabricate modular kitchen solutions using food-grade stainless steel that combines functionality with modern design.
                </p>
                <h3 className="text-2xl font-bold font-heading mb-4 mt-8">
                  Our Kitchen Steel Services
                </h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                    <span><strong>Modular Kitchen Cabinets:</strong> Custom-designed stainless steel kitchen cabinets with optimal storage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                    <span><strong>Kitchen Sinks:</strong> Premium stainless steel sinks in various sizes and designs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                    <span><strong>Countertops:</strong> Durable stainless steel countertops for commercial and residential kitchens</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                    <span><strong>Storage Units:</strong> Custom storage solutions including racks, shelves, and organizers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                    <span><strong>Custom Fittings:</strong> Tailored kitchen fittings and accessories</span>
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
                      <strong className="font-bold">Food-Grade Materials:</strong> Premium 304/316 stainless steel for hygiene and safety
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="font-bold">Custom Design:</strong> Kitchen solutions tailored to your space and requirements
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="font-bold">Easy Maintenance:</strong> Stainless steel surfaces are easy to clean and maintain
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="font-bold">Durable & Long-lasting:</strong> Built to withstand daily use and harsh kitchen conditions
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-black text-white">
          <div className="container px-4 mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              Transform Your Kitchen with Premium Stainless Steel
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Get a free consultation and estimate for your kitchen stainless steel work in Mangalore.
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

