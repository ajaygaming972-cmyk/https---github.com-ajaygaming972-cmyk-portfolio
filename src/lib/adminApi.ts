export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export function getToken() {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('admin_token') || sessionStorage.getItem('admin_token');
}

export function clearToken() {
  if (typeof window === 'undefined') return;
  localStorage.removeItem('admin_token');
  sessionStorage.removeItem('admin_token');
}

export async function apiFetch(path: string, options: RequestInit = {}) {
  const token = getToken();
  const headers = new Headers(options.headers);
  headers.set('Content-Type', 'application/json');
  if (token) headers.set('Authorization', `Bearer ${token}`);
  const res = await fetch(`${API_URL}${path}`, { ...options, headers });
  let body: any = null;
  try { body = await res.json(); } catch {}
  if (res.status === 401) { clearToken(); if (typeof window !== 'undefined') window.location.href = '/admin'; }
  if (!res.ok) throw new Error(body?.message || 'Request failed');
  return body;
}
