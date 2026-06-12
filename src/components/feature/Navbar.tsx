import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface NavItem {
  label: string;
  href: string;
  isRoute?: boolean;
  children?: { label: string; href: string; isRoute?: boolean }[];
}

const navItems: NavItem[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Servicios', href: '/servicios', isRoute: true },
  {
    label: 'Compañía',
    href: '#',
    children: [
      { label: 'Misión y Visión', href: '/mision-vision', isRoute: true },
      { label: 'Sostenibilidad', href: '/sostenibilidad', isRoute: true },
      { label: 'Filosofía Corporativa', href: '/filosofia-corporativa', isRoute: true },
      { label: 'Cobertura', href: '/cobertura', isRoute: true },
    ],
  },
  { label: 'Contacto', href: '/contacto', isRoute: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-primary-950 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 flex items-center justify-center bg-accent-500 rounded-lg">
              <i className="ri-truck-line text-xl text-primary-950"></i>
            </div>
            <div className="text-background-50" translate="no">
              <div className="notranslate font-heading font-900 text-lg tracking-tight leading-none text-accent-400">ACTI<span className="text-background-50">LOGISTICS</span></div>
              <div className="text-xs font-body tracking-wider leading-none text-background-300">MÁS QUE TRANSPORTE, LOGÍSTICA SIN LÍMITES</div>
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {item.children ? (
                <button className="flex items-center gap-1 px-4 py-2 text-sm font-label font-600 text-background-100 hover:text-accent-400 transition-colors cursor-pointer whitespace-nowrap">
                  {item.label}
                  <i className="ri-arrow-down-s-line text-xs"></i>
                </button>
              ) : (
                <Link
                  to={item.href}
                  className="px-4 py-2 text-sm font-label font-600 text-background-100 hover:text-accent-400 transition-colors whitespace-nowrap"
                >
                  {item.label}
                </Link>
              )}
              {item.children && openDropdown === item.label && (
                <div className="absolute top-full left-0 bg-primary-950 min-w-[220px] py-2 border-t-2 border-accent-500">
                  {item.children.map((child) => (
                    child.isRoute ? (
                      <Link
                        key={child.label}
                        to={child.href}
                        className="block px-5 py-2 text-sm text-background-200 hover:text-accent-400 hover:bg-primary-900 transition-colors"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {child.label}
                      </Link>
                    ) : (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block px-5 py-2 text-sm text-background-200 hover:text-accent-400 hover:bg-primary-900 transition-colors"
                      >
                        {child.label}
                      </a>
                    )
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center text-background-50 cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Abrir menú"
        >
          <i className={`text-2xl ${mobileOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-primary-950 border-t border-primary-800">
          {navItems.map((item) => (
            <div key={item.label}>
              {item.children ? (
                <>
                  <button
                    className="w-full flex items-center justify-between px-6 py-3 text-sm font-label text-background-100 hover:text-accent-400 cursor-pointer"
                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                  >
                    {item.label}
                    {openDropdown === item.label ? <i className="ri-arrow-up-s-line"></i> : <i className="ri-arrow-down-s-line"></i>}
                  </button>
                  {openDropdown === item.label && (
                    <div className="bg-primary-900">
                      {item.children.map((child) =>
                        child.isRoute ? (
                          <Link
                            key={child.label}
                            to={child.href}
                            className="block px-10 py-2 text-sm text-background-300 hover:text-accent-400"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ) : (
                          <a
                            key={child.label}
                            href={child.href}
                            className="block px-10 py-2 text-sm text-background-300 hover:text-accent-400"
                          >
                            {child.label}
                          </a>
                        )
                      )}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={item.href}
                  className="block px-6 py-3 text-sm font-label text-background-100 hover:text-accent-400"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}