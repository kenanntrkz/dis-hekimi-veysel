import { useEffect, useState } from 'react';
import { Mail, MailOpen, Trash2, X, Phone, AtSign, Clock } from 'lucide-react';
import AdminLayout from '../../components/admin/AdminLayout';
import { api } from '../../lib/api';
import { Message } from '../../lib/types';

export default function AdminMessages() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<Message | null>(null);

  useEffect(() => {
    fetchMessages();
  }, []);

  async function fetchMessages() {
    try {
      const data = await api.get<Message[]>('/api/messages/admin');
      setMessages(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function openMessage(msg: Message) {
    setSelected(msg);
    if (!msg.read) {
      try {
        await api.put(`/api/messages/admin/${msg.id}`, { read: true });
        setMessages((prev) => prev.map((m) => (m.id === msg.id ? { ...m, read: true } : m)));
      } catch (err) {
        console.error(err);
      }
    }
  }

  async function deleteMessage(id: number) {
    if (!confirm('Bu mesajı silmek istediğinizden emin misiniz?')) return;
    try {
      await api.delete(`/api/messages/admin/${id}`);
      setMessages((prev) => prev.filter((m) => m.id !== id));
      if (selected?.id === id) setSelected(null);
    } catch (err) {
      console.error(err);
    }
  }

  const unreadCount = messages.filter((m) => !m.read).length;

  return (
    <AdminLayout>
      <div className="mb-6 flex items-center gap-3">
        <h1 className="text-2xl font-bold text-gray-900">Mesajlar</h1>
        {unreadCount > 0 && (
          <span className="bg-cyan-100 text-cyan-700 text-xs font-semibold px-2.5 py-1 rounded-full">
            {unreadCount} okunmamış
          </span>
        )}
      </div>

      {loading ? (
        <div className="text-gray-500 text-sm">Yükleniyor...</div>
      ) : messages.length === 0 ? (
        <div className="text-gray-500 text-sm bg-white rounded-xl border border-gray-100 p-8 text-center">
          Henüz mesaj yok.
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm">
          <ul className="divide-y divide-gray-50">
            {messages.map((msg) => (
              <li
                key={msg.id}
                onClick={() => openMessage(msg)}
                className={`flex items-center gap-4 px-5 py-4 cursor-pointer hover:bg-gray-50 transition-colors ${
                  !msg.read ? 'bg-cyan-50/40' : ''
                }`}
              >
                <div className="shrink-0">
                  {msg.read ? (
                    <MailOpen className="w-5 h-5 text-gray-400" />
                  ) : (
                    <Mail className="w-5 h-5 text-cyan-500" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className={`text-sm truncate ${!msg.read ? 'font-semibold text-gray-900' : 'font-medium text-gray-700'}`}>
                      {msg.name}
                    </p>
                    {msg.subject && (
                      <span className="text-xs text-gray-400 truncate">— {msg.subject}</span>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 truncate mt-0.5">{msg.body}</p>
                </div>
                <div className="shrink-0 flex items-center gap-3">
                  <span className="text-xs text-gray-400 hidden sm:block">
                    {new Date(msg.createdAt).toLocaleDateString('tr-TR')}
                  </span>
                  <button
                    onClick={(e) => { e.stopPropagation(); deleteMessage(msg.id); }}
                    className="text-gray-300 hover:text-red-500 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Mesaj detay modal */}
      {selected && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <h2 className="font-semibold text-gray-900">{selected.subject || 'Mesaj Detayı'}</h2>
              <button onClick={() => setSelected(null)} className="text-gray-400 hover:text-gray-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="px-6 py-5 space-y-3">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="font-medium text-gray-900">{selected.name}</span>
              </div>
              {selected.phone && (
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <a href={`tel:${selected.phone}`} className="hover:text-cyan-600">{selected.phone}</a>
                </div>
              )}
              {selected.email && (
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <AtSign className="w-4 h-4 text-gray-400" />
                  <a href={`mailto:${selected.email}`} className="hover:text-cyan-600">{selected.email}</a>
                </div>
              )}
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Clock className="w-4 h-4 text-gray-400" />
                {new Date(selected.createdAt).toLocaleString('tr-TR')}
              </div>
              <div className="mt-4 bg-gray-50 rounded-lg p-4 text-sm text-gray-700 whitespace-pre-wrap">
                {selected.body}
              </div>
            </div>
            <div className="px-6 py-4 border-t border-gray-100 flex justify-end gap-3">
              <button
                onClick={() => deleteMessage(selected.id)}
                className="text-sm text-red-600 hover:text-red-700 font-medium"
              >
                Sil
              </button>
              <button
                onClick={() => setSelected(null)}
                className="text-sm px-4 py-2 bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-200 transition-colors"
              >
                Kapat
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
