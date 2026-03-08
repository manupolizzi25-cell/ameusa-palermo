import {
  Wifi, Wind, Tv, Coffee, UtensilsCrossed, WashingMachine,
  Car, ShowerHead, Baby, Cigarette, PawPrint, Flame, Star
} from 'lucide-react'

const amenities = [
  { icon: Wifi, label: 'Wi-Fi veloce', available: true },
  { icon: Wind, label: 'Aria condizionata', available: true },
  { icon: Tv, label: 'Smart TV 55"', available: true },
  { icon: Coffee, label: 'Macchina caffè espresso', available: true },
  { icon: UtensilsCrossed, label: 'Cucina completa', available: true },
  { icon: WashingMachine, label: 'Lavatrice', available: true },
  { icon: ShowerHead, label: 'Doccia a pioggia', available: true },
  { icon: Car, label: 'Parcheggio convenzionato', available: true },
  { icon: Baby, label: 'Adatto ai bambini', available: true },
  { icon: Flame, label: 'Barbecue', available: false },
  { icon: PawPrint, label: 'Animali non ammessi', available: false },
  { icon: Cigarette, label: 'No fumatori', available: false },
]

const reviews = [
  {
    name: 'Giulia M.',
    from: 'Milano',
    rating: 5,
    date: 'Ottobre 2025',
    text: 'Appartamento meraviglioso! Posizione perfetta, a due passi dal mercato di Ballarò. I proprietari sono gentilissimi e sempre disponibili. Torneremo sicuramente!',
    avatar: 'GM',
  },
  {
    name: 'Thomas B.',
    from: 'Parigi',
    rating: 5,
    date: 'Agosto 2025',
    text: 'Un séjour parfait! L\'appartement est magnifique avec ses carreaux siciliens traditionnels. Le quartier est authentique et animé. Nous recommandons vivement.',
    avatar: 'TB',
  },
  {
    name: 'Marco e Laura',
    from: 'Roma',
    rating: 5,
    date: 'Luglio 2025',
    text: 'Casa favolosa nel centro storico. Pulitissima, ben arredata e con tutto il necessario. Il balcone con vista sui vicoli è magico al tramonto. Ospiti eccezionali!',
    avatar: 'ML',
  },
]

export default function Amenities() {
  return (
    <section id="amenities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Amenities */}
        <div className="mb-20">
          <p className="text-brand-600 font-semibold text-sm uppercase tracking-widest mb-3">Cosa offriamo</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-10">Tutto il necessario per il tuo soggiorno</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {amenities.map(({ icon: Icon, label, available }) => (
              <div
                key={label}
                className={`flex items-center gap-3 p-4 rounded-2xl border ${
                  available
                    ? 'border-gray-100 bg-gray-50 hover:border-brand-200 hover:bg-brand-50 transition-colors'
                    : 'border-gray-100 bg-white opacity-50'
                }`}
              >
                <Icon className={`w-5 h-5 flex-shrink-0 ${available ? 'text-brand-600' : 'text-gray-400'}`} />
                <span className={`text-sm font-medium ${available ? 'text-gray-800' : 'text-gray-400 line-through'}`}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <div>
              <p className="text-brand-600 font-semibold text-sm uppercase tracking-widest mb-1">Recensioni</p>
              <div className="flex items-center gap-2">
                <Star className="w-6 h-6 text-brand-500 fill-brand-500" />
                <span className="text-3xl font-bold text-gray-900">4.95</span>
                <span className="text-gray-500 text-lg">· 48 recensioni</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="bg-gray-50 rounded-3xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-11 h-11 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-brand-700 font-bold text-sm">{r.avatar}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{r.name}</p>
                    <p className="text-gray-500 text-sm">{r.from} · {r.date}</p>
                  </div>
                </div>
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-brand-500 fill-brand-500" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed italic">"{r.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
