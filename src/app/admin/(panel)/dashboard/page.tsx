'use client';

import Link from 'next/link';
import { ArrowUpRight, BriefcaseBusiness, CheckCircle2, Clock3, FolderKanban, Mail, Plus, Sparkles, TrendingUp, Users } from 'lucide-react';

const stats = [
  { label: 'Total Projects', value: '3', change: '+1 this month', icon: FolderKanban },
  { label: 'Total Skills', value: '10+', change: 'Across 5 groups', icon: Sparkles },
  { label: 'Experience', value: '1', change: 'MERN Internship', icon: BriefcaseBusiness },
  { label: 'Messages', value: '5', change: '2 unread', icon: Mail },
];

const projects = [
  { title: 'GhostInbox', tech: 'React · Node.js · MongoDB', status: 'Published', updated: 'Today' },
  { title: 'AI Interview Analyzer', tech: 'React · AI', status: 'Published', updated: '2 days ago' },
  { title: 'Spotify Clone', tech: 'HTML · JavaScript', status: 'Published', updated: '1 week ago' },
];

const messages = [
  { name: 'Rahul Sharma', subject: 'Project collaboration', time: '12 min ago', unread: true },
  { name: 'Priya Verma', subject: 'Portfolio feedback', time: '2 hours ago', unread: true },
  { name: 'Arjun Mehta', subject: 'MERN opportunity', time: 'Yesterday', unread: false },
];

export default function DashboardPage() {
  return (
    <div className="space-y-7">
      <div className="relative overflow-hidden rounded-3xl border border-[#f5a623]/15 bg-gradient-to-br from-[#15110a] via-[#101010] to-[#0c0c0d] p-6 sm:p-8">
        <div className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full bg-[#f5a623]/10 blur-[90px]" />
        <div className="relative flex flex-col justify-between gap-6 md:flex-row md:items-center"><div><p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#f5a623]">Good to see you</p><h2 className="text-2xl font-extrabold text-white sm:text-3xl">Welcome back, Ajay 👋</h2><p className="mt-2 max-w-xl text-sm leading-6 text-white/40">Your portfolio is looking healthy. Keep your content fresh and make every project count.</p></div><Link href="/admin/projects" className="inline-flex w-fit items-center gap-2 rounded-xl bg-[#f5a623] px-4 py-3 text-xs font-extrabold text-black transition hover:-translate-y-0.5">Manage Projects <ArrowUpRight size={16} /></Link></div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{stats.map((stat) => { const Icon = stat.icon; return <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition hover:border-[#f5a623]/25"><div className="mb-5 flex items-center justify-between"><div className="rounded-xl border border-[#f5a623]/15 bg-[#f5a623]/10 p-2.5 text-[#f5a623]"><Icon size={18} /></div><TrendingUp size={15} className="text-emerald-400/70" /></div><p className="text-xs text-white/40">{stat.label}</p><div className="mt-1 flex items-end justify-between gap-2"><p className="text-2xl font-extrabold text-white">{stat.value}</p><p className="text-[10px] text-white/30">{stat.change}</p></div></div> })}</div>

      <div className="grid gap-6 xl:grid-cols-[1.45fr_1fr]">
        <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-6"><div className="mb-5 flex items-center justify-between"><div><h3 className="font-bold text-white">Recent Projects</h3><p className="mt-1 text-xs text-white/35">Latest content updates</p></div><Link href="/admin/projects" className="text-xs font-semibold text-[#f5a623] hover:text-[#ffc84a]">View all</Link></div><div className="space-y-3">{projects.map((project) => <div key={project.title} className="flex items-center justify-between gap-4 rounded-xl border border-white/8 bg-black/20 p-4"><div className="flex min-w-0 items-center gap-3"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f5a623]/10 text-[#f5a623]"><FolderKanban size={17} /></div><div className="min-w-0"><p className="truncate text-sm font-semibold text-white">{project.title}</p><p className="truncate text-[11px] text-white/35">{project.tech}</p></div></div><div className="hidden text-right sm:block"><span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-2.5 py-1 text-[10px] font-semibold text-emerald-300"><CheckCircle2 size={12} />{project.status}</span><p className="mt-1 text-[10px] text-white/25">{project.updated}</p></div></div>)}</div></section>
        <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-6"><div className="mb-5 flex items-center justify-between"><div><h3 className="font-bold text-white">Recent Messages</h3><p className="mt-1 text-xs text-white/35">Visitor enquiries</p></div><Link href="/admin/messages" className="text-xs font-semibold text-[#f5a623]">View all</Link></div><div className="space-y-3">{messages.map((message) => <div key={message.name} className="rounded-xl border border-white/8 bg-black/20 p-4"><div className="flex items-center justify-between gap-3"><div className="flex items-center gap-3"><div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-xs font-bold text-white/60">{message.name.split(' ').map((n) => n[0]).join('')}</div><div><p className="text-xs font-semibold text-white">{message.name}</p><p className="mt-1 text-[11px] text-white/35">{message.subject}</p></div></div>{message.unread && <span className="h-2 w-2 rounded-full bg-[#f5a623] shadow-[0_0_10px_rgba(245,166,35,.6)]" />}</div><div className="mt-3 flex items-center gap-1 text-[10px] text-white/25"><Clock3 size={11} /> {message.time}</div></div>)}</div></section>
      </div>

      <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-6"><div className="mb-5 flex items-center justify-between"><div><h3 className="font-bold text-white">Quick Actions</h3><p className="mt-1 text-xs text-white/35">Jump into common tasks</p></div><Users size={17} className="text-white/25" /></div><div className="grid gap-3 sm:grid-cols-3"><Link href="/admin/projects" className="group flex items-center gap-3 rounded-xl border border-white/8 bg-black/20 p-4 transition hover:border-[#f5a623]/25"><span className="rounded-lg bg-[#f5a623]/10 p-2 text-[#f5a623]"><Plus size={16} /></span><div><p className="text-xs font-semibold text-white">Add a project</p><p className="mt-1 text-[10px] text-white/30">Showcase something new</p></div></Link><Link href="/admin/skills" className="group flex items-center gap-3 rounded-xl border border-white/8 bg-black/20 p-4 transition hover:border-[#f5a623]/25"><span className="rounded-lg bg-[#f5a623]/10 p-2 text-[#f5a623]"><Sparkles size={16} /></span><div><p className="text-xs font-semibold text-white">Update skills</p><p className="mt-1 text-[10px] text-white/30">Keep tech stack current</p></div></Link><Link href="/admin/messages" className="group flex items-center gap-3 rounded-xl border border-white/8 bg-black/20 p-4 transition hover:border-[#f5a623]/25"><span className="rounded-lg bg-[#f5a623]/10 p-2 text-[#f5a623]"><Mail size={16} /></span><div><p className="text-xs font-semibold text-white">Check messages</p><p className="mt-1 text-[10px] text-white/30">Reply to visitors</p></div></Link></div></section>
    </div>
  );
}
