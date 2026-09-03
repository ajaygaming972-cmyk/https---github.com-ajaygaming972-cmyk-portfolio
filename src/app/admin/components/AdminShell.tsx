'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  BarChart3,
  BriefcaseBusiness,
  GraduationCap,
  LayoutDashboard,
  LogOut,
  Mail,
  Menu,
  PanelLeftClose,
  PanelLeftOpen,
  Settings,
  Sparkles,
  UserRound,
  X,
} from 'lucide-react';

const navItems = [
  { href: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/projects', label: 'Projects', icon: BriefcaseBusiness },
  { href: '/admin/skills', label: 'Skills', icon: Sparkles },
  { href: '/admin/experience', label: 'Experience', icon: BarChart3 },
  { href: '/admin/education', label: 'Education', icon: GraduationCap },
  { href: '/admin/messages', label: 'Messages', icon: Mail },
  { href: '/admin/settings', label: 'Settings', icon: Settings },
  { href: '/admin/profile', label: 'Profile', icon: UserRound },
];

const titles: Record<string, { title: string; description: string }> = {
  '/admin/dashboard': { title: 'Dashboard', description: 'Overview of your portfolio' },
  '/admin/projects': { title: 'Projects', description: 'Manage projects shown on your portfolio' },
  '/admin/skills': { title: 'Skills', description: 'Manage technologies and expertise' },
  '/admin/experience': { title: 'Experience', description: 'Manage your professional journey' },
  '/admin/education': { title: 'Education', description: 'Manage your academic journey' },
  '/admin/messages': { title: 'Messages', description: 'Review messages from visitors' },
  '/admin/settings': { title: 'Settings', description: 'Manage safe website settings' },
  '/admin/profile': { title: 'Profile', description: 'Manage your admin profile' },
};

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const page = titles[pathname] || titles['/admin/dashboard'];

  const logout = () => router.push('/admin');

  const Sidebar = () => (
    <aside className={`fixed inset-y-0 left-0 z-50 flex flex-col border-r border-white/10 bg-[#0b0b0c]/95 backdrop-blur-xl transition-all duration-300 ${collapsed ? 'w-[82px]' : 'w-[260px]'} ${mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
      <div className="flex h-20 items-center justify-between border-b border-white/10 px-5">
        <Link href="/admin/dashboard" className="flex items-center gap-3" onClick={() => setMobileOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#f5a623]/30 bg-[#f5a623]/10 text-sm font-extrabold text-[#f5a623]">AB</span>
          {!collapsed && <div><p className="text-sm font-bold text-white">Ajay Bishnoi</p><p className="text-[11px] text-white/40">Portfolio Admin</p></div>}
        </Link>
        <button onClick={() => setMobileOpen(false)} className="rounded-lg p-2 text-white/50 hover:bg-white/5 hover:text-white lg:hidden"><X size={18} /></button>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto p-4">
        {!collapsed && <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">Management</p>}
        {navItems.map((item) => {
          const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
          const Icon = item.icon;
          return (
            <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} title={collapsed ? item.label : undefined} className={`group flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${active ? 'bg-[#f5a623]/10 text-[#f5a623] shadow-[inset_3px_0_0_#f5a623]' : 'text-white/55 hover:bg-white/5 hover:text-white'}`}>
              <Icon size={18} strokeWidth={active ? 2.2 : 1.8} />
              {!collapsed && <span>{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-white/10 p-4">
        <button onClick={logout} title={collapsed ? 'Logout' : undefined} className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-white/50 transition hover:bg-red-500/10 hover:text-red-300 ${collapsed ? 'justify-center' : ''}`}>
          <LogOut size={18} />
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );

  return (
    <div className="min-h-screen bg-[#080809] text-[#f0ede8]">
      <Sidebar />
      {mobileOpen && <button aria-label="Close menu" className="fixed inset-0 z-40 bg-black/70 lg:hidden" onClick={() => setMobileOpen(false)} />}
      <div className={`min-h-screen transition-all duration-300 ${collapsed ? 'lg:pl-[82px]' : 'lg:pl-[260px]'}`}>
        <header className="sticky top-0 z-30 border-b border-white/10 bg-[#080809]/85 backdrop-blur-xl">
          <div className="flex h-20 items-center justify-between px-5 sm:px-7 lg:px-9">
            <div className="flex items-center gap-3">
              <button onClick={() => setMobileOpen(true)} className="rounded-xl border border-white/10 bg-white/[0.03] p-2.5 text-white/70 hover:text-white lg:hidden"><Menu size={20} /></button>
              <button onClick={() => setCollapsed((v) => !v)} className="hidden rounded-xl border border-white/10 bg-white/[0.03] p-2.5 text-white/60 hover:text-white lg:block" title="Toggle sidebar">
                {collapsed ? <PanelLeftOpen size={19} /> : <PanelLeftClose size={19} />}
              </button>
              <div>
                <h1 className="text-lg font-bold text-white sm:text-xl">{page.title}</h1>
                <p className="text-xs text-white/40">{page.description}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Link href="/" target="_blank" className="hidden rounded-full border border-[#f5a623]/25 px-4 py-2 text-xs font-semibold text-[#f5a623] transition hover:bg-[#f5a623]/10 sm:block">View Portfolio</Link>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f5a623] text-xs font-extrabold text-black">AB</div>
                <div className="hidden sm:block"><p className="text-xs font-semibold text-white">Ajay Bishnoi</p><p className="text-[10px] text-white/35">Administrator</p></div>
              </div>
            </div>
          </div>
        </header>
        <main className="p-5 sm:p-7 lg:p-9">{children}</main>
      </div>
    </div>
  );
}
