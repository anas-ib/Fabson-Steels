import { Check } from "lucide-react";

const reasons = [
  "Custom fabrication exactly to your specs",
  "Premium quality steel materials (304/316 grade)",
  "Experienced workers with 10+ years skill",
  "On-time delivery guarantee",
  "Transparent pricing with no hidden costs",
];

export function Testimonials() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-8">
              Why Choose Fabson Industries for Steel Works in Mangalore?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              We don't just weld metal; we build trust. Our commitment to quality and transparency sets us apart in the industry.
            </p>
            <ul className="space-y-4">
              {reasons.map((reason, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 bg-black text-white rounded-full p-0.5">
                    <Check className="h-3 w-3" />
                  </div>
                  <span className="font-medium">{reason}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white p-8 md:p-12 border border-border h-full flex flex-col justify-center">
            <blockquote className="text-xl md:text-2xl font-heading leading-relaxed mb-6">
              "Serious people, serious work. They delivered exactly what they promised, on time and within budget."
            </blockquote>
            <cite className="not-italic font-medium text-muted-foreground">
              — Rajesh Shetty, Mangalore
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
}
