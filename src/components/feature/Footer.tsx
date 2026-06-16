import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      {/* Main footer */}
      <div className="bg-primary-950 py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Col 1: Navigation */}
          <div className="flex flex-col gap-3">
            <h4 className="font-heading font-700 text-background-50 text-sm tracking-widest uppercase mb-2">Navegación</h4>
            <Link to="/servicios" className="text-background-300 hover:text-accent-400 transition-colors text-sm">Servicios</Link>
            <Link to="/mision-vision" className="text-background-300 hover:text-accent-400 transition-colors text-sm">Misión y Visión</Link>
            <Link to="/sostenibilidad" className="text-background-300 hover:text-accent-400 transition-colors text-sm">Sostenibilidad</Link>
            <Link to="/contacto" className="text-background-300 hover:text-accent-400 transition-colors text-sm">Contacto</Link>

            <div className="mt-4 pt-4 border-t border-primary-800">
              <p className="text-xs font-label font-700 text-background-300 uppercase tracking-wider mb-2">Cobertura</p>
              <div className="flex flex-col gap-1">
                <span className="text-xs text-accent-400 flex items-center gap-1.5">
                  <i className="ri-map-pin-fill"></i> Ecuador (Sede Principal)
                </span>
                <span className="text-xs text-background-400 flex items-center gap-1.5">
                  <i className="ri-map-pin-line"></i> Colombia
                </span>
                <span className="text-xs text-background-400 flex items-center gap-1.5">
                  <i className="ri-map-pin-line"></i> Perú
                </span>
              </div>
            </div>
          </div>

          {/* Col 2: Brand */}
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="flex items-center gap-3 justify-center">
              <div className="w-12 h-12 flex items-center justify-center bg-accent-500 rounded-xl">
                <i className="ri-truck-line text-2xl text-primary-950"></i>
              </div>
              <div translate="no">
                <div className="notranslate font-heading font-900 text-xl tracking-tight text-accent-400">
                  ACTI<span className="text-background-50">LOGISTICS</span>
                </div>
                <div className="text-xs font-body tracking-wide text-background-300">Más que Transporte, Logística sin Límites</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-background-600 text-background-300 hover:text-accent-400 hover:border-accent-400 transition-colors"
                aria-label="LinkedIn"
              >
                <i className="ri-linkedin-fill text-lg"></i>
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-background-600 text-background-300 hover:text-accent-400 hover:border-accent-400 transition-colors"
                aria-label="Facebook"
              >
                <i className="ri-facebook-fill text-lg"></i>
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-background-600 text-background-300 hover:text-accent-400 hover:border-accent-400 transition-colors"
                aria-label="Instagram"
              >
                <i className="ri-instagram-line text-lg"></i>
              </a>
            </div>

            <div className="text-xs text-background-400 leading-relaxed">
              <p className="font-700 text-background-200 mb-2">LÍNEA DE ATENCIÓN</p>
              <a
                href="mailto:gerencia@actilogistics.com"
                className="text-accent-400 hover:underline flex items-center justify-center gap-1"
                rel="nofollow"
              >
                <i className="ri-mail-line"></i>
                gerencia@actilogistics.com
              </a>
            </div>
          </div>

          {/* Col 3: Pillars */}
          <div className="flex flex-col gap-3 md:items-end">
            <h4 className="font-heading font-700 text-background-50 text-sm tracking-widest uppercase mb-2">Pilares de Servicio</h4>
            {[
              { icon: 'ri-radar-line', label: 'Tecnología' },
              { icon: 'ri-shield-check-line', label: 'Seguridad 24/7' },
              { icon: 'ri-leaf-line', label: 'Sostenibilidad' },
              { icon: 'ri-settings-5-line', label: 'Customización' },
            ].map((p) => (
              <div key={p.label} className="flex items-center gap-2 text-sm text-background-300 md:flex-row-reverse">
                <div className="w-7 h-7 flex items-center justify-center bg-accent-500/20 rounded-full">
                  <i className={`${p.icon} text-accent-400 text-xs`}></i>
                </div>
                {p.label}
              </div>
            ))}
            <div className="mt-4 pt-4 border-t border-primary-800 text-right">
              <a href="/aviso-legal" className="text-background-400 hover:text-accent-400 transition-colors text-xs block">Aviso Legal</a>
              <a href="/privacidad" className="text-background-400 hover:text-accent-400 transition-colors text-xs block mt-1">Privacidad</a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="bg-primary-950 border-t border-primary-800 py-4">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs text-background-500">
            Actilogistics &copy; 2026 — Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}