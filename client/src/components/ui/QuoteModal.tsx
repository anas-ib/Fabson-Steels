import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle } from "lucide-react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export function QuoteModal({ isOpen, onClose, defaultService }: QuoteModalProps) {
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const service = defaultService || "General Inquiry";

  const handleWhatsAppRedirect = () => {
    if (!phone) return;
    
    const text = `Service: ${service}%0ALocation: Mangalore%0APhone: ${phone}%0A${notes ? `Notes: ${notes}%0A` : ""}Requesting estimate`;
    window.open(`https://wa.me/919148345113?text=${text}`, "_blank");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md rounded-none border-black p-0 overflow-hidden bg-white gap-0">
        <div className="p-6 bg-black text-white">
          <DialogTitle className="text-xl font-heading">Know More</DialogTitle>
          <p className="text-white/70 text-sm mt-2">
            We'll analyze your request and reply on WhatsApp.
          </p>
        </div>
        
        <div className="p-6 space-y-6">
          <div className="space-y-2">
            <Label>Selected Service</Label>
            <div className="p-3 bg-muted text-sm font-medium border border-border/50">
              {service}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number <span className="text-red-500">*</span></Label>
            <Input 
              id="phone" 
              placeholder="Your WhatsApp Number" 
              className="rounded-none h-11 border-input focus-visible:ring-black"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
             <Label htmlFor="notes">Additional Details (Optional)</Label>
             <Textarea
               id="notes"
               placeholder="Approximate dimensions, design preferences..."
               className="rounded-none border-input focus-visible:ring-black resize-none"
               value={notes}
               onChange={(e) => setNotes(e.target.value)}
             />
          </div>

          <div className="pt-2">
             <Button 
               className="w-full h-12 bg-black text-white hover:bg-black/90 rounded-none gap-2 text-base"
               onClick={handleWhatsAppRedirect}
               disabled={!phone}
             >
               <MessageCircle className="h-4 w-4" />
               Connect on WhatsApp
             </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
