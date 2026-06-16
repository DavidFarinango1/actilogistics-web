import { useState } from 'react';

const WHATSAPP_NUMBER = '593939192869';
const WHATSAPP_MESSAGE = 'Hola, me interesa conocer más sobre los servicios de Actilogistics.';

export default function WhatsappButton() {
  const [hovered, setHovered] = useState(false);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="nofollow noopener noreferrer"
      aria-label="Contáctanos por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 cursor-pointer group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Tooltip */}
      <div
        className={`transition-all duration-300 ${
          hovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
        }`}
      >
        <div className="bg-foreground-950 text-background-50 text-xs font-label font-600 px-3 py-2 rounded-lg whitespace-nowrap">
          ¡Escríbenos por WhatsApp!
          <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[5px] border-b-[5px] border-l-[6px] border-t-transparent border-b-transparent border-l-foreground-950"></div>
        </div>
      </div>

      {/* Button */}
      <div className="relative w-14 h-14 flex items-center justify-center rounded-full bg-[#25D366] hover:bg-[#1ebe5d] transition-colors">
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30"></span>
        <i className="ri-whatsapp-line text-2xl text-white"></i>
      </div>
    </a>
  );
}