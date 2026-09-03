'use client';

import { FormEvent, useState } from 'react';
import { Eye, EyeOff, LockKeyhole, ShieldCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export default function AdminLoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (!response.ok || !result.success || !result.token) {
        throw new Error(result.message || 'Invalid email or password');
      }

      const storage = rememberMe ? localStorage : sessionStorage;
      storage.setItem('admin_token', result.token);
      localStorage.removeItem('admin_token');
      sessionStorage.removeItem('admin_token');
      storage.setItem('admin_token', result.token);

      window.location.href = '/admin/dashboard';
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to sign in. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080809] text-[#f0ede8]">
      <div className="pointer-events-none absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#f5a623]/10 blur-[130px]" />
      <div className="pointer-events-none absolute -bottom-52 -right-32 h-[520px] w-[520px] rounded-full bg-[#f5a623]/5 blur-[140px]" />
      <div className="grid min-h-screen lg:grid-cols-[1.05fr_0.95fr]">
        <section className="relative hidden items-center border-r border-white/10 px-10 lg:flex xl:px-20">
          <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(245,166,35,.13) 0, transparent 45%), linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px)', backgroundSize: 'auto, 52px 52px, 52px 52px' }} />
          <div className="relative max-w-xl">
            <div className="mb-8 flex items-center gap-3"><span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#f5a623]/30 bg-[#f5a623]/10 font-extrabold text-[#f5a623]">AB</span><span className="text-sm font-semibold text-white/60">Ajay Bishnoi · Portfolio Admin</span></div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#f5a623]">Private Control Center</p>
            <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-white xl:text-6xl">Manage your portfolio with <span className="text-gradient-gold">confidence.</span></h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-white/45">A focused workspace for managing projects, skills, experience, education and visitor messages from one place.</p>
            <div className="mt-10 grid grid-cols-3 gap-3">
              {['Content control', 'Clean workflow', 'Private access'].map((item) => <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.025] p-4"><ShieldCheck size={17} className="mb-4 text-[#f5a623]" /><p className="text-xs font-semibold text-white/75">{item}</p></div>)}
            </div>
          </div>
        </section>

        <section className="flex items-center justify-center px-5 py-12 sm:px-8">
          <div className="w-full max-w-md">
            <div className="mb-8 lg:hidden"><div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#f5a623]/30 bg-[#f5a623]/10 font-extrabold text-[#f5a623]">AB</div><p className="text-xs font-bold uppercase tracking-[0.25em] text-[#f5a623]">Portfolio Admin</p></div>
            <div className="mb-8"><div className="mb-5 inline-flex rounded-xl border border-[#f5a623]/20 bg-[#f5a623]/10 p-3 text-[#f5a623]"><LockKeyhole size={20} /></div><h2 className="text-3xl font-extrabold text-white">Welcome back, Admin</h2><p className="mt-2 text-sm text-white/40">Sign in to manage your portfolio.</p></div>
            <form onSubmit={handleSubmit} className="space-y-5 rounded-3xl border border-white/10 bg-white/[0.025] p-5 shadow-2xl shadow-black/30 sm:p-7">
              <label className="block"><span className="mb-2 block text-xs font-semibold text-white/65">Email address</span><input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required placeholder="admin@example.com" className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[#f5a623]/60 focus:ring-2 focus:ring-[#f5a623]/10" /></label>
              <label className="block"><span className="mb-2 block text-xs font-semibold text-white/65">Password</span><div className="relative"><input value={password} onChange={(e) => setPassword(e.target.value)} type={showPassword ? 'text' : 'password'} required placeholder="Enter your password" className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 pr-12 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[#f5a623]/60 focus:ring-2 focus:ring-[#f5a623]/10" /><button type="button" onClick={() => setShowPassword((v) => !v)} className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-white/30 hover:text-white/70">{showPassword ? <EyeOff size={17} /> : <Eye size={17} />}</button></div></label>
              {error && <div className="rounded-xl border border-red-400/20 bg-red-400/10 px-3 py-2.5 text-xs text-red-200">{error}</div>}
              <div className="flex items-center justify-between gap-3 text-xs"><label className="flex items-center gap-2 text-white/45"><input type="checkbox" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} className="h-4 w-4 rounded border-white/20 bg-transparent text-[#f5a623] focus:ring-[#f5a623]" /> Remember me</label><button type="button" className="font-semibold text-[#f5a623] hover:text-[#ffc84a]">Forgot password?</button></div>
              <button type="submit" disabled={loading} className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#f5a623] to-[#e8940f] px-5 py-3.5 text-sm font-extrabold text-black shadow-[0_10px_35px_rgba(245,166,35,.12)] transition hover:-translate-y-0.5 hover:shadow-[0_15px_40px_rgba(245,166,35,.2)] disabled:cursor-not-allowed disabled:opacity-60">{loading ? 'Signing in...' : 'Sign in'} {!loading && <ArrowRight size={17} />}</button>
            </form>
            <Link href="/" className="mt-6 block text-center text-xs text-white/30 hover:text-white/60">← Back to portfolio</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
