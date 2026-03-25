import { Phone, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Diş Beyazlatma',
      icon: '✨',
      desc: 'Profesyonel diş beyazlatma işlemiyle dişlerinizi birkaç ton daha beyaz hale getiriyoruz. Ofis tipi ve ev tipi beyazlatma seçeneklerimiz mevcuttur.',
      features: ['Hızlı sonuç', 'Güvenli işlem', 'Uzun süreli etki'],
    },
    {
      id: 2,
      title: 'İmplant Tedavisi',
      icon: '🦷',
      desc: 'Eksik dişlerinizi en kaliteli implant sistemleriyle tamamlıyoruz. Doğal dişiniz gibi görünen ve işlev gören kalıcı çözümler sunuyoruz.',
      features: ['Kalıcı çözüm', 'Doğal görünüm', 'Yüksek başarı oranı'],
    },
    {
      id: 3,
      title: 'Zirkonyum Kaplama',
      icon: '💎',
      desc: 'Zirkonyum kaplamalar, hem estetik hem de dayanıklılık açısından en iyi seçenektir. Metal desteksiz yapısıyla doğal diş görünümü sağlar.',
      features: ['Estetik görünüm', 'Yüksek dayanıklılık', 'Alerji riski yok'],
    },
    {
      id: 4,
      title: 'Kanal Tedavisi',
      icon: '🔬',
      desc: 'Modern anestezi yöntemleriyle ağrısız kanal tedavisi uyguluyoruz. Çürük veya enfekte olmuş dişlerinizi kurtarıyoruz.',
      features: ['Ağrısız işlem', 'Tek seansta tedavi', 'Dişi koruma'],
    },
    {
      id: 5,
      title: 'Dolgu Tedavisi',
      icon: '🩺',
      desc: 'Estetik kompozit dolgularla çürük dişlerinizi tedavi ediyoruz. Doğal diş rengine uyumlu dolgular kullanıyoruz.',
      features: ['Estetik görünüm', 'Uzun ömürlü', 'Hızlı işlem'],
    },
    {
      id: 6,
      title: 'Diş Çekimi',
      icon: '⚕️',
      desc: 'Lokal anestezi altında ağrısız diş çekimi gerçekleştiriyoruz. Gömülü diş çekimi ve 20 yaş dişi operasyonları da yapılmaktadır.',
      features: ['Ağrısız çekim', 'Hızlı iyileşme', 'Komplikasyonsuz'],
    },
    {
      id: 7,
      title: 'Diş Taşı Temizliği',
      icon: '🧹',
      desc: 'Profesyonel diş taşı temizliği ile diş etlerinizi koruyoruz. Düzenli temizlik diş eti hastalıklarını önler.',
      features: ['Diş eti sağlığı', 'Estetik görünüm', 'Ağız kokusu önleme'],
    },
    {
      id: 8,
      title: 'Çocuk Diş Hekimliği',
      icon: '👶',
      desc: 'Çocuklarımızın diş sağlığı için özel yaklaşımlarla hizmet veriyoruz. Koruyucu tedaviler ve eğitimler sunuyoruz.',
      features: ['Çocuk dostu ortam', 'Koruyucu tedaviler', 'Flor uygulaması'],
    },
    {
      id: 9,
      title: 'Ortodonti',
      icon: '😁',
      desc: 'Diş teli ve şeffaf plak tedavileriyle düzgün diş dizilimi sağlıyoruz. Estetik ve fonksiyonel çözümler sunuyoruz.',
      features: ['Şeffaf plak seçeneği', 'Modern tel sistemleri', 'Tüm yaşlara uygun'],
    },
  ]

  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Hizmetlerimiz</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Modern ekipmanlarımız ve uzman kadromuzla ağız ve diş sağlığı alanında
            kapsamlı hizmetler sunuyoruz.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 mb-4 text-sm leading-relaxed">{service.desc}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zirkonyum Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Zirkonyum Kaplama ile Mükemmel Gülüşler
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Zirkonyum kaplamalar, diş estetiğinde en son teknolojiyi temsil eder.
                Metal içermeyen yapısı sayesinde alerjik reaksiyon riski yoktur ve
                doğal diş görünümü sağlar.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Doğal diş görünümü',
                  'Yüksek dayanıklılık',
                  'Diş eti uyumu',
                  'Leke tutmaz yüzey',
                  '10+ yıl kullanım ömrü',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="tel:+905369153291"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-teal-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                <span>Bilgi Alın</span>
              </a>
            </div>
            <div className="relative">
              <img
                src="/images/17.webp"
                alt="Zirkonyum Kaplamalar"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-teal-500 rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-cyan-500 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Size Uygun Tedaviyi Birlikte Belirleyelim
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Ücretsiz muayene için hemen randevu alın
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+905369153291"
              className="inline-flex items-center justify-center space-x-2 bg-white text-cyan-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              <span>0536 915 32 91</span>
            </a>
            <Link
              to="/iletisim"
              className="inline-flex items-center justify-center space-x-2 bg-transparent text-white px-8 py-4 rounded-full text-lg font-semibold border-2 border-white hover:bg-white hover:text-cyan-600 transition-all duration-300"
            >
              <span>İletişim</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
