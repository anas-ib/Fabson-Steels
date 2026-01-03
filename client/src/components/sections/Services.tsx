import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import gateImg from "@assets/stock_images/steelgate.jpg";
import kitchenImg from "@assets/stock_images/kitchen.jpg";
import rackImg from "@assets/stock_images/racks.jpg";
import weldingImg from "@assets/stock_images/customfabrication.png";

const services = [
  {
    id: "gates",
    title: "Steel Gates",
    description: "Modern & minimal gates for premium homes.",
    image: gateImg,
    link: "/services/steel-gates",
  },
  {
    id: "kitchen",
    title: "Kitchen Work",
    description: "Modular stainless steel cabinets & fittings.",
    image: kitchenImg,
    link: "/services/kitchen-steel",
  },
  {
    id: "fabrication",
    title: "Industrial Fabrication",
    description: "Custom metal fabrication & structural works.",
    image: weldingImg,
    link: "/services/industrial-fabrication",
  },
  {
    id: "railings",
    title: "Staircases & Railings",
    description: "Custom staircases, railings & handrails.",
    image: rackImg,
    link: "/services/staircases-railings",
  },
];

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export function Services({ onSelectService }: ServicesProps) {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container px-4 mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Steel Fabrication Services in Mangalore</h2>
            <p className="text-muted-foreground max-w-xl">
              Fabson Industries specializes in premium stainless steel works, custom gates, kitchen steel, and industrial fabrication across Mangalore, Karnataka. Expert craftsmanship with 10+ years of experience.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Link key={service.id} href={service.link}>
              <div 
                className="group cursor-pointer bg-white border border-border hover:border-black transition-colors duration-300"
                onClick={() => onSelectService(service.title)}
              >
                <div className="aspect-[4/3] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img 
                    src={service.image} 
                    alt={`${service.title} fabrication in Mangalore by Fabson Industries`}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 font-heading">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6">{service.description}</p>
                  <div className="flex items-center text-sm font-medium border-b border-black/10 pb-1 w-fit group-hover:border-black transition-colors">
                    Know More <ArrowRight className="ml-2 h-3 w-3" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
