import { useEffect, useState } from 'react';
import { Check, X, Trash2, Clock } from 'lucide-react';
import AdminLayout from '../../components/admin/AdminLayout';
import { api } from '../../lib/api';
import { Appointment } from '../../lib/types';

const STATUS_LABELS: Record<string, { label: string; cls: string }> = {
  pending: { label: 'Bekliyor', cls: 'bg-amber-100 text-amber-700' },
  confirmed: { label: 'Onaylandı', cls: 'bg-green-100 text-green-700' },
  cancelled: { label: 'İptal', cls: 'bg-red-100 text-red-700' },
};

type Filter = 'all' | 'pending' | 'confirmed' | 'cancelled';

export default function AdminAppointments() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<Filter>('all');

  useEffect(() => {
    fetchAppointments();
  }, []);

  async function fetchAppointments() {
    try {
      const data = await api.get<Appointment[]>('/api/appointments/admin');
      setAppointments(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function updateStatus(id: number, status: 'confirmed' | 'cancelled') {
    try {
      const updated = await api.put<Appointment>(`/api/appointments/admin/${id}`, { status });
      setAppointments((prev) => prev.map((a) => (a.id === id ? updated : a)));
    } catch (err) {
      console.error(err);
    }
  }

  async function deleteAppointment(id: number) {
    if (!confirm('Bu randevuyu silmek istediğinizden emin misiniz?')) return;
    try {
      await api.delete(`/api/appointments/admin/${id}`);
      setAppointments((prev) => prev.filter((a) => a.id !== id));
    } catch (err) {
      console.error(err);
    }
  }

  const filtered = filter === 'all' ? appointments : appointments.filter((a) => a.status === filter);
  const pendingCount = appointments.filter((a) => a.status === 'pending').length;

  return (
    <AdminLayout>
      <div className="mb-6 flex items-center gap-3">
        <h1 className="text-2xl font-bold text-gray-900">Randevular</h1>
        {pendingCount > 0 && (
          <span className="bg-amber-100 text-amber-700 text-xs font-semibold px-2.5 py-1 rounded-full">
            {pendingCount} bekliyor
          </span>
        )}
      </div>

      {/* Filter tabs */}
      <div className="flex gap-2 mb-4">
        {(['all', 'pending', 'confirmed', 'cancelled'] as Filter[]).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              filter === f
                ? 'bg-cyan-600 text-white'
                : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            {f === 'all' ? 'Tümü' : STATUS_LABELS[f].label}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="text-gray-500 text-sm">Yükleniyor...</div>
      ) : filtered.length === 0 ? (
        <div className="text-gray-500 text-sm bg-white rounded-xl border border-gray-100 p-8 text-center">
          Randevu bulunamadı.
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((appt) => {
            const statusInfo = STATUS_LABELS[appt.status] || STATUS_LABELS.pending;
            const date = new Date(appt.date);
            return (
              <div
                key={appt.id}
                className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm flex flex-col sm:flex-row sm:items-center gap-4"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-semibold text-gray-900">{appt.name}</p>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${statusInfo.cls}`}>
                      {statusInfo.label}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-gray-400" />
                      {date.toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}
                      {' '}
                      {date.toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })}
                    </span>
                    <span>📞 {appt.phone}</span>
                    {appt.subject && <span>🦷 {appt.subject}</span>}
                  </div>
                  {appt.notes && (
                    <p className="text-xs text-gray-400 mt-1 italic">{appt.notes}</p>
                  )}
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {appt.status === 'pending' && (
                    <>
                      <button
                        onClick={() => updateStatus(appt.id, 'confirmed')}
                        title="Onayla"
                        className="p-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors"
                      >
                        <Check className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => updateStatus(appt.id, 'cancelled')}
                        title="İptal Et"
                        className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </>
                  )}
                  <button
                    onClick={() => deleteAppointment(appt.id)}
                    title="Sil"
                    className="p-2 bg-gray-50 text-gray-400 rounded-lg hover:bg-gray-100 hover:text-red-500 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </AdminLayout>
  );
}
