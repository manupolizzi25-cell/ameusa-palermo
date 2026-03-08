import { MapPin, Clock, Train, Plane, Utensils, Church, ShoppingBag, Music } from 'lucide-react'

const nearbyPlaces = [
  {
    icon: ShoppingBag,
    category: 'Mercato',
    name: 'Mercato di Ballarò',
    distance: '3 min a piedi',
    desc: 'Il mercato storico più famoso di Palermo, colori, profumi e street food autentico.',
  },
  {
    icon: Church,
    category: 'Cultura',
    name: 'Cattedrale di Palermo',
    distance: '8 min a piedi',
    desc: 'Capolavoro arabo-normanno, patrimonio UNESCO. Imperdibile.',
  },
  {
    icon: Utensils,
    category: 'Street food',
    name: 'Friggitorie e panellari',
    distance: '2 min a piedi',
    desc: 'Panelle, crocchè, arancine e ovviamente... \'a meusa! La vera cucina di strada.',
  },
  {
    icon: Church,
    category: 'Cultura',
    name: 'Palazzo dei Normanni',
    distance: '12 min a piedi',
    desc: 'Sede del Parlamento siciliano, con la splendida Cappella Palatina.',
  },
  {
    icon: Music,
    category: 'Vita notturna',
    name: 'Piazza Kalsa',
    distance: '10 min a piedi',
    desc: 'Il quartiere più cool di Palermo, tra bar, locali e giovani artisti.',
  },
  {
    icon: ShoppingBag,
    category: 'Shopping',
    name: 'Via Maqueda',
    distance: '5 min a piedi',
    desc: 'Lo shopping principale della città, dal centro verso i Quattro Canti.',
  },
]

const howToArrive = [
  {
    icon: Plane,
    method: 'Dall\'aeroporto',
    detail: 'Aeroporto Falcone-Borsellino (PMO)',
    time: '30 min in taxi o bus Trinacria Express (€6)',
  },
  {
    icon: Train,
    method: 'In treno',
    detail: 'Stazione Centrale Palermo',
    time: '15 min a piedi o 5 min in taxi',
  },
  {
    icon: Clock,
    method: 'Check-in / Check-out',
    detail: 'Check-in: dalle 15:00 · Check-out: entro le 11:00',
    time: 'Orari flessibili su richiesta',
  },
]

export default function Location() {
  return (
    <section id="location" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-brand-600 font-semibold text-sm uppercase tracking-widest mb-3">Dove siamo</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nel cuore di Palermo</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            A' Meusa si trova nel quartiere storico di Ballarò, a due passi dai monumenti,
            dai mercati e dai sapori autentici della Sicilia.
          </p>
        </div>

        {/* Map embed + address */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* OpenStreetMap embed */}
          <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100 h-80 lg:h-auto min-h-[320px]">
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=13.3540%2C38.1075%2C13.3690%2C38.1175&layer=mapnik&marker=38.1125%2C13.3615"
              title="Mappa A' Meusa Palermo"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>

          {/* How to arrive */}
          <div className="flex flex-col justify-center">
            <div className="flex items-start gap-3 mb-8">
              <div className="w-10 h-10 bg-brand-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                <MapPin className="w-5 h-5 text-brand-600" />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-lg">Via del Ballarò, Palermo</p>
                <p className="text-gray-500">Quartiere storico — Centro, Palermo 90134</p>
                <a
                  href="https://www.google.com/maps/search/Ballar%C3%B2+Palermo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-600 hover:text-brand-700 text-sm font-medium mt-1 inline-block hover:underline"
                >
                  Apri in Google Maps →
                </a>
              </div>
            </div>

            <div className="space-y-5">
              {howToArrive.map(({ icon: Icon, method, detail, time }) => (
                <div key={method} className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Icon className="w-5 h-5 text-brand-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{method}</p>
                    <p className="text-gray-600 text-sm">{detail}</p>
                    <p className="text-brand-600 text-xs font-medium mt-0.5">{time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Nearby places */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Cosa c'è nei dintorni</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {nearbyPlaces.map(({ icon: Icon, category, name, distance, desc }) => (
              <div key={name} className="flex gap-4 p-5 bg-gray-50 rounded-2xl hover:shadow-md transition-shadow">
                <div className="w-11 h-11 bg-brand-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-brand-600" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-brand-600 uppercase tracking-wide mb-0.5">{category}</p>
                  <p className="font-bold text-gray-900 text-sm">{name}</p>
                  <p className="text-xs text-gray-500 mb-1.5">{distance}</p>
                  <p className="text-gray-600 text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
