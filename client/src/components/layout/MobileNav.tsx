import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MobileNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t p-4 md:hidden">
      <div className="grid grid-cols-2 gap-4">
        <Button variant="outline" className="w-full rounded-none border-black text-black" asChild>
          <a href="tel:+919148345113">
            <Phone className="mr-2 h-4 w-4" />
            Call
          </a>
        </Button>
        <Button className="w-full rounded-none bg-black text-white hover:bg-black/90" asChild>
          <a href="https://wa.me/919148345113" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-2 h-4 w-4" />
            WhatsApp
          </a>
        </Button>
      </div>
    </div>
  );
}
