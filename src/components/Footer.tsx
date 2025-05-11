
import { ArrowRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const trackOrderNowClick = () => {
    console.log('FooterOrderNowClick tracked');
    // Meta Pixel event tracking would go here
    window.location.href = 'https://lobster-guys-rolls-fries.square.site/';
  };

  return (
    <footer className="bg-lobster-dark text-white py-10">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-8 mb-8">
          <a href="#" className="mb-6 md:mb-0">
            <img 
              src="/lovable-uploads/d560a243-7d42-49a0-a73b-e1e2f78409d4.png" 
              alt="Lobster Grill Logo" 
              className="h-14"
            />
          </a>
          
          <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4">
            <a href="#menu" className="hover:text-lobster-red transition-colors">Menu</a>
            <a href="#location" className="hover:text-lobster-red transition-colors">Location</a>
            <a href="#contact" className="hover:text-lobster-red transition-colors">Contact</a>
            <a 
              href="https://lobster-guys-rolls-fries.square.site/" 
              onClick={trackOrderNowClick}
              className="flex items-center text-lobster-red hover:text-red-400 transition-colors"
            >
              Order Online <ArrowRight className="h-4 w-4 ml-2" />
            </a>
          </div>
        </div>
        
        <div className="text-center text-sm text-gray-400">
          <p className="mb-2">
            &copy; {currentYear} Lobster Grill. All rights reserved.
          </p>
          <p>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            {" • "}
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
