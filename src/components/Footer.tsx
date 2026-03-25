import { Link } from 'react-router-dom'
import { Phone, MapPin, Clock, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-full flex items-center justify-center">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C9.5 2 7.5 4 7.5 6.5C7.5 8 8 9.5 9 10.5L7 22L12 18L17 22L15 10.5C16 9.5 16.5 8 16.5 6.5C16.5 4 14.5 2 12 2Z"/>
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold">Dt. Veysel Arslan</span>
                <p className="text-xs text-cyan-400">Diş Hekimi</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Akdeniz Üniversitesi Diş Hekimliği Fakültesi mezunu. Modern teknoloji ve uzman kadromuzla sağlıklı gülüşler için buradayız.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Hızlı Erişim</h3>
            <ul className="space-y-2">
              {[
                { name: 'Ana Sayfa', path: '/' },
                { name: 'Hakkımızda', path: '/hakkimizda' },
                { name: 'Hizmetler', path: '/hizmetler' },
                { name: 'Galeri', path: '/galeri' },
                { name: 'İletişim', path: '/iletisim' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Hizmetlerimiz</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Diş Beyazlatma</li>
              <li>İmplant Tedavisi</li>
              <li>Zirkonyum Kaplama</li>
              <li>Kanal Tedavisi</li>
              <li>Diş Çekimi</li>
              <li>Dolgu Tedavisi</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">İletişim</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Yeni Mah. 505 Cad. No:20/2<br />Finike/Antalya
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                <a href="tel:+905369153291" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  0536 915 32 91
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                <span className="text-gray-400 text-sm">info@dtveyselarslan.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                <span className="text-gray-400 text-sm">Pzt-Cmt: 09:00-19:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Dt. Veysel Arslan - Tüm Hakları Saklıdır</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
