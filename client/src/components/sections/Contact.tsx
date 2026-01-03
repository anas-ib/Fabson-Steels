import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 border-t">
      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold font-heading mb-8">Contact Fabson Industries - Steel Works Mangalore</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Workshop Location</h3>
                  <p className="text-muted-foreground">
                    Fabson Industries<br />
                    {/* Industrial Area, Baikampady<br /> */}
                    Mangalore, Karnataka 575011
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Phone</h3>
                  <p className="text-muted-foreground hover:text-black transition-colors">
                    <a href="tel:+919148345113">+919148345113</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MessageCircle className="h-6 w-6 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">WhatsApp</h3>
                  <p className="text-muted-foreground hover:text-black transition-colors">
                    <a href="https://wa.me/919148345113" target="_blank" rel="noopener noreferrer">
                      Chat with us
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="h-[400px] w-full bg-secondary grayscale hover:grayscale-0 transition-all duration-500">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62203.25624726591!2d74.7828628379206!3d12.914141699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35a4c37bf488f%3A0x827bbc7a74fcfe64!2sMangaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1714478148154!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
