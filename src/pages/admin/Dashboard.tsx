import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Calendar, ChevronRight } from 'lucide-react';
import AdminLayout from '../../components/admin/AdminLayout';
import { api } from '../../lib/api';
import { AdminStats } from '../../lib/types';

export default function AdminDashboard() {
  const [stats, setStats] = useState<AdminStats>({ unreadMessages: 0, pendingAppointments: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get<AdminStats>('/api/admin/stats')
      .then(setStats)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const cards = [
    {
      label: 'Okunmamış Mesaj',
      value: stats.unreadMessages,
      icon: MessageSquare,
      color: 'from-cyan-500 to-teal-600',
      to: '/admin/messages',
    },
    {
      label: 'Bekleyen Randevu',
      value: stats.pendingAppointments,
      icon: Calendar,
      color: 'from-teal-500 to-emerald-600',
      to: '/admin/appointments',
    },
  ];

  return (
    <AdminLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-sm text-gray-500 mt-1">Klinik yönetim paneline hoş geldiniz.</p>
      </div>

      {loading ? (
        <div className="text-gray-500 text-sm">Yükleniyor...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg">
          {cards.map((card) => (
            <Link
              key={card.to}
              to={card.to}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-shadow group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className={`w-10 h-10 bg-gradient-to-br ${card.color} rounded-lg flex items-center justify-center`}>
                  <card.icon className="w-5 h-5 text-white" />
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
              </div>
              <p className="text-3xl font-bold text-gray-900">{card.value}</p>
              <p className="text-sm text-gray-500 mt-1">{card.label}</p>
            </Link>
          ))}
        </div>
      )}
    </AdminLayout>
  );
}
