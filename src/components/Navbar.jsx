import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-brand-700 ${
        scrolled ? 'shadow-lg' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img
              src="/logo.PNG"
              alt="A Meusa — Casa Vacanze"
              className="h-20 md:h-24 w-auto rounded"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/80 hover:text-gold-300 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="#calendar"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-gold-500 text-brand-900 hover:bg-gold-400 transition-all duration-200 shadow-md"
          >
            Prenota ora
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg text-white"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-brand-800 border-t border-brand-600">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {links.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-white/80 font-medium hover:bg-brand-700 hover:text-gold-300 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#calendar"
              onClick={() => setMenuOpen(false)}
              className="mt-2 text-center px-5 py-2.5 rounded-xl text-sm font-semibold bg-gold-500 text-brand-900 hover:bg-gold-400 transition-all"
            >
              Prenota ora
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
