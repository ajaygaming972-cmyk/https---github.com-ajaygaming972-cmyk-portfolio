export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
export async function publicFetch(path: string) {
  const res = await fetch(`${API_URL}${path}`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Unable to load portfolio data');
  const body = await res.json();
  return body?.data ?? [];
}
