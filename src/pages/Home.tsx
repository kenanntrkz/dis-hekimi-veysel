import { Link } from 'react-router-dom'
import { Phone, Award, Users, Heart, Shield, ArrowRight, Star, CheckCircle } from 'lucide-react'

const Home = () => {
  const services = [
    { title: 'Diş Beyazlatma', icon: '✨', desc: 'Profesyonel beyazlatma ile parlak gülüşler' },
    { title: 'İmplant Tedavisi', icon: '🦷', desc: 'Kalıcı ve doğal görünümlü implantlar' },
    { title: 'Zirkonyum Kaplama', icon: '💎', desc: 'Estetik ve dayanıklı zirkonyum kaplamalar' },
    { title: 'Kanal Tedavisi', icon: '🔬', desc: 'Ağrısız ve modern kanal tedavisi' },
    { title: 'Dolgu Tedavisi', icon: '🩺', desc: 'Estetik kompozit dolgular' },
    { title: 'Diş Çekimi', icon: '⚕️', desc: 'Güvenli ve ağrısız diş çekimi' },
  ]

  const stats = [
    { icon: Users, value: '5000+', label: 'Mutlu Hasta' },
    { icon: Award, value: '10+', label: 'Yıllık Deneyim' },
    { icon: Heart, value: '100%', label: 'Hasta Memnuniyeti' },
    { icon: Shield, value: '24/7', label: 'Acil Destek' },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cyan-50 via-white to-teal-50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/1.webp')] bg-cover bg-center opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-medium">
                <Star className="w-4 h-4 fill-current" />
                <span>Finike'nin Güvenilir Diş Kliniği</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Sağlıklı Gülüşler İçin
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-600"> Buradayız</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Modern teknoloji ve uzman kadromuzla ağız ve diş sağlığınız için en iyi hizmeti sunuyoruz.
                Akdeniz Üniversitesi Diş Hekimliği Fakültesi mezunu Dt. Veysel Arslan ve ekibi olarak
                sizi sağlıklı gülüşlere kavuşturmak için buradayız.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+905369153291"
                  className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-500 to-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Phone className="w-5 h-5" />
                  <span>Hemen Ara</span>
                </a>
                <Link
                  to="/hizmetler"
                  className="inline-flex items-center justify-center space-x-2 bg-white text-gray-700 px-8 py-4 rounded-full text-lg font-semibold border-2 border-gray-200 hover:border-cyan-500 hover:text-cyan-600 transition-all duration-300"
                >
                  <span>Hizmetlerimiz</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="/images/1.webp"
                  alt="Modern Diş Kliniği"
                  className="rounded-3xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-cyan-500 rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-teal-500 rounded-full opacity-20 blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Hizmetlerimiz</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Modern ekipmanlarımız ve uzman kadromuzla her türlü diş tedavisi için yanınızdayız
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer border border-gray-100 hover:border-cyan-200"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/hizmetler"
              className="inline-flex items-center space-x-2 text-cyan-600 font-semibold hover:text-cyan-700"
            >
              <span>Tüm Hizmetleri Gör</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/images/3.webp"
                alt="Tedavi Anı"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-cyan-500 to-teal-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-2">
                  <Star className="w-6 h-6 fill-current" />
                  <span className="text-2xl font-bold">5.0</span>
                </div>
                <p className="text-sm opacity-90">Hasta Değerlendirmesi</p>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Neden Bizi Tercih Etmelisiniz?
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Dt. Veysel Arslan olarak, hastalarımızın konforunu ve sağlığını ön planda tutuyoruz.
                Akdeniz Üniversitesi Diş Hekimliği Fakültesi'nden aldığımız eğitim ve yılların deneyimiyle,
                en son teknolojik ekipmanlarla hizmet veriyoruz.
              </p>
              <ul className="space-y-3">
                {[
                  'Modern ve steril klinik ortamı',
                  'Deneyimli ve güler yüzlü ekip',
                  'Ağrısız tedavi yöntemleri',
                  'Uygun fiyat garantisi',
                  'Randevuya uygun çalışma',
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/hakkimizda"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-teal-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                <span>Daha Fazla Bilgi</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Kliniğimizden Kareler</h2>
            <p className="text-gray-600">Modern ve hijyenik ortamımızda güvenle tedavi olun</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 6, 17].map((num) => (
              <div key={num} className="relative group overflow-hidden rounded-xl">
                <img
                  src={`/images/${num}.webp`}
                  alt={`Klinik ${num}`}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/galeri"
              className="inline-flex items-center space-x-2 text-cyan-600 font-semibold hover:text-cyan-700"
            >
              <span>Tüm Galeriyi Gör</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Sağlıklı Gülüşünüz İçin Hemen Arayın
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Ücretsiz muayene ve danışmanlık için bizimle iletişime geçin
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
              <span>İletişim Formu</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
