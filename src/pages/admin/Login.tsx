import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Stethoscope, Eye, EyeOff } from 'lucide-react';
import { api } from '../../lib/api';
import { setToken } from '../../lib/auth';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const { token } = await api.post<{ token: string }>('/api/auth/login', { email, password });
      setToken(token);
      navigate('/admin');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Giriş başarısız');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-teal-50 flex items-center justify-center p-4">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-8">
        <div className="flex flex-col items-center mb-8">
          <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-2xl flex items-center justify-center mb-4">
            <Stethoscope className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-xl font-bold text-gray-900">Admin Girişi</h1>
          <p className="text-sm text-gray-500 mt-1">Dt. Veysel Arslan Kliniği</p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-sm mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">E-posta</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm"
              placeholder="admin@dtveyselarslan.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Şifre</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 pr-10 rounded-lg border border-gray-200 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm"
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-cyan-500 to-teal-600 text-white rounded-lg font-medium text-sm hover:from-cyan-600 hover:to-teal-700 transition-all disabled:opacity-60"
          >
            {loading ? 'Giriş yapılıyor...' : 'Giriş Yap'}
          </button>
        </form>
      </div>
    </div>
  );
}
