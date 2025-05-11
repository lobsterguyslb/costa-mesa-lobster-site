
import { MapPin, Clock, Phone } from "lucide-react";

const Location = () => {
  return (
    <section id="location" className="py-16 md:py-24 bg-lobster-cream">
      <div className="container-custom">
        <h2 className="section-heading text-center">Location & Hours</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 items-center">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-start mb-6">
              <MapPin className="h-6 w-6 text-lobster-red mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-xl mb-2">Find Us</h3>
                <p className="text-gray-700">
                  1750 Newport Blvd Unit K6<br />
                  Costa Mesa, CA
                </p>
                <p className="mt-2 text-lobster-red hover:underline">
                  <a href="https://maps.google.com/?q=1750+Newport+Blvd+Unit+K6,+Costa+Mesa,+CA" target="_blank" rel="noopener noreferrer">
                    Get Directions
                  </a>
                </p>
              </div>
            </div>
            
            <div className="flex items-start mb-6">
              <Clock className="h-6 w-6 text-lobster-red mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-xl mb-2">Opening Hours</h3>
                <p className="text-gray-700">
                  Open daily<br />
                  10:30 AM – 8:30 PM
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Phone className="h-6 w-6 text-lobster-red mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-xl mb-2">Call Us</h3>
                <p className="text-gray-700">
                  <a href="tel:9498188898" className="hover:text-lobster-red">
                    (949) 818-8898
                  </a>
                </p>
              </div>
            </div>
          </div>
          
          <div className="h-[400px] rounded-lg overflow-hidden shadow-md">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.308229863928!2d-117.91732232372168!3d33.64512923973063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcdf7edbb94053%3A0x71fb7bd91c14b925!2s1750%20Newport%20Blvd%2C%20Costa%20Mesa%2C%20CA%2092627!5e0!3m2!1sen!2sus!4v1715465617805!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Lobster Grill Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
