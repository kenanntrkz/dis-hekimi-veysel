import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { name: 'Ana Sayfa', path: '/' },
    { name: 'Hakkımızda', path: '/hakkimizda' },
    { name: 'Hizmetler', path: '/hizmetler' },
    { name: 'Galeri', path: '/galeri' },
    { name: 'Yorumlar', path: '/yorumlar' },
    { name: 'İletişim', path: '/iletisim' },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-full flex items-center justify-center">
              <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C9.5 2 7.5 4 7.5 6.5C7.5 8 8 9.5 9 10.5L7 22L12 18L17 22L15 10.5C16 9.5 16.5 8 16.5 6.5C16.5 4 14.5 2 12 2Z"/>
              </svg>
            </div>
            <div>
              <span className="text-xl font-bold text-gray-800">Dt. Veysel Arslan</span>
              <p className="text-xs text-cyan-600">Diş Hekimi</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? 'bg-cyan-500 text-white'
                    : 'text-gray-600 hover:bg-cyan-50 hover:text-cyan-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Phone Button */}
          <a
            href="tel:+905369153291"
            className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-teal-600 text-white px-5 py-2.5 rounded-full hover:shadow-lg transition-all duration-300"
          >
            <Phone className="w-4 h-4" />
            <span className="font-medium">0536 915 32 91</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t">
            <div className="flex flex-col space-y-1 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg font-medium transition-all ${
                    isActive(link.path)
                      ? 'bg-cyan-500 text-white'
                      : 'text-gray-600 hover:bg-cyan-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="tel:+905369153291"
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-500 to-teal-600 text-white px-4 py-3 rounded-lg mt-2"
              >
                <Phone className="w-4 h-4" />
                <span>0536 915 32 91</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
