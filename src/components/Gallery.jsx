import { useState } from 'react'
import { X, ChevronLeft, ChevronRight, Images } from 'lucide-react'

const photos = [
  {
    src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
    alt: 'Vista esterna dell\'appartamento',
    caption: 'Facciata storica del centro',
  },
  {
    src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80',
    alt: 'Soggiorno luminoso',
    caption: 'Soggiorno con pavimento in maioliche siciliane',
  },
  {
    src: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1200&q=80',
    alt: 'Camera matrimoniale',
    caption: 'Camera principale con letto king size',
  },
  {
    src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80',
    alt: 'Cucina attrezzata',
    caption: 'Cucina completamente attrezzata',
  },
  {
    src: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&q=80',
    alt: 'Bagno moderno',
    caption: 'Bagno con doccia a pioggia',
  },
  {
    src: 'https://images.unsplash.com/photo-1573052905904-34ad8c27f0cc?w=1200&q=80',
    alt: 'Balcone con vista',
    caption: 'Balcone affacciato sui vicoli di Palermo',
  },
  {
    src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&q=80',
    alt: 'Camera secondaria',
    caption: 'Camera con letti singoli',
  },
  {
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
    alt: 'Palermo centro storico',
    caption: 'A 5 minuti a piedi — Mercato di Ballarò',
  },
]

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null) // index or null

  const prev = () => setLightbox((lightbox - 1 + photos.length) % photos.length)
  const next = () => setLightbox((lightbox + 1) % photos.length)

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') prev()
    if (e.key === 'ArrowRight') next()
    if (e.key === 'Escape') setLightbox(null)
  }

  return (
    <section id="gallery" className="py-20 bg-gold-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-brand-600 font-semibold text-sm uppercase tracking-widest mb-3">Fotografie</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Esplora ogni angolo</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Ogni spazio è stato curato per offrire comfort, stile e autenticità siciliana.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {photos.map((photo, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className={`overflow-hidden rounded-2xl group relative focus:outline-none focus:ring-2 focus:ring-brand-500 ${
                i === 0 ? 'col-span-2 row-span-2 md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                  i === 0 ? 'h-64 md:h-full' : 'h-44'
                }`}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-end">
                <p className="text-white text-sm font-medium px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {photo.caption}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Show all button */}
        <div className="text-center mt-8">
          <button
            onClick={() => setLightbox(0)}
            className="inline-flex items-center gap-2 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200"
          >
            <Images className="w-5 h-5" />
            Vedi tutte le {photos.length} foto
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          aria-modal="true"
        >
          {/* Close */}
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-7 h-7" />
          </button>

          {/* Counter */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            {lightbox + 1} / {photos.length}
          </div>

          {/* Prev */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full hover:bg-white/10 transition-colors"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Image */}
          <div className="max-w-5xl max-h-[85vh] px-16 flex flex-col items-center gap-4">
            <img
              src={photos[lightbox].src}
              alt={photos[lightbox].alt}
              className="max-h-[75vh] max-w-full object-contain rounded-xl shadow-2xl"
            />
            <p className="text-white/70 text-sm">{photos[lightbox].caption}</p>
          </div>

          {/* Next */}
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full hover:bg-white/10 transition-colors"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}
    </section>
  )
}
