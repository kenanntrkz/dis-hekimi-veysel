import { useState } from 'react'
import { X } from 'lucide-react'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const galleryImages = [
    { src: '/images/1.webp', title: 'Modern Muayene Odası', category: 'Klinik' },
    { src: '/images/2.webp', title: 'Bekleme Salonu', category: 'Klinik' },
    { src: '/images/3.webp', title: 'Tedavi Anı', category: 'Tedavi' },
    { src: '/images/4.webp', title: 'Profesyonel Ekip', category: 'Tedavi' },
    { src: '/images/5.webp', title: 'Klinik Dış Görünüm', category: 'Klinik' },
    { src: '/images/6.webp', title: 'Mutlu Hasta', category: 'Hasta' },
    { src: '/images/7.webp', title: 'Tedavi Sonrası', category: 'Hasta' },
    { src: '/images/8.webp', title: 'Başarılı Tedavi', category: 'Hasta' },
    { src: '/images/9.webp', title: 'Memnun Hasta', category: 'Hasta' },
    { src: '/images/10.webp', title: 'Tedavi Sonrası', category: 'Hasta' },
    { src: '/images/11.webp', title: 'Mutlu Hasta', category: 'Hasta' },
    { src: '/images/12.webp', title: 'Tedavi Sonrası', category: 'Hasta' },
    { src: '/images/13.webp', title: 'Başarılı İşlem', category: 'Hasta' },
    { src: '/images/14.webp', title: 'Memnun Hasta', category: 'Hasta' },
    { src: '/images/16.webp', title: 'Tedavi Sonrası', category: 'Hasta' },
    { src: '/images/17.webp', title: 'Zirkonyum Kaplamalar', category: 'Çalışma' },
    { src: '/images/18.webp', title: 'Klinik Tabelası', category: 'Klinik' },
  ]

  const [activeCategory, setActiveCategory] = useState('Tümü')
  const categories = ['Tümü', 'Klinik', 'Tedavi', 'Hasta', 'Çalışma']

  const filteredImages = activeCategory === 'Tümü'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory)

  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Galeri</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kliniğimizden kareler ve mutlu hastalarımız
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-cyan-500 to-teal-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(image.src)}
                className="relative group cursor-pointer overflow-hidden rounded-xl aspect-square"
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-medium">{image.title}</p>
                    <p className="text-cyan-300 text-sm">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-cyan-400 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Galeri Görseli"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-cyan-500 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Siz de Mutlu Hastalarımız Arasına Katılın
          </h2>
          <p className="text-cyan-100 mb-6">
            Sağlıklı gülüşler için hemen randevu alın
          </p>
          <a
            href="tel:+905369153291"
            className="inline-flex items-center justify-center bg-white text-cyan-600 px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300"
          >
            0536 915 32 91
          </a>
        </div>
      </section>
    </div>
  )
}

export default Gallery
