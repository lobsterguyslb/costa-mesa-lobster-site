
import { useState } from "react";
import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("EmailSignupClick tracked");
    // Meta Pixel event tracking would go here
    
    if (email) {
      toast({
        title: "Thanks for subscribing!",
        description: "You've been added to our email list.",
      });
      setEmail("");
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-lobster-dark text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-1">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">Follow Us</h2>
            <a 
              href="https://www.instagram.com/lobstergrill" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center mb-6 hover:text-lobster-red transition-colors"
              onClick={() => console.log("InstagramClick tracked")}
            >
              <Instagram className="h-7 w-7 mr-3" />
              <span className="text-lg">@lobstergrill</span>
            </a>
            <img 
              src="/lovable-uploads/d560a243-7d42-49a0-a73b-e1e2f78409d4.png" 
              alt="Lobster Grill Logo" 
              className="h-24 mt-6 opacity-90"
            />
          </div>
          
          <div className="md:col-span-2">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">Join Our Mailing List</h2>
            <p className="mb-6">
              Sign up to get exclusive promotions, special offers, and be the first to know about seasonal specials.
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white text-black flex-1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </Button>
            </form>
            
            <div className="mt-12">
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p className="mb-2">
                <strong>Phone:</strong>{" "}
                <a href="tel:9498188898" className="hover:text-lobster-red transition-colors">
                  (949) 818-8898
                </a>
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:info@lobstergrill.com" className="hover:text-lobster-red transition-colors">
                  info@lobstergrill.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
