
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";

const queryClient = new QueryClient();

// Use HashRouter for GitHub Pages compatibility
const Router = process.env.NODE_ENV === 'production' ? HashRouter : BrowserRouter;

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Router>
      <TooltipProvider>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
        <Toaster />
        <Sonner />
      </TooltipProvider>
    </Router>
  </QueryClientProvider>
);

export default App;
