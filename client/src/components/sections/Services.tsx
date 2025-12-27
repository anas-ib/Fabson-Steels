import { ArrowRight } from "lucide-react";
import gateImg from "@assets/stock_images/modern_minimalistic__b4ca4779.jpg";
import kitchenImg from "@assets/stock_images/stainless_steel_modu_5ffa047b.jpg";
import rackImg from "@assets/stock_images/industrial_heavy_dut_8194c77a.jpg";
import weldingImg from "@assets/stock_images/professional_steel_f_4317e25c.jpg";

const services = [
  {
    id: "gates",
    title: "Steel Gates",
    description: "Modern & minimal gates for premium homes.",
    image: gateImg,
  },
  {
    id: "kitchen",
    title: "Kitchen Steel Work",
    description: "Modular stainless steel cabinets & fittings.",
    image: kitchenImg,
  },
  {
    id: "racks",
    title: "Racks & Stands",
    description: "Heavy-duty industrial storage solutions.",
    image: rackImg,
  },
  {
    id: "fabrication",
    title: "Custom Fabrication",
    description: "Grills, railings, and structural works.",
    image: weldingImg,
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
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-xl">
              Precision engineering meeting aesthetic design. We specialize in high-quality steel works.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div 
              key={service.id}
              className="group cursor-pointer bg-white border border-border hover:border-black transition-colors duration-300"
              onClick={() => onSelectService(service.title)}
            >
              <div className="aspect-[4/3] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 font-heading">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-6">{service.description}</p>
                <div className="flex items-center text-sm font-medium border-b border-black/10 pb-1 w-fit group-hover:border-black transition-colors">
                  Get Instant Quote <ArrowRight className="ml-2 h-3 w-3" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
