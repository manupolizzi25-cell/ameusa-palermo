import { Home, MessageCircle, Mail, Instagram, Phone, Heart } from 'lucide-react'

const WHATSAPP_NUMBER = '393471234567'
const EMAIL_ADDRESS = 'info@ameusa-palermo.it'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      {/* CTA strip */}
      <div className="bg-brand-600 py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Pronto per la tua fuga siciliana?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Verifica la disponibilità e prenota direttamente con noi — senza commissioni, senza intermediari.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#calendar"
              className="inline-flex items-center justify-center gap-2 bg-white text-brand-600 hover:bg-brand-50 font-bold px-8 py-4 rounded-2xl transition-colors text-lg shadow-lg"
            >
              Verifica disponibilità
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-brand-600 font-bold px-8 py-4 rounded-2xl transition-all duration-200 text-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Scrivici su WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-brand-600 rounded-xl flex items-center justify-center">
                <Home className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl">A' Meusa</span>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm mb-6">
              Casa vacanza nel centro storico di Palermo. Un soggiorno autentico, curato,
              nel cuore della Sicilia più vera.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-brand-600 rounded-xl flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-xl flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="font-semibold text-sm uppercase tracking-widest text-gray-400 mb-5">Esplora</p>
            <nav className="space-y-3">
              {[
                ['La casa', '#about'],
                ['Galleria foto', '#gallery'],
                ['Servizi inclusi', '#amenities'],
                ['Disponibilità', '#calendar'],
                ['Come arrivare', '#location'],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="block text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="font-semibold text-sm uppercase tracking-widest text-gray-400 mb-5">Contatti</p>
            <div className="space-y-4">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
              >
                <div className="w-9 h-9 bg-gray-800 group-hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">WhatsApp</p>
                  <p className="text-sm font-medium">+39 347 123 4567</p>
                </div>
              </a>
              <a
                href={`mailto:${EMAIL_ADDRESS}`}
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
              >
                <div className="w-9 h-9 bg-gray-800 group-hover:bg-brand-600 rounded-lg flex items-center justify-center transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Email</p>
                  <p className="text-sm font-medium">{EMAIL_ADDRESS}</p>
                </div>
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <div className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Home className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Indirizzo</p>
                  <p className="text-sm font-medium">Quartiere Ballarò, Palermo (PA)</p>
                  <p className="text-xs text-gray-600">L'indirizzo esatto verrà condiviso dopo la prenotazione</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {year} A' Meusa – Casa Vacanza Palermo. Tutti i diritti riservati.</p>
          <p className="flex items-center gap-1.5">
            Fatto con <Heart className="w-4 h-4 text-brand-500 fill-brand-500" /> in Sicilia
          </p>
        </div>
      </div>
    </footer>
  )
}
