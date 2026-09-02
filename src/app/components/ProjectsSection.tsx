'use client';

import React, { useState } from 'react';


const projects = [
  {
    title: 'Spotify Clone',
    description: 'A Spotify-inspired web project built using HTML and JavaScript. Features a music player interface with playlist functionality and responsive design.',
    tags: ['HTML', 'JavaScript'],
    liveUrl: 'https://spotifyclone0909.netlify.app/',
    githubUrl: '#',
    image: null,
    featured: false,
  },
  {
    title: 'AI Interview Analyzer',
    description: 'AI-powered interview analysis tool that evaluates your resume and provides detailed skills assessment, strengths, weaknesses, and an overall score with a comprehensive report.',
    tags: ['React'],
    liveUrl: 'https://frotenend.netlify.app/',
    githubUrl: '#',
    image: null,
    featured: false,
  },
  {
    title: 'GhostInbox',
    description: 'Full-stack real-time social messaging and connection platform. Features user discovery, profiles, connection requests, real-time messaging with Socket.IO, online/offline presence, typing indicators, message delivery/read status, reply/edit/delete messages, and WhatsApp-style message selection.',
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'JWT'],
    liveUrl: 'https://ghostinbox009.vercel.app/',
    githubUrl: '#',
    image: null,
    featured: true,
  },
];

const featuresList = [
  'User discovery and profiles',
  'Connection requests',
  'Real-time messaging',
  'Online/offline presence',
  'Typing indicator',
  'Message delivery/read status',
  'Reply, edit & delete messages',
  'Responsive and modern UI',
];

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(2); // GhostInbox featured

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 relative overflow-hidden">
      <div
        className="absolute top-1/2 right-0 w-96 h-96 rounded-full pointer-events-none opacity-8"
        style={{ background: 'radial-gradient(circle, #f5a623 0%, transparent 70%)', filter: 'blur(80px)' }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="breadcrumb mb-8 reveal">
          <span>Home</span>
          <span>/</span>
          <span className="text-primary">Projects</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="section-label mb-3 reveal">My Projects</div>
            <h2 className="section-title text-foreground reveal">
              Some things I&apos;ve <span className="text-gradient-gold">built</span>
            </h2>
          </div>
          <a href="#" className="reveal btn-secondary text-sm w-fit">
            View All Projects
          </a>
        </div>

        {/* Project Cards Grid — 3 cards */}
        {/* BENTO AUDIT: 3 cards [Spotify cs-1][AIInterview cs-1][GhostInbox cs-1] Row 1: all 3 ✓ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {projects?.map((project, i) => (
            <div
              key={project?.title}
              className={`glass-card rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer reveal ${
                activeProject === i
                  ? 'border-primary/50 shadow-lg'
                  : 'border-border hover:border-primary/30'
              }`}
              style={{ boxShadow: activeProject === i ? '0 0 30px rgba(245,166,35,0.15)' : undefined, transitionDelay: `${i * 100}ms` }}
              onClick={() => setActiveProject(i)}
            >
              {/* Card header with mock screenshot placeholder */}
              <div className="relative h-36 overflow-hidden bg-muted">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center mx-auto mb-2">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f5a623" strokeWidth="1.5">
                        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
                      </svg>
                    </div>
                    <p className="text-xs text-muted-foreground font-500">{project?.title}</p>
                  </div>
                </div>
                {/* Top bar mock */}
                <div className="absolute top-0 left-0 right-0 h-6 bg-card/80 flex items-center px-3 gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-500/60" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                  <div className="w-2 h-2 rounded-full bg-green-500/60" />
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-700 text-foreground text-base mb-2">{project?.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">{project?.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project?.tags?.slice(0, 3)?.map((tag) => (
                    <span key={tag} className="skill-tag text-xs">{tag}</span>
                  ))}
                  {project?.tags?.length > 3 && (
                    <span className="skill-tag text-xs">+{project?.tags?.length - 3}</span>
                  )}
                </div>
                <div className="flex gap-3">
                  <a href={project?.liveUrl} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-600 text-primary hover:text-primary/80 transition-colors"
                    onClick={(e) => e?.stopPropagation()}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                    </svg>
                    Live Demo
                  </a>
                  <a href={project?.githubUrl} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-500 text-muted-foreground hover:text-foreground transition-colors"
                    onClick={(e) => e?.stopPropagation()}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58v-2.02c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Project Detail — GhostInbox */}
        {activeProject === 2 && (
          <div className="glass-card rounded-2xl p-6 sm:p-8 border border-primary/30 reveal"
            style={{ boxShadow: '0 0 40px rgba(245,166,35,0.08)' }}>
            <div className="breadcrumb mb-4">
              <span>Home</span><span>/</span><span>Projects</span><span>/</span>
              <span className="text-primary">GhostInbox</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-700 text-foreground mb-2">GhostInbox</h3>
                <p className="text-muted-foreground text-sm mb-4">Real-time social messaging and connection platform.</p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {['React', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'JWT']?.map((tag) => (
                    <span key={tag} className="skill-tag text-xs">{tag}</span>
                  ))}
                </div>
                <ul className="space-y-2.5 mb-6">
                  {featuresList?.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                      <div className="w-4 h-4 rounded-full border border-primary/50 flex items-center justify-center flex-shrink-0">
                        <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#f5a623" strokeWidth="3">
                          <path d="M20 6L9 17l-5-5"/>
                        </svg>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-4">
                  <a href="https://ghostinbox009.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">
                    Live Demo
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm">
                    View Code
                  </a>
                </div>
              </div>
              {/* Right side: mock laptop display */}
              <div className="relative flex items-center justify-center">
                <div className="w-full max-w-md">
                  <div className="rounded-xl overflow-hidden border border-border bg-card">
                    <div className="bg-muted/50 px-4 py-2 flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                      <span className="text-xs text-muted-foreground ml-2">ghostinbox009.vercel.app</span>
                    </div>
                    <div className="p-4 space-y-3">
                      {/* Mock chat UI */}
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/30 flex-shrink-0" />
                        <div className="bg-muted rounded-xl rounded-tl-none px-3 py-2 text-xs text-foreground max-w-xs">
                          Hey! Did you see the new update?
                        </div>
                      </div>
                      <div className="flex items-start gap-3 flex-row-reverse">
                        <div className="w-8 h-8 rounded-full bg-primary/50 flex-shrink-0" />
                        <div className="bg-primary/20 border border-primary/30 rounded-xl rounded-tr-none px-3 py-2 text-xs text-foreground max-w-xs">
                          Yes! The real-time sync is smooth 🔥
                        </div>
                      </div>
                      <div className="flex items-center gap-2 pl-11">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0ms' }} />
                        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" style={{ animationDelay: '150ms' }} />
                        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" style={{ animationDelay: '300ms' }} />
                        <span className="text-xs text-muted-foreground">typing...</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}