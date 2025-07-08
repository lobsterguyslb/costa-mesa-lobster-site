
import { useEffect } from 'react';
import { Navbar } from "@/components/Navbar";
import Hero from "@/components/Hero";
import MenuPreview from "@/components/MenuPreview";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Meta Pixel PageView event would go here
    console.log('PageView tracked');
    
    // Update document title for SEO
    document.title = "Lobster Grill | Fresh Lobster Rolls & Seafood in Costa Mesa";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <MenuPreview />
        <Location />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
