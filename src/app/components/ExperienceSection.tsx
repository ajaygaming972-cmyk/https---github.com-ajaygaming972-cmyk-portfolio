import React from 'react';
import AppImage from '@/components/ui/AppImage';

const gained = [
  'Built responsive user interfaces with React',
  'Developed RESTful APIs with Node.js & Express.js',
  'Integrated frontend with backend services',
  'Worked with MongoDB for data storage',
  'Implemented JWT-based authentication',
  'Debugged and optimized full-stack applications',
  'Deployed web applications to cloud platforms',
  'Connected frontend with backend end-to-end',
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 relative overflow-hidden">
      <div
        className="absolute top-0 left-0 w-80 h-80 rounded-full pointer-events-none opacity-8"
        style={{ background: 'radial-gradient(circle, #f5a623 0%, transparent 70%)', filter: 'blur(80px)' }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="breadcrumb mb-8 reveal">
          <span>Home</span>
          <span>/</span>
          <span className="text-primary">Experience</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <div className="section-label mb-3 reveal">Experience</div>
            <h2 className="section-title text-foreground mb-8 reveal">
              My Internship <span className="text-gradient-gold">Experience</span>
            </h2>

            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-primary/20 reveal card-inner-glow">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-700 text-foreground">MERN Stack Developer Intern</h3>
                  <p className="text-muted-foreground text-sm mt-1">Full Stack Web Development</p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/15 border border-primary/30 w-fit">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-xs font-700 text-primary">3 Months</span>
                </div>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                During my 3-month MERN stack internship, I worked on full-stack web development
                using the MERN stack, gaining hands-on experience across the entire development lifecycle.
              </p>

              <div className="space-y-2.5">
                {gained?.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Tech used */}
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-xs text-muted-foreground font-600 uppercase tracking-wider mb-3">Technologies Used</p>
                <div className="flex flex-wrap gap-2">
                  {['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT', 'REST APIs']?.map((tech) => (
                    <span key={tech} className="skill-tag text-xs">{tech}</span>
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
            <div className="relative rounded-3xl overflow-hidden border border-primary/20 glass-card">
              <AppImage
                src="/assets/images/ChatGPT_Image_Aug_31__2026__09_02_14_PM-1788193701285.png"
                alt="Developer thinking at desk with dual monitors showing code, dark moody workspace, warm amber glow"
                width={560}
                height={480}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}