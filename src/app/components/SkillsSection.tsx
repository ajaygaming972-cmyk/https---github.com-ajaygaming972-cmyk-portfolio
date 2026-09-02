import React from 'react';
import AppImage from '@/components/ui/AppImage';

const skillCategories = [
  {
    title: 'Frontend',
    icon: '🖥️',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Responsive Web Design'],
    colSpan: 'lg:col-span-2',
  },
  {
    title: 'Backend',
    icon: '⚙️',
    skills: ['Node.js', 'Express.js', 'REST APIs'],
    colSpan: 'lg:col-span-1',
  },
  {
    title: 'Database',
    icon: '🗄️',
    skills: ['MongoDB'],
    colSpan: 'lg:col-span-1',
  },
  {
    title: 'Auth & Real-Time',
    icon: '🔐',
    skills: ['JWT Authentication', 'Socket.IO', 'Real-time Communication'],
    colSpan: 'lg:col-span-2',
  },
  {
    title: 'Tools',
    icon: '🛠️',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'npm', 'Vite', 'Chrome DevTools'],
    colSpan: 'lg:col-span-2',
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 relative overflow-hidden">
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none opacity-8"
        style={{ background: 'radial-gradient(circle, #f5a623 0%, transparent 70%)', filter: 'blur(80px)' }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="breadcrumb mb-8 reveal">
          <span>Home</span>
          <span>/</span>
          <span className="text-primary">Skills</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Skills Bento */}
          <div>
            <div className="section-label mb-3 reveal">My Skills</div>
            <h2 className="section-title text-foreground mb-8 reveal">
              Technologies I <span className="text-gradient-gold">work with</span>
            </h2>

            {/* BENTO GRID AUDIT:
                Array has 5 cards: [Frontend(cs-2), Backend(cs-1), Database(cs-1), Auth&RT(cs-2), Tools(cs-2)]
                Row 1: [col-1: Frontend cs-2] [col-3: Backend cs-1] [col-4: Database cs-1]
                Row 2: [col-1: Auth&RT cs-2] [col-3: Tools cs-2]
                Placed 5/5 cards ✓
            */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Frontend — col-span-2 */}
              <div className="col-span-2 glass-card glass-card-hover rounded-2xl p-6 card-inner-glow reveal">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl">🖥️</span>
                  <h3 className="font-700 text-foreground">Frontend</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Responsive Web Design']?.map((s) => (
                    <span key={s} className="skill-tag">{s}</span>
                  ))}
                </div>
              </div>

              {/* Backend — col-span-1 */}
              <div className="col-span-1 glass-card glass-card-hover rounded-2xl p-6 reveal">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl">⚙️</span>
                  <h3 className="font-700 text-foreground">Backend</h3>
                </div>
                <div className="flex flex-col gap-2">
                  {['Node.js', 'Express.js', 'REST APIs']?.map((s) => (
                    <span key={s} className="skill-tag w-fit">{s}</span>
                  ))}
                </div>
              </div>

              {/* Database — col-span-1 */}
              <div className="col-span-1 glass-card glass-card-hover rounded-2xl p-6 reveal">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl">🗄️</span>
                  <h3 className="font-700 text-foreground">Database</h3>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="skill-tag w-fit">MongoDB</span>
                </div>
              </div>

              {/* Auth & Real-Time — col-span-2 */}
              <div className="col-span-2 glass-card glass-card-hover rounded-2xl p-6 reveal">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl">🔐</span>
                  <h3 className="font-700 text-foreground">Auth & Real-Time</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['JWT Authentication', 'Socket.IO', 'Real-time Communication']?.map((s) => (
                    <span key={s} className="skill-tag">{s}</span>
                  ))}
                </div>
              </div>

              {/* Tools — col-span-2 */}
              <div className="col-span-2 glass-card glass-card-hover rounded-2xl p-6 reveal">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl">🛠️</span>
                  <h3 className="font-700 text-foreground">Tools</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Git', 'GitHub', 'VS Code', 'Postman', 'npm', 'Vite', 'Chrome DevTools']?.map((s) => (
                    <span key={s} className="skill-tag">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Illustration */}
          <div className="relative reveal-right">
            <div
              className="absolute inset-0 rounded-3xl opacity-25 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at center, #f5a623 0%, transparent 65%)', filter: 'blur(40px)' }}
            />
            <div className="relative rounded-3xl overflow-hidden border border-primary/20 glass-card floating-slow">
              <AppImage
                src="/assets/images/ChatGPT_Image_Aug_31__2026__08_58_33_PM-1788193698494.png"
                alt="Developer surrounded by floating technology icons, React, JavaScript, Node, MongoDB glowing, dark atmospheric background"
                width={560}
                height={560}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}