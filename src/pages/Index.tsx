import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Differentials from "@/components/Differentials";
import HowItWorks from "@/components/HowItWorks";
import Trust from "@/components/Trust";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const timer = window.setTimeout(() => {
        const el = document.querySelector(location.hash);
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
      return () => window.clearTimeout(timer);
    }
  }, [location.hash]);

  return (
    <div id="top" className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Differentials />
        <HowItWorks />
        <Trust />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
