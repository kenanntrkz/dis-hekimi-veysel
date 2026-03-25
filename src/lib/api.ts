const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3900';

function getToken(): string | null {
  return localStorage.getItem('dis_admin_token');
}

async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const token = getToken();
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(options.headers as Record<string, string>),
  };
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const res = await fetch(`${API_URL}${path}`, { ...options, headers });

  if (res.status === 401) {
    localStorage.removeItem('dis_admin_token');
    window.location.href = '/admin/login';
    throw new Error('Yetkisiz erişim');
  }

  if (!res.ok) {
    const err = await res.json().catch(() => ({ message: 'Sunucu hatası' }));
    throw new Error(err.message || 'Sunucu hatası');
  }

  return res.json();
}

export const api = {
  get: <T>(path: string) => request<T>(path),
  post: <T>(path: string, body: unknown) =>
    request<T>(path, { method: 'POST', body: JSON.stringify(body) }),
  put: <T>(path: string, body: unknown) =>
    request<T>(path, { method: 'PUT', body: JSON.stringify(body) }),
  delete: <T>(path: string) => request<T>(path, { method: 'DELETE' }),
};
