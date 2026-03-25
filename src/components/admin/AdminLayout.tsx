import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboard, MessageSquare, Calendar, LogOut, Menu, X, Stethoscope } from 'lucide-react';
import { removeToken } from '../../lib/auth';

const navItems = [
  { to: '/admin', icon: LayoutDashboard, label: 'Dashboard', exact: true },
  { to: '/admin/messages', icon: MessageSquare, label: 'Mesajlar' },
  { to: '/admin/appointments', icon: Calendar, label: 'Randevular' },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  function handleLogout() {
    removeToken();
    navigate('/admin/login');
  }

  function isActive(item: { to: string; exact?: boolean }) {
    if (item.exact) return location.pathname === item.to;
    return location.pathname.startsWith(item.to);
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar — desktop */}
      <aside className="hidden lg:flex flex-col w-64 bg-white border-r border-gray-200 fixed inset-y-0">
        <div className="flex items-center gap-3 px-6 py-5 border-b border-gray-200">
          <div className="w-9 h-9 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-lg flex items-center justify-center">
            <Stethoscope className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="font-semibold text-gray-900 text-sm">Dt. Veysel Arslan</p>
            <p className="text-xs text-gray-500">Admin Panel</p>
          </div>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive(item)
                  ? 'bg-cyan-50 text-cyan-700'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="px-4 pb-4">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Çıkış Yap
          </button>
        </div>
      </aside>

      {/* Mobile header */}
      <div className="lg:hidden fixed top-0 inset-x-0 z-30 bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-lg flex items-center justify-center">
            <Stethoscope className="w-4 h-4 text-white" />
          </div>
          <span className="font-semibold text-gray-900 text-sm">Admin Panel</span>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-600">
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 z-20 bg-black/50" onClick={() => setMenuOpen(false)}>
          <div className="w-64 h-full bg-white" onClick={(e) => e.stopPropagation()}>
            <div className="pt-16 px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive(item)
                      ? 'bg-cyan-50 text-cyan-700'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </Link>
              ))}
              <button
                onClick={handleLogout}
                className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50"
              >
                <LogOut className="w-4 h-4" />
                Çıkış Yap
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main content */}
      <main className="flex-1 lg:ml-64 pt-16 lg:pt-0">
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
}
