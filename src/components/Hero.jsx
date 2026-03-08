import { MapPin, Star, Users, Bed, ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">

      {/* Foto di sfondo */}
      <div className="absolute inset-0">
        <img
          src="/camera-principale.webp"
          alt="A Meusa — Casa Vacanze Palermo"
          className="w-full h-full object-cover object-center"
        />
        {/* Overlay bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/80" />
      </div>

      {/* Transizione seamless dalla navbar teal */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-brand-600 via-brand-600/40 to-transparent pointer-events-none" />

      {/* Content — centrato */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 pt-20 text-center w-full">

        {/* Location badge */}
        <div className="inline-flex items-center gap-2 text-gold-300 text-xs font-semibold uppercase tracking-widest mb-6">
          <div className="h-px w-8 bg-gold-400/60" />
          <MapPin className="w-3.5 h-3.5" />
          Palermo, Sicilia · Centro Storico
          <div className="h-px w-8 bg-gold-400/60" />
        </div>

        {/* Titolo */}
        <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl text-white mb-5 leading-none tracking-tight">
          A' Meusa
        </h1>

        {/* Linea oro */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-16 bg-gold-400/50" />
          <div className="w-1.5 h-1.5 rounded-full bg-gold-400" />
          <div className="h-px w-16 bg-gold-400/50" />
        </div>

        {/* Sottotitolo */}
        <p className="text-lg sm:text-xl text-white/80 mb-10 font-light leading-relaxed max-w-xl mx-auto">
          Un angolo autentico nel cuore pulsante di Palermo,<br className="hidden sm:block" />
          dove la storia incontra il Mediterraneo.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {[
            { icon: Star,  label: '4.95', sub: '48 recensioni' },
            { icon: Users, label: '4 ospiti', sub: 'max' },
            { icon: Bed,   label: '2 camere', sub: 'da letto' },
          ].map(({ icon: Icon, label, sub }) => (
            <div key={label} className="flex items-center gap-2.5 bg-black/30 backdrop-blur-sm text-white px-4 py-2.5 rounded-xl border border-white/15">
              <Icon className="w-4 h-4 text-gold-400 flex-shrink-0" />
              <div className="text-left">
                <p className="text-sm font-semibold leading-none">{label}</p>
                <p className="text-xs text-white/50 mt-0.5">{sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#calendar"
            className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-brand-900 font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-gold-500/30 hover:shadow-xl text-base"
          >
            Verifica disponibilità
          </a>
          <a
            href="#gallery"
            className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 border border-white/25 text-base"
          >
            Scopri la casa
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/40">
        <span className="text-xs uppercase tracking-widest">Scorri</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </div>
    </section>
  )
}
