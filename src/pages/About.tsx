import { GraduationCap, Award, Heart, Target, CheckCircle, Phone } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Hasta Odaklı',
      desc: 'Her hastamızı ailemizin bir ferdi gibi görüyor, bireysel ihtiyaçlarına göre tedavi planlıyoruz.',
    },
    {
      icon: Award,
      title: 'Kalite',
      desc: 'En son teknoloji ekipmanlar ve kaliteli malzemelerle üst düzey hizmet sunuyoruz.',
    },
    {
      icon: Target,
      title: 'Güvenilirlik',
      desc: 'Şeffaf fiyatlandırma ve dürüst yaklaşımımızla güveninizi kazanıyoruz.',
    },
  ]

  const education = [
    'Akdeniz Üniversitesi Diş Hekimliği Fakültesi Mezunu',
    'Genel Diş Hekimliği Uzmanlığı',
    'Estetik Diş Hekimliği Sertifikası',
    'İmplantoloji Eğitimi',
    'Endodonti (Kanal Tedavisi) Eğitimi',
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-cyan-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Hakkımızda
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Dt. Veysel Arslan olarak, Finike'de modern diş hekimliği hizmetleri sunmaktayız.
                Akdeniz Üniversitesi Diş Hekimliği Fakültesi'nden mezun olduktan sonra,
                yılların tecrübesi ve sürekli gelişen tıbbi bilgiyle hastalarımıza en iyi
                hizmeti vermeyi hedefliyoruz.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Kliniğimizde hasta konforu ve hijyen en üst seviyede tutulmaktadır.
                Modern teknolojik altyapımız ve uzman kadromuzla her yaştan hastamıza
                güvenli ve kaliteli tedavi sunuyoruz.
              </p>
              <a
                href="tel:+905369153291"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-teal-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                <span>Randevu Al</span>
              </a>
            </div>
            <div className="relative">
              <img
                src="/images/18.webp"
                alt="Dt. Veysel Arslan Tabelası"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-cyan-500 rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Experience */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-3xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Eğitim & Sertifikalar</h2>
              </div>
              <ul className="space-y-4">
                {education.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Clinic Image */}
            <div className="relative">
              <img
                src="/images/1.webp"
                alt="Klinik İç Mekan"
                className="rounded-3xl shadow-xl h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Değerlerimiz</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hastalarımıza sunduğumuz hizmetin temelini oluşturan değerlerimiz
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-500">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Kliniğimiz</h2>
            <p className="text-gray-600">Modern ve hijyenik ortamımız</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <img
              src="/images/1.webp"
              alt="Muayene Odası"
              className="rounded-2xl shadow-lg w-full h-72 object-cover"
            />
            <img
              src="/images/2.webp"
              alt="Bekleme Salonu"
              className="rounded-2xl shadow-lg w-full h-72 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Team Images */}
      <section className="py-20 bg-gradient-to-r from-cyan-500 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Sizin İçin Buradayız
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Sağlıklı gülüşler için randevunuzu alın, sizi kliniğimizde ağırlamaktan mutluluk duyarız.
          </p>
          <a
            href="tel:+905369153291"
            className="inline-flex items-center justify-center space-x-2 bg-white text-cyan-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300"
          >
            <Phone className="w-5 h-5" />
            <span>0536 915 32 91</span>
          </a>
        </div>
      </section>
    </div>
  )
}

export default About
