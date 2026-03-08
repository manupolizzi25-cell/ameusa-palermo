import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'La Casa', href: '#about' },
    { label: 'Galleria', href: '#gallery' },
    { label: 'Servizi', href: '#amenities' },
    { label: 'Disponibilità', href: '#calendar' },
    { label: 'Dove siamo', href: '#location' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-brand-700 shadow-2xl'
          : 'bg-brand-600'
      }`}
    >
      {/* Gold accent line top */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo — sfondo stesso colore: nessun bordo visibile */}
          <a href="#" className="flex items-center -ml-1">
            <img
              src="/logo.PNG"
              alt="A Meusa — Casa Vacanze"
              className="h-20 md:h-[5.5rem] w-auto"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-widest text-white/70 hover:text-gold-300 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="#calendar"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold border border-gold-400/70 text-gold-300 hover:bg-gold-500 hover:text-brand-900 hover:border-gold-500 transition-all duration-200"
          >
            Prenota ora
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-white/80"
            aria-label="Menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Gold accent line bottom */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-brand-800 border-t border-gold-500/20">
          <nav className="flex flex-col px-5 py-5 gap-1">
            {links.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-3 py-3 text-xs font-semibold uppercase tracking-widest text-white/60 hover:text-gold-300 hover:bg-brand-700 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#calendar"
              onClick={() => setMenuOpen(false)}
              className="mt-3 text-center py-3 rounded-lg text-sm font-semibold border border-gold-400/70 text-gold-300 hover:bg-gold-500 hover:text-brand-900 transition-all"
            >
              Prenota ora
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
