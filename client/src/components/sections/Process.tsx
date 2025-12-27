import { motion } from "framer-motion";

const steps = [
  { number: "01", title: "Choose Service" },
  { number: "02", title: "Share Photo" },
  { number: "03", title: "Get Estimate" },
  { number: "04", title: "Free Site Visit" },
];

export function Process() {
  return (
    <section className="py-24 border-b">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold mb-16 font-heading">How It Works</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="text-sm font-medium text-muted-foreground mb-4 border-b pb-4 border-black/10">
                {step.number}
              </div>
              <h3 className="text-xl font-medium">{step.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
