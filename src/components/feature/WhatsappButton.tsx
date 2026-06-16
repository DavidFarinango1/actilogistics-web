import { useState } from 'react';

const WHATSAPP_NUMBER = '593939192869';
const WHATSAPP_MESSAGE = 'Hola, me interesa conocer más sobre los servicios de Actilogistics.';
const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61590886948030';
const INSTAGRAM_URL = 'https://www.instagram.com/actilogistics1/';
const LINKEDIN_URL = 'https://www.linkedin.com/feed/';

export default function WhatsappButton() {
  const [hovered, setHovered] = useState(false);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* LinkedIn */}
      <a
        href={LINKEDIN_URL}
        target="_blank"
        rel="nofollow noopener noreferrer"
        aria-label="Síguenos en LinkedIn"
        className="w-12 h-12 flex items-center justify-center rounded-full bg-[#0A66C2] hover:bg-[#08538f] shadow-lg transition-all hover:scale-110 cursor-pointer"
      >
        <i className="ri-linkedin-fill text-2xl text-white"></i>
      </a>

      {/* Facebook */}
      <a
        href={FACEBOOK_URL}
        target="_blank"
        rel="nofollow noopener noreferrer"
        aria-label="Síguenos en Facebook"
        className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1877F2] hover:bg-[#0e63d6] shadow-lg transition-all hover:scale-110 cursor-pointer"
      >
        <i className="ri-facebook-fill text-2xl text-white"></i>
      </a>

      {/* Instagram */}
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="nofollow noopener noreferrer"
        aria-label="Síguenos en Instagram"
        className="w-12 h-12 flex items-center justify-center rounded-full shadow-lg transition-all hover:scale-110 cursor-pointer"
        style={{ background: 'radial-gradient(circle at 30% 110%, #fdf497 0%, #fd5949 45%, #d6249f 70%, #285AEB 100%)' }}
      >
        <i className="ri-instagram-line text-2xl text-white"></i>
      </a>

      {/* WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="nofollow noopener noreferrer"
        aria-label="Contáctanos por WhatsApp"
        className="flex items-center gap-3 cursor-pointer group"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Tooltip */}
        <div
          className={`transition-all duration-300 ${
            hovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
          }`}
        >
          <div className="relative bg-foreground-950 text-background-50 text-xs font-label font-600 px-3 py-2 rounded-lg whitespace-nowrap">
            ¡Escríbenos por WhatsApp!
            <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[5px] border-b-[5px] border-l-[6px] border-t-transparent border-b-transparent border-l-foreground-950"></div>
          </div>
        </div>

        {/* Button */}
        <div className="relative w-14 h-14 flex items-center justify-center rounded-full bg-[#25D366] hover:bg-[#1ebe5d] shadow-lg transition-colors">
          {/* Pulse ring */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30"></span>
          <i className="ri-whatsapp-line text-2xl text-white"></i>
        </div>
      </a>
    </div>
  );
}
