
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";

// Always use HashRouter for GitHub Pages
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HashRouter>
      <TooltipProvider>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
        <Toaster />
        <Sonner />
      </TooltipProvider>
    </HashRouter>
  </QueryClientProvider>
);

export default App;
