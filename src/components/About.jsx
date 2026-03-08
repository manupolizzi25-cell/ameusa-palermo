import { Shield, Award, Heart } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-brand-600 font-semibold text-sm uppercase tracking-widest mb-3">La tua casa a Palermo</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Vivi Palermo<br />come un vero siciliano
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              A' Meusa è un appartamento autentico nel cuore del centro storico di Palermo,
              a pochi passi dal mercato di Ballarò, dalla Cattedrale e dai vicoli più caratteristici
              della città. Un luogo dove sentirsi a casa, immersi nei profumi e nei colori della Sicilia.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              L'appartamento è stato ristrutturato mantenendo il fascino delle origini: pavimenti
              in maioliche siciliane, soffitti alti, balconi affacciati sul quartiere. Il nome
              <em> "A' Meusa"</em> — la milza in dialetto siciliano — è un omaggio alla cucina
              di strada palermitana, simbolo dell'identità di questa città unica.
            </p>

            {/* Features */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { icon: Shield, title: 'Privato', desc: 'Prenotazione diretta, senza intermediari' },
                { icon: Award, title: 'Autentico', desc: 'Arredato con cura, curato nei dettagli' },
                { icon: Heart, title: 'Accogliente', desc: 'Ti seguiamo dall\'arrivo alla partenza' },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="text-center">
                  <div className="w-12 h-12 bg-brand-50 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-6 h-6 text-brand-600" />
                  </div>
                  <p className="font-semibold text-gray-900 mb-1">{title}</p>
                  <p className="text-gray-500 text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image collage */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80"
                  alt="Cucina"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-3xl overflow-hidden aspect-square shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
                  alt="Dettaglio"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="rounded-3xl overflow-hidden aspect-square shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&q=80"
                  alt="Camera da letto"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80"
                  alt="Soggiorno"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
