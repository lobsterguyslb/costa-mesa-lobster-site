
import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const trackOrderNowClick = () => {
    console.log('OrderNowClick tracked');
    // Meta Pixel event tracking would go here
    window.location.href = 'https://lobster-guys-rolls-fries.square.site/';
  };

  return (
    <nav className="py-4 bg-lobster-cream sticky top-0 z-50 shadow-sm">
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/d560a243-7d42-49a0-a73b-e1e2f78409d4.png" 
            alt="Lobster Grill Logo" 
            className="h-14 md:h-16"
          />
        </div>
        
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#menu" className="font-medium hover:text-lobster-red transition-colors">Menu</a>
          <a href="#location" className="font-medium hover:text-lobster-red transition-colors">Location</a>
          <a href="#contact" className="font-medium hover:text-lobster-red transition-colors">Contact</a>
          <Button onClick={trackOrderNowClick} className="btn-primary">
            Order Now
          </Button>
        </div>
        
        <div className="md:hidden">
          <Button onClick={toggleMenu} variant="outline" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 z-50 animate-fade-in">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <a href="#menu" className="py-2 font-medium hover:text-lobster-red transition-colors" onClick={() => setIsMenuOpen(false)}>Menu</a>
            <a href="#location" className="py-2 font-medium hover:text-lobster-red transition-colors" onClick={() => setIsMenuOpen(false)}>Location</a>
            <a href="#contact" className="py-2 font-medium hover:text-lobster-red transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
            <Button onClick={trackOrderNowClick} className="btn-primary w-full">
              Order Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
