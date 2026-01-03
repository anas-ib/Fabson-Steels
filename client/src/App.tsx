import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import SteelGates from "@/pages/services/steel-gates";
import KitchenSteel from "@/pages/services/kitchen-steel";
import IndustrialFabrication from "@/pages/services/industrial-fabrication";
import StaircasesRailings from "@/pages/services/staircases-railings";

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
