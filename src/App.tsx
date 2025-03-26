
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import { Suspense } from "react";

// Always use HashRouter for GitHub Pages
const queryClient = new QueryClient();

// Simple fallback for suspense
const Fallback = () => <div className="p-4 text-center">Loading...</div>;

// Simple error boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("React Error Boundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div className="p-4 text-center text-red-500">Something went wrong. Please refresh the page.</div>;
    }
    return this.props.children;
  }
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HashRouter>
      <TooltipProvider>
        <ErrorBoundary>
          <Suspense fallback={<Fallback />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="*" element={<div className="p-4 text-center">Page not found</div>} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
        <Toaster />
        <Sonner />
      </TooltipProvider>
    </HashRouter>
  </QueryClientProvider>
);

export default App;
