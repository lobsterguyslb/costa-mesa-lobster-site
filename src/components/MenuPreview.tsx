
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

type MenuItem = {
  id: string;
  name: string;
  description: string;
  image: string;
};

const menuItems: MenuItem[] = [
  {
    id: "connecticut-lobster-roll",
    name: "Connecticut Style Lobster Roll",
    description: "Warm lobster meat tossed in drawn butter, served on a toasted split-top bun with green onion. Traditional New England style.",
    image: "/lovable-uploads/7965f604-313f-453f-9eab-6a896fd64445.png"
  },
  {
    id: "maine-lobster-roll",
    name: "Maine Style Lobster Roll",
    description: "Chilled lobster meat tossed with light mayonnaise, lemon, and celery salt, served on a toasted split-top bun.",
    image: "/lovable-uploads/4f803037-e3ce-457f-8cca-1c8e9e5c176f.png"
  },
  {
    id: "lobster-mac",
    name: "Lobster Mac and Cheese",
    description: "Creamy three-cheese blend mac and cheese topped with generous chunks of fresh lobster meat and toasted breadcrumbs.",
    image: "/lovable-uploads/e5a7364b-f9b8-426a-9e7f-d5172f36b1c7.png"
  },
  {
    id: "clam-chowder",
    name: "Clam Chowder",
    description: "Hearty New England style clam chowder with tender clams, potatoes, and bacon in a rich, creamy broth.",
    image: "/lovable-uploads/5788e1db-1735-49fd-9a6f-e8253dfc9332.png"
  }
];

const MenuPreview = () => {
  const trackOrderItemClick = (itemName: string) => {
    console.log(`OrderItemClick_${itemName.replace(/\s+/g, '')} tracked`);
    // Meta Pixel event tracking would go here
    window.location.href = 'https://lobster-guys-rolls-fries.square.site/';
  };

  return (
    <section id="menu" className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <h2 className="section-heading text-center">Our Menu</h2>
        <p className="section-subheading text-center">
          Fresh-caught New England lobster and seafood classics, prepared to perfection.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
          {menuItems.map((item) => (
            <Card key={item.id} className="overflow-hidden border shadow-md hover:shadow-lg transition-shadow">
              <div className="h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-display text-2xl text-lobster-dark">{item.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-700">{item.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button onClick={() => trackOrderItemClick(item.name)} className="btn-primary w-full">
                  Order Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button 
            onClick={() => window.location.href = 'https://lobster-guys-rolls-fries.square.site/'} 
            className="btn-primary"
          >
            View Complete Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;
