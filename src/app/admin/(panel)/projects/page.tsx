'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ExternalLink,
  Code2,
  Pencil,
  Plus,
  Search,
  Trash2,
} from 'lucide-react';

const initialProjects = [
  {
    id: 1,
    title: 'GhostInbox',
    description:
      'Real-time social messaging and connection platform.',
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.IO'],
    status: 'Published',
    featured: true,
  },
  {
    id: 2,
    title: 'AI Interview Analyzer',
    description:
      'AI-powered interview and resume analysis experience.',
    tech: ['React', 'AI'],
    status: 'Published',
    featured: true,
  },
  {
    id: 3,
    title: 'Spotify Clone',
    description:
      'Responsive music web project built with HTML and JavaScript.',
    tech: ['HTML', 'JavaScript'],
    status: 'Published',
    featured: false,
  },
];

export default function ProjectsPage() {
  const [projects, setProjects] = useState(initialProjects);
  const [query, setQuery] = useState('');

  const filtered = projects.filter((project) =>
    project.title.toLowerCase().includes(query.toLowerCase())
  );

  const remove = (id: number) => {
    setProjects((items) =>
      items.filter((project) => project.id !== id)
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-2xl font-extrabold text-white">
            All Projects
          </h2>

          <p className="mt-1 text-sm text-white/35">
            Create and manage the work displayed on your portfolio.
          </p>
        </div>

        <Link
          href="/admin/projects/new"
          className="inline-flex w-fit items-center gap-2 rounded-xl bg-[#f5a623] px-4 py-3 text-xs font-extrabold text-black transition hover:bg-[#ffb52e]"
        >
          <Plus size={16} />
          Add Project
        </Link>
      </div>

      {/* Search */}
      <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3">
        <Search
          size={17}
          className="text-white/25"
        />

        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search projects..."
          className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/20"
        />
      </div>

      {/* Projects Table */}
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
        {/* Table Header */}
        <div className="hidden grid-cols-[1.5fr_1fr_.7fr_.55fr] gap-4 border-b border-white/10 px-5 py-3 text-[10px] font-bold uppercase tracking-wider text-white/25 md:grid">
          <span>Project</span>
          <span>Technologies</span>
          <span>Status</span>
          <span className="text-right">Actions</span>
        </div>

        {/* Projects */}
        {filtered.map((project) => (
          <div
            key={project.id}
            className="grid gap-4 border-b border-white/8 px-5 py-5 last:border-0 md:grid-cols-[1.5fr_1fr_.7fr_.55fr] md:items-center"
          >
            {/* Project Info */}
            <div>
              <div className="flex items-center gap-2">
                <p className="text-sm font-bold text-white">
                  {project.title}
                </p>

                {project.featured && (
                  <span className="rounded-full bg-[#f5a623]/10 px-2 py-0.5 text-[9px] font-bold text-[#f5a623]">
                    Featured
                  </span>
                )}
              </div>

              <p className="mt-1 text-xs leading-5 text-white/35">
                {project.description}
              </p>
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-2 py-1 text-[9px] text-white/45"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Status */}
            <div>
              <span className="rounded-full bg-emerald-400/10 px-2.5 py-1 text-[10px] font-semibold text-emerald-300">
                {project.status}
              </span>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-start gap-1 md:justify-end">
              {/* Edit */}
              <Link
                href={`/admin/projects/${project.id}/edit`}
                className="rounded-lg p-2 text-white/35 transition hover:bg-white/5 hover:text-[#f5a623]"
                title="Edit"
              >
                <Pencil size={15} />
              </Link>

              {/* Delete */}
              <button
                onClick={() => remove(project.id)}
                className="rounded-lg p-2 text-white/35 transition hover:bg-red-500/10 hover:text-red-300"
                title="Delete"
              >
                <Trash2 size={15} />
              </button>

              {/* Open */}
              <button
                className="rounded-lg p-2 text-white/35 transition hover:bg-white/5 hover:text-white"
                title="Open"
              >
                <ExternalLink size={15} />
              </button>

              {/* GitHub / Code */}
              <button
                className="rounded-lg p-2 text-white/35 transition hover:bg-white/5 hover:text-white"
                title="GitHub"
              >
                <Code2 size={15} />
              </button>
            </div>
          </div>
        ))}

        {/* Empty State */}
        {filtered.length === 0 && (
          <div className="p-10 text-center text-sm text-white/30">
            No projects found.
          </div>
        )}
      </div>
    </div>
  );
}