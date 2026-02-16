
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

export default App;
