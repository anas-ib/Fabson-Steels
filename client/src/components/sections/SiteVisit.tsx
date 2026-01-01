import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function SiteVisit() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    area: "",
    time: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Requesting free site visit%0AName: ${formData.name}%0ALocation: ${formData.area}%0APreferred time: ${formData.time}%0APhone: ${formData.phone}`;
    window.open(`https://wa.me/919148345113?text=${text}`, "_blank");
  };

  return (
    <section id="book-visit" className="py-24 bg-black text-white">
      <div className="container px-4 mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            Book Free <br /> Site Visit
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-md">
            Our expert will visit your location to take measurements and discuss design options. No obligation.
          </p>
          
          <div className="space-y-4 text-white/50 text-sm">
            <p>✓ Mangalore City & Surrounding Areas</p>
            <p>✓ Within 24-48 Hours</p>
            <p>✓ Free Consultation</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white text-black p-8 md:p-10 space-y-6 max-w-md w-full ml-auto">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input 
              id="name" 
              className="rounded-none h-12 border-input focus-visible:ring-black bg-white" 
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="visit-phone">Phone Number</Label>
            <Input 
              id="visit-phone" 
              className="rounded-none h-12 border-input focus-visible:ring-black bg-white" 
              required
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="area">Area / Location</Label>
              <Input 
                id="area" 
                placeholder="e.g. Bejai"
                className="rounded-none h-12 border-input focus-visible:ring-black bg-white" 
                required
                value={formData.area}
                onChange={(e) => setFormData({...formData, area: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="time">Preferred Time</Label>
              <Select onValueChange={(val) => setFormData({...formData, time: val})}>
                <SelectTrigger className="rounded-none h-12 border-input focus:ring-black bg-white">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Morning">Morning</SelectItem>
                  <SelectItem value="Afternoon">Afternoon</SelectItem>
                  <SelectItem value="Evening">Evening</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button type="submit" className="w-full h-14 bg-black text-white hover:bg-black/90 rounded-none text-lg mt-2">
            Book Site Visit
          </Button>
        </form>
      </div>
    </section>
  );
}
