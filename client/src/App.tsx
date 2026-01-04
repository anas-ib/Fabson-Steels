import { lazy, Suspense } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";

// Lazy load service pages - only load when user navigates to them
const SteelGatesLazy = lazy(() => import("@/pages/services/steel-gates"));
const KitchenSteelLazy = lazy(() => import("@/pages/services/kitchen-steel"));
const IndustrialFabricationLazy = lazy(() => import("@/pages/services/industrial-fabrication"));
const StaircasesRailingsLazy = lazy(() => import("@/pages/services/staircases-railings"));

// Loading fallback component
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-muted-foreground">Loading...</div>
    </div>
  );
}

// Wrapper components for lazy-loaded routes (wouter compatibility)
function SteelGates() {
  return (
    <Suspense fallback={<PageLoader />}>
      <SteelGatesLazy />
    </Suspense>
  );
}

function KitchenSteel() {
  return (
    <Suspense fallback={<PageLoader />}>
      <KitchenSteelLazy />
    </Suspense>
  );
}

function IndustrialFabrication() {
  return (
    <Suspense fallback={<PageLoader />}>
      <IndustrialFabricationLazy />
    </Suspense>
  );
}

function StaircasesRailings() {
  return (
    <Suspense fallback={<PageLoader />}>
      <StaircasesRailingsLazy />
    </Suspense>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services/steel-gates" component={SteelGates} />
      <Route path="/services/kitchen-steel" component={KitchenSteel} />
      <Route path="/services/industrial-fabrication" component={IndustrialFabrication} />
      <Route path="/services/staircases-railings" component={StaircasesRailings} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
