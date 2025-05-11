
import { Button } from "@/components/ui/button";

const Hero = () => {
  const trackOrderNowClick = () => {
    console.log('OrderNowClick tracked');
    // Meta Pixel event tracking would go here
    window.location.href = 'https://lobster-guys-rolls-fries.square.site/';
  };

  const trackSeeFullMenuClick = () => {
    console.log('SeeFullMenuClick tracked');
    // Meta Pixel event tracking would go here
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-lobster-dark text-white py-16 md:py-28">
      <div className="absolute inset-0 bg-gradient-to-r from-lobster-dark/90 to-lobster-dark/60 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: `url('/lovable-uploads/5788e1db-1735-49fd-9a6f-e8253dfc9332.png')`,
          backgroundBlendMode: 'overlay',
        }}
      ></div>
      
      <div className="container-custom relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
            Fresh Lobster Rolls & Seafood in Costa Mesa
          </h1>
          
          <p className="text-lg md:text-xl mb-8">
            Now open daily — Order online or visit us today! Takeaway only
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={trackOrderNowClick} className="btn-primary text-base">
              Order Now
            </Button>
            <Button onClick={trackSeeFullMenuClick} className="bg-white text-lobster-dark hover:bg-gray-100 text-base">
              See Full Menu
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
