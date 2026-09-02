import React from 'react';
import AppImage from '@/components/ui/AppImage';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none opacity-8"
        style={{ background: 'radial-gradient(circle, #f5a623 0%, transparent 70%)', filter: 'blur(80px)' }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <div className="breadcrumb mb-8 reveal">
          <span>Home</span>
          <span>/</span>
          <span className="text-primary">About</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative reveal-left order-2 lg:order-1">
            <div
              className="absolute inset-0 rounded-3xl opacity-25 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at center, #f5a623 0%, transparent 65%)', filter: 'blur(40px)' }}
            />
            <div className="relative rounded-3xl overflow-hidden border border-primary/20 glass-card">
              <AppImage
                src="/assets/images/ChatGPT_Image_Aug_31__2026__08_55_04_PM-1788193653686.png"
                alt="Developer relaxing on bean bag with laptop, warm ambient lighting, focused expression, dark cozy room"
                width={560}
                height={480}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <div className="section-label mb-3 reveal">About Me</div>
            <h2 className="section-title text-foreground mb-6 reveal">
              Who am <span className="text-gradient-gold">I?</span>
            </h2>

            <div className="space-y-4 mb-8">
              <p className="text-muted-foreground leading-relaxed reveal">
                I&apos;m <span className="text-foreground font-600">Ajay Bishnoi</span>, a passionate Full Stack Developer
                currently pursuing BCA from Kurukshetra University (2nd Year). I love building
                real-world web applications and learning new technologies.
              </p>
              <p className="text-muted-foreground leading-relaxed reveal">
                I&apos;m focused on the <span className="text-primary font-600">MERN stack</span> — MongoDB, Express.js,
                React, and Node.js. I enjoy solving real problems through clean, efficient code
                and responsive user interfaces.
              </p>
              <p className="text-muted-foreground leading-relaxed reveal">
                Currently looking for opportunities to contribute to meaningful projects
                and grow as a developer in a collaborative environment.
              </p>
            </div>

            {/* Info tags */}
            <div className="flex flex-wrap gap-3 mb-8 reveal">
              {[
                { icon: '🎓', text: 'BCA — Kurukshetra University' },
                { icon: '📍', text: 'Fatehabad, Haryana, India' },
                { icon: '💼', text: 'MERN Stack Intern' },
              ]?.map((item) => (
                <div key={item?.text} className="flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-border text-sm text-foreground">
                  <span>{item?.icon}</span>
                  <span className="font-500">{item?.text}</span>
                </div>
              ))}
            </div>

            <div className="reveal">
              <a href="#" className="btn-primary text-sm">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
                </svg>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}