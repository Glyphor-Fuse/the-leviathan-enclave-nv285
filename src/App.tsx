<<<<<<< HEAD

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Hero from "@/components/Hero";
import ImmersiveFeatures from "@/components/ImmersiveFeatures";
import MenuGallery from "@/components/MenuGallery";
import SonarReservation from "@/components/SonarReservation";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-black">
          <Hero />
          <ImmersiveFeatures />
          <MenuGallery />
          <SonarReservation />
          <Reviews />
          <Footer />
        </main>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
=======
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route as RRDRoute } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Routes>
        <RRDRoute path="/" element={<Index />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <RRDRoute path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);
>>>>>>> copilot/fuse-agent

export default App;
