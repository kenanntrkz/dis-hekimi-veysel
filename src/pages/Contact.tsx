import { useState } from 'react'
import { Phone, MapPin, Clock, Mail, MessageCircle, Calendar, CheckCircle } from 'lucide-react'
import { api } from '../lib/api'

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

const timeSlots = [
  '09:00','09:30','10:00','10:30','11:00','11:30',
  '12:00','12:30','13:00','13:30','14:00','14:30',
  '15:00','15:30','16:00','16:30','17:00','17:30',
  '18:00','18:30',
]

const treatmentOptions = [
  'Muayene',
  'Diş Beyazlatma',
  'İmplant Tedavisi',
  'Zirkonyum Kaplama',
  'Kanal Tedavisi',
  'Dolgu Tedavisi',
  'Diş Çekimi',
  'Diğer',
]

const todayStr = new Date().toISOString().split('T')[0]

const Contact = () => {
  // Randevu formu state
  const [appt, setAppt] = useState({
    name: '', phone: '', email: '', date: '', time: '', subject: '', notes: '',
  })
  const [apptLoading, setApptLoading] = useState(false)
  const [apptSent, setApptSent] = useState(false)
  const [apptError, setApptError] = useState('')

  // Mesaj formu state
  const [msg, setMsg] = useState({
    name: '', phone: '', email: '', subject: '', body: '',
  })
  const [msgLoading, setMsgLoading] = useState(false)
  const [msgSent, setMsgSent] = useState(false)
  const [msgError, setMsgError] = useState('')

  async function handleApptSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!appt.name || !appt.phone || !appt.date || !appt.time) {
      setApptError('Lütfen zorunlu alanları doldurun.')
      return
    }
    setApptLoading(true)
    setApptError('')
    try {
      await api.post('/api/appointments', {
        name: appt.name,
        phone: appt.phone,
        email: appt.email || undefined,
        date: `${appt.date}T${appt.time}:00`,
        subject: appt.subject || undefined,
        notes: appt.notes || undefined,
      })
      setApptSent(true)
      setAppt({ name: '', phone: '', email: '', date: '', time: '', subject: '', notes: '' })
    } catch (err) {
      setApptError(err instanceof Error ? err.message : 'Bir hata oluştu, lütfen tekrar deneyin.')
    } finally {
      setApptLoading(false)
    }
  }

  async function handleMsgSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!msg.name || !msg.body) {
      setMsgError('Ad ve mesaj alanları zorunludur.')
      return
    }
    setMsgLoading(true)
    setMsgError('')
    try {
      await api.post('/api/messages', {
        name: msg.name,
        phone: msg.phone || undefined,
        email: msg.email || undefined,
        subject: msg.subject || undefined,
        body: msg.body,
      })
      setMsgSent(true)
      setMsg({ name: '', phone: '', email: '', subject: '', body: '' })
    } catch (err) {
      setMsgError(err instanceof Error ? err.message : 'Bir hata oluştu, lütfen tekrar deneyin.')
    } finally {
      setMsgLoading(false)
    }
  }

  const inputCls = 'w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition-all outline-none bg-white text-sm'

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

      {/* Randevu Formu */}
      <section className="py-16 bg-gradient-to-br from-cyan-50 to-teal-50" id="randevu">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-2xl mb-4">
              <Calendar className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Online Randevu</h2>
            <p className="text-gray-600 mt-2">Formu doldurun, kliniğimiz sizi en kısa sürede onaylasın</p>
          </div>

          {apptSent ? (
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-green-100">
              <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Randevu Talebiniz Alındı!</h3>
              <p className="text-gray-600">Kliniğimiz randevunuzu en kısa sürede onaylayacak ve size bilgi verecektir.</p>
              <button
                onClick={() => setApptSent(false)}
                className="mt-6 text-sm text-cyan-600 hover:underline"
              >
                Yeni randevu al
              </button>
            </div>
          ) : (
            <form onSubmit={handleApptSubmit} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 space-y-4">
              {apptError && (
                <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm">
                  {apptError}
                </div>
              )}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Ad Soyad *</label>
                  <input
                    type="text"
                    value={appt.name}
                    onChange={(e) => setAppt({ ...appt, name: e.target.value })}
                    className={inputCls}
                    placeholder="Adınız Soyadınız"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Telefon *</label>
                  <input
                    type="tel"
                    value={appt.phone}
                    onChange={(e) => setAppt({ ...appt, phone: e.target.value })}
                    className={inputCls}
                    placeholder="05XX XXX XX XX"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">E-posta</label>
                <input
                  type="email"
                  value={appt.email}
                  onChange={(e) => setAppt({ ...appt, email: e.target.value })}
                  className={inputCls}
                  placeholder="ornek@email.com (isteğe bağlı)"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tarih *</label>
                  <input
                    type="date"
                    value={appt.date}
                    min={todayStr}
                    onChange={(e) => setAppt({ ...appt, date: e.target.value })}
                    className={inputCls}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Saat *</label>
                  <select
                    value={appt.time}
                    onChange={(e) => setAppt({ ...appt, time: e.target.value })}
                    className={inputCls}
                    required
                  >
                    <option value="">Saat seçin</option>
                    {timeSlots.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tedavi Konusu</label>
                <select
                  value={appt.subject}
                  onChange={(e) => setAppt({ ...appt, subject: e.target.value })}
                  className={inputCls}
                >
                  <option value="">Seçiniz (isteğe bağlı)</option>
                  {treatmentOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Notlar</label>
                <textarea
                  rows={3}
                  value={appt.notes}
                  onChange={(e) => setAppt({ ...appt, notes: e.target.value })}
                  className={`${inputCls} resize-none`}
                  placeholder="Eklemek istediğiniz bilgiler..."
                />
              </div>
              <button
                type="submit"
                disabled={apptLoading}
                className="w-full bg-gradient-to-r from-cyan-500 to-teal-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60"
              >
                <Calendar className="w-5 h-5" />
                {apptLoading ? 'Gönderiliyor...' : 'Randevu Talebi Gönder'}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Map & Mesaj Formu */}
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

            {/* Mesaj Formu */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Mesaj Gönderin</h2>

              {msgSent ? (
                <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-green-100">
                  <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Mesajınız İletildi!</h3>
                  <p className="text-gray-600 text-sm">En kısa sürede size geri dönüş yapacağız.</p>
                  <button
                    onClick={() => setMsgSent(false)}
                    className="mt-4 text-sm text-cyan-600 hover:underline"
                  >
                    Yeni mesaj gönder
                  </button>
                </div>
              ) : (
                <form onSubmit={handleMsgSubmit} className="space-y-4">
                  {msgError && (
                    <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm">
                      {msgError}
                    </div>
                  )}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Adınız *</label>
                      <input
                        type="text"
                        value={msg.name}
                        onChange={(e) => setMsg({ ...msg, name: e.target.value })}
                        className={inputCls}
                        placeholder="Adınız Soyadınız"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
                      <input
                        type="tel"
                        value={msg.phone}
                        onChange={(e) => setMsg({ ...msg, phone: e.target.value })}
                        className={inputCls}
                        placeholder="05XX XXX XX XX"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">E-posta</label>
                    <input
                      type="email"
                      value={msg.email}
                      onChange={(e) => setMsg({ ...msg, email: e.target.value })}
                      className={inputCls}
                      placeholder="ornek@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Konu</label>
                    <select
                      value={msg.subject}
                      onChange={(e) => setMsg({ ...msg, subject: e.target.value })}
                      className={inputCls}
                    >
                      <option value="">Seçiniz</option>
                      <option value="Fiyat Bilgisi">Fiyat Bilgisi</option>
                      <option value="Genel Bilgi">Genel Bilgi</option>
                      <option value="Öneri/Şikayet">Öneri/Şikayet</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Mesajınız *</label>
                    <textarea
                      rows={4}
                      value={msg.body}
                      onChange={(e) => setMsg({ ...msg, body: e.target.value })}
                      className={`${inputCls} resize-none`}
                      placeholder="Mesajınızı yazın..."
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={msgLoading}
                    className="w-full bg-gradient-to-r from-cyan-500 to-teal-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-60"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>{msgLoading ? 'Gönderiliyor...' : 'Mesaj Gönder'}</span>
                  </button>
                </form>
              )}
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
          <p className="text-cyan-100 mb-6">WhatsApp üzerinden de ulaşabilirsiniz</p>
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
