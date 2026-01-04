import { Button } from "@/components/ui/button";
import gateImg from "@assets/stock_images/modern_minimalistic__b4ca4779.jpg";
import kitchenImg from "@assets/stock_images/stainless_steel_modu_5ffa047b.jpg";
import rackImg from "@assets/stock_images/industrial_heavy_dut_8194c77a.webp";
import stairImg from "@assets/stock_images/modern_steel_stairca_1b580cf9.jpg";

const galleryImages = [
  gateImg,
  stairImg,
  kitchenImg,
  rackImg,
  stairImg, // Reusing for grid effect
  gateImg,
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24">
      <div className="container px-4 mx-auto">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl font-bold font-heading">Steel Fabrication Projects in Mangalore - Gallery</h2>
          <Button variant="link" className="text-black underline-offset-4 hidden md:flex">
            View Full Gallery
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 bg-black p-1">
          {galleryImages.map((src, i) => (
            <div key={i} className="aspect-square relative overflow-hidden group">
              <img 
                src={src} 
                alt={`Steel fabrication project in Mangalore by Fabson Industries - ${i+1}`}
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
           <Button variant="outline" className="border-black text-black rounded-none">
            View Full Gallery
          </Button>
        </div>
      </div>
    </section>
  );
}
