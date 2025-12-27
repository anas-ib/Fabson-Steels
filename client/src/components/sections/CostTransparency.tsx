export function CostTransparency() {
  return (
    <section className="py-24 border-y">
      <div className="container px-4 mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-8">Steel Cost Transparency</h2>
        
        <div className="grid md:grid-cols-2 gap-12 text-left">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              We believe in honest pricing. The cost of your project depends on tangible factors, not arbitrary markups. We break down the costs so you know exactly what you are paying for.
            </p>
            <div className="p-4 bg-secondary/50 border border-border">
              <p className="font-medium text-sm">
                Final pricing confirmed after site visit & precise measurement.
              </p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-heading mb-4">Pricing Factors</h3>
            <ul className="space-y-4">
              <li className="flex items-baseline justify-between border-b pb-2 border-black/5">
                <span className="font-medium">Steel Thickness (Gauge)</span>
                <span className="text-sm text-muted-foreground">Heavier = Costlier</span>
              </li>
              <li className="flex items-baseline justify-between border-b pb-2 border-black/5">
                <span className="font-medium">Design Complexity</span>
                <span className="text-sm text-muted-foreground">Laser cut vs. Bar</span>
              </li>
              <li className="flex items-baseline justify-between border-b pb-2 border-black/5">
                <span className="font-medium">Finish Type</span>
                <span className="text-sm text-muted-foreground">Matte / Gloss / Texture</span>
              </li>
              <li className="flex items-baseline justify-between border-b pb-2 border-black/5">
                <span className="font-medium">Installation Difficulty</span>
                <span className="text-sm text-muted-foreground">Height / Access</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
