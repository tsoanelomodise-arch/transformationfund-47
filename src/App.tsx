import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TransformationIndex from "./pages/TransformationIndex";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Requirements from "./pages/Requirements";
import StartupGrants from "./pages/StartupGrants";
import About from "./pages/About";
import Stories from "./pages/Stories";
import Contacts from "./pages/Contacts";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TransformationIndex />} />
          <Route path="/old" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/requirements" element={<Requirements />} />
          <Route path="/startup-grants" element={<StartupGrants />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
