export function Footer() {
  return (
    <footer className="border-t py-12 bg-background">
      <div className="container px-4 mx-auto text-center">
        <h2 className="text-2xl font-bold font-heading mb-2">Fabson</h2>
        <p className="text-muted-foreground mb-8">Steel & Fabrication Works – Mangalore</p>
        <p className="text-sm text-muted-foreground/60">
          © {new Date().getFullYear()} Fabson. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
