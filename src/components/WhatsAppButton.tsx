import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/2348163438101?text=Hello%2C%20I%27m%20interested%20in%20your%20construction%20services."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[hsl(142,70%,40%)] hover:bg-[hsl(142,70%,35%)] flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-200"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-[hsl(0,0%,100%)]" />
    </a>
  );
};

export default WhatsAppButton;
