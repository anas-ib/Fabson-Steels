import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface HeroProps {
  onBookVisit: () => void;
  onGetQuote: () => void;
}

export function Hero({ onBookVisit, onGetQuote }: HeroProps) {
  return (
    <section className="relative pt-20 pb-32 md:pt-32 md:pb-48 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-primary font-heading mb-6 leading-[1.1]">
              Fabson Industries: Premium Steel Works <br /> & Fabrication in Mangalore
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light max-w-xl">
              Expert Stainless Steel Works · Custom Gates · Kitchen Steel · Industrial Fabrication · Staircases & Railings
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Button 
              size="lg" 
              onClick={onBookVisit}
              className="bg-black text-white hover:bg-black/90 h-14 px-8 text-lg rounded-none"
            >
              Book Free Site Visit
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={onGetQuote}
              className="border-black text-black hover:bg-black hover:text-white h-14 px-8 text-lg rounded-none bg-transparent"
            >
              Know More
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-6 text-sm font-medium text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-black" />
              <span>Free Inspection</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-black" />
              <span>Transparent Pricing</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-black" />
              <span>Local Trusted Work</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
