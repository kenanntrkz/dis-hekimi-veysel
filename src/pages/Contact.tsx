import { Phone, MapPin, Clock, Mail, MessageCircle } from 'lucide-react'

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefon',
      value: '0536 915 32 91',
      link: 'tel:+905369153291',
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      icon: MapPin,
      title: 'Adres',
      value: 'Yeni Mah. 505 Cad. No:20/2, Finike/Antalya',
      link: 'https://maps.google.com/?q=Yeni+Mah+505+Cad+No+20+Finike+Antalya',
      color: 'from-teal-500 to-teal-600',
    },
    {
      icon: Clock,
      title: 'Çalışma Saatleri',
      value: 'Pazartesi - Cumartesi: 09:00 - 19:00',
      link: null,
      color: 'from-emerald-500 to-emerald-600',
    },
    {
      icon: Mail,
      title: 'E-posta',
      value: 'info@dtveyselarslan.com',
      link: 'mailto:info@dtveyselarslan.com',
      color: 'from-blue-500 to-blue-600',
    },
  ]

  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">İletişim</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Sorularınız için bize ulaşın, randevunuzu kolayca alın
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${info.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <info.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                {info.link ? (
                  <a
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-gray-600 hover:text-cyan-600 transition-colors"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-gray-600">{info.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map & Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Map */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Konum</h2>
              <div className="bg-gray-200 rounded-2xl overflow-hidden h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3212.5!2d30.148!3d36.297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDE3JzQ5LjIiTiAzMMKwMDgnNTMuMyJF!5e0!3m2!1str!2str!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Klinik Konumu"
                ></iframe>
              </div>
              <div className="flex items-start space-x-3 text-gray-600">
                <MapPin className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-1" />
                <p>Yeni Mah. 505 Cad. No:20/2, Finike/Antalya</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Mesaj Gönderin</h2>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Adınız</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition-all outline-none"
                      placeholder="Adınız Soyadınız"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition-all outline-none"
                      placeholder="05XX XXX XX XX"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">E-posta</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition-all outline-none"
                    placeholder="ornek@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Konu</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition-all outline-none bg-white">
                    <option value="">Seçiniz</option>
                    <option value="randevu">Randevu Talebi</option>
                    <option value="fiyat">Fiyat Bilgisi</option>
                    <option value="bilgi">Genel Bilgi</option>
                    <option value="sikayet">Öneri/Şikayet</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mesajınız</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition-all outline-none resize-none"
                    placeholder="Mesajınızı yazın..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-teal-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Mesaj Gönder</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Clinic Image */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Kliniğimiz</h2>
          </div>
          <img
            src="/images/5.webp"
            alt="Klinik Dış Görünüm"
            className="w-full max-w-4xl mx-auto rounded-2xl shadow-xl"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-cyan-500 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Hızlı Randevu İçin Arayın
          </h2>
          <p className="text-cyan-100 mb-6">
            WhatsApp üzerinden de ulaşabilirsiniz
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+905369153291"
              className="inline-flex items-center justify-center space-x-2 bg-white text-cyan-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              <span>0536 915 32 91</span>
            </a>
            <a
              href="https://wa.me/905369153291"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
