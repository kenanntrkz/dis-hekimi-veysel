import { Star, Quote, Phone } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Ahmet Y.',
      treatment: 'Zirkonyum Kaplama',
      text: 'Veysel Bey ve ekibi gerçekten çok profesyonel. Zirkonyum kaplamalarım harika oldu, doğal dişlerimden farkı yok. Kesinlikle tavsiye ediyorum!',
      rating: 5,
      image: '/images/6.webp',
    },
    {
      name: 'Mehmet K.',
      treatment: 'İmplant Tedavisi',
      text: 'Yıllardır eksik dişlerimden muzdarip oluyordum. İmplant tedavisi sonrası hayatım değişti. Ağrısız bir işlem oldu, çok memnunum.',
      rating: 5,
      image: '/images/7.webp',
    },
    {
      name: 'Kenan Usta',
      treatment: 'Diş Tedavisi',
      text: 'Gaziantep\'ten geldim, Veysel Bey\'i tanıdığım için mutluyum. Profesyonel yaklaşımı ve güler yüzü ile tedavi sürecim çok rahat geçti.',
      rating: 5,
      image: '/images/14.webp',
    },
    {
      name: 'Ali B.',
      treatment: 'Kanal Tedavisi',
      text: 'Dişçi korkum vardı ama Veysel Bey\'in yaklaşımı sayesinde korkumu yendim. Kanal tedavim hiç ağrısız oldu, teşekkürler!',
      rating: 5,
      image: '/images/8.webp',
    },
    {
      name: 'Mustafa E.',
      treatment: 'Diş Beyazlatma',
      text: 'Profesyonel beyazlatma işlemi yaptırdım, sonuç muhteşem! Herkes dişlerimi soruyor, çok mutluyum.',
      rating: 5,
      image: '/images/9.webp',
    },
    {
      name: 'Hasan D.',
      treatment: 'Dolgu Tedavisi',
      text: 'Hızlı ve kaliteli hizmet. Dolgularım çok doğal görünüyor. Kesinlikle tavsiye ederim.',
      rating: 5,
      image: '/images/11.webp',
    },
    {
      name: 'Osman C.',
      treatment: 'Diş Çekimi',
      text: 'Gömülü diş çekimi yaptırdım, çok endişeliydim ama Veysel Bey ve ekibi sayesinde hiç sorun yaşamadım. Teşekkürler!',
      rating: 5,
      image: '/images/12.webp',
    },
    {
      name: 'Fatih S.',
      treatment: 'Genel Kontrol',
      text: 'Düzenli olarak kontrollere gidiyorum. Her zaman güler yüzlü ve profesyonel bir hizmet alıyorum.',
      rating: 5,
      image: '/images/13.webp',
    },
  ]

  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Hasta Yorumları</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Mutlu hastalarımızın deneyimleri
          </p>
          <div className="mt-8 flex items-center justify-center space-x-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-8 h-8 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-2xl font-bold text-gray-900">5.0</span>
            <span className="text-gray-500">/ 5</span>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-xl object-cover flex-shrink-0"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                        <p className="text-sm text-cyan-600">{testimonial.treatment}</p>
                      </div>
                      <Quote className="w-8 h-8 text-cyan-200" />
                    </div>
                    <div className="flex mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{testimonial.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-cyan-600">5000+</div>
              <div className="text-gray-500 mt-1">Mutlu Hasta</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-600">5.0</div>
              <div className="text-gray-500 mt-1">Ortalama Puan</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-600">100%</div>
              <div className="text-gray-500 mt-1">Memnuniyet</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-600">10+</div>
              <div className="text-gray-500 mt-1">Yıllık Tecrübe</div>
            </div>
          </div>
        </div>
      </section>

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
            className="inline-flex items-center justify-center space-x-2 bg-white text-cyan-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300"
          >
            <Phone className="w-5 h-5" />
            <span>0536 915 32 91</span>
          </a>
        </div>
      </section>
    </div>
  )
}

export default Testimonials
