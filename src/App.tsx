import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Cybersecurity from "./pages/Cybersecurity";
import CloudServices from "./pages/CloudServices";
import ITInfrastructure from "./pages/ITInfrastructure";
import DataAnalytics from "./pages/DataAnalytics";
import Contact from "./pages/Contact";
import FAQs from "./pages/FAQs";
import CaseStudies from "./pages/CaseStudies";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cybersecurity" element={<Cybersecurity />} />
          <Route path="/cloud-services" element={<CloudServices />} />
          <Route path="/it-infrastructure" element={<ITInfrastructure />} />
          <Route path="/data-analytics" element={<DataAnalytics />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
