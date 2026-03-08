import { MapPin, Star, Users, Bed } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      {/* Background image - placeholder con gradient Sicilia */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80"
          alt="Palermo vista panoramica"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/20 to-black/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-40">
        <div className="max-w-3xl animate-slide-up">
          {/* Location badge */}
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
            <MapPin className="w-4 h-4 text-brand-300" />
            Palermo, Sicilia — Centro storico
          </div>

          {/* Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
            A' Meusa
          </h1>
          <p className="text-xl sm:text-2xl text-white/85 mb-8 font-light leading-relaxed">
            Un angolo autentico nel cuore pulsante di Palermo,<br className="hidden sm:block" />
            dove la storia incontra il Mediterraneo.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-4 mb-10">
            {[
              { icon: Star, label: '4.95 · 48 recensioni' },
              { icon: Users, label: 'Fino a 6 ospiti' },
              { icon: Bed, label: '3 camere da letto' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm border border-white/20">
                <Icon className="w-4 h-4" />
                {label}
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#calendar"
              className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-200 shadow-lg hover:shadow-xl text-lg"
            >
              Verifica disponibilità
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center justify-center gap-2 bg-white/15 backdrop-blur-sm hover:bg-white/25 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-200 border border-white/30 text-lg"
            >
              Scopri la casa
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/60 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  )
}
