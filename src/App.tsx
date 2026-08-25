import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";

const Catalog = lazy(() => import("./pages/Catalog"));
const Auth = lazy(() => import("./pages/Auth"));
const Admin = lazy(() => import("./pages/Admin"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AuthLayout = lazy(() => import("./pages/AuthLayout"));

const queryClient = new QueryClient();

const RouteFallback = () => (
  <div className="min-h-screen bg-background grid place-items-center" role="status" aria-live="polite">
    <div className="h-8 w-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
    <span className="sr-only">Carregando página</span>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<RouteFallback />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/catalogo/:category" element={<Catalog />} />
              <Route element={<AuthLayout />}>
                <Route path="/auth" element={<Auth />} />
                <Route path="/admin" element={<Admin />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
