import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileNav } from "@/components/layout/MobileNav";
import { StructuredData } from "@/components/seo/StructuredData";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import gateImg from "@assets/stock_images/steelgate.jpg";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Steel Gates Fabrication in Mangalore",
  description: "Custom steel gates fabrication services in Mangalore by Fabson Industries. Premium quality gates for homes, commercial buildings, and industrial facilities.",
  provider: {
    "@type": "LocalBusiness",
    name: "Fabson Industries",
  },
  areaServed: {
    "@type": "City",
    name: "Mangalore",
  },
  serviceType: "Steel Gates Fabrication",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What types of steel gates do you fabricate in Mangalore?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fabson Industries fabricates custom steel gates including sliding gates, swing gates, automated gates, security gates, and decorative gates for residential and commercial properties in Mangalore.",
      },
    },
    {
      "@type": "Question",
      name: "How much do steel gates cost in Mangalore?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Steel gate prices in Mangalore vary based on size, design complexity, and automation features. We offer transparent pricing with free site visits and estimates. Contact us at +919148345113 for a quote.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide installation services for steel gates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Fabson Industries provides complete steel gate fabrication and installation services across Mangalore and surrounding areas. Our team handles everything from design to installation.",
      },
    },
  ],
};

export default function SteelGates() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground flex flex-col">
      <StructuredData type="service" data={serviceSchema} />
      <StructuredData type="faq" data={faqSchema} />
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight font-heading mb-6">
                Steel Gates Fabrication in Mangalore | Fabson Industries
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Premium custom steel gates for homes and commercial buildings in Mangalore, Karnataka. Expert fabrication with 10+ years of experience.
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

        {/* Service Image */}
        <section className="py-12">
          <div className="container px-4 mx-auto">
            <div className="aspect-[16/9] overflow-hidden">
              <img src={gateImg} alt="Steel gates fabrication in Mangalore by Fabson Industries" className="w-full h-full object-cover" loading="lazy" decoding="async" />
            </div>
          </div>
        </section>

        {/* Service Details */}
        <section className="py-24">
          <div className="container px-4 mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
                  Custom Steel Gates in Mangalore
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Fabson Industries is a trusted name for steel gates fabrication in Mangalore. We specialize in creating custom gates that combine security, durability, and aesthetic appeal.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Our expert team fabricates premium steel gates for residential homes, commercial buildings, and industrial facilities across Mangalore, Udupi, and surrounding areas in Karnataka.
                </p>
                <h3 className="text-2xl font-bold font-heading mb-4 mt-8">
                  Types of Steel Gates We Fabricate
                </h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                    <span><strong>Sliding Gates:</strong> Space-efficient sliding steel gates perfect for driveways and entrances</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                    <span><strong>Swing Gates:</strong> Traditional and modern swing gates in various designs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                    <span><strong>Automated Gates:</strong> Motorized gates with remote control and safety features</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                    <span><strong>Security Gates:</strong> Heavy-duty security gates for commercial and industrial use</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                    <span><strong>Decorative Gates:</strong> Ornamental steel gates with custom designs and patterns</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold font-heading mb-4">
                  Why Choose Fabson Industries for Steel Gates?
                </h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="font-bold">Premium Materials:</strong> We use high-grade stainless steel (304/316) for durability and rust resistance
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="font-bold">Custom Design:</strong> Every gate is designed to match your specific requirements and aesthetic preferences
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="font-bold">Expert Installation:</strong> Professional installation by experienced technicians across Mangalore
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="font-bold">10+ Years Experience:</strong> Trusted by 500+ customers in Mangalore and surrounding areas
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="font-bold">Transparent Pricing:</strong> No hidden costs, clear estimates before work begins
                    </div>
                  </li>
                </ul>

                <div className="bg-secondary/30 p-6 border border-border">
                  <h4 className="font-bold text-lg mb-3">Service Areas</h4>
                  <p className="text-muted-foreground mb-2">
                    We provide steel gates fabrication and installation services across:
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Mangalore, Udupi, Kasaragod, Surathkal, Bejai, Kadri, Kottara, and surrounding areas in Karnataka.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-black text-white">
          <div className="container px-4 mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              Ready to Install Your Custom Steel Gate?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Get a free site visit and transparent estimate. Our team will visit your location in Mangalore to assess your requirements.
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



