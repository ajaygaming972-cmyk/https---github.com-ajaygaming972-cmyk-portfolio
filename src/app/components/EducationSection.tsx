import React from 'react';
import AppImage from '@/components/ui/AppImage';

export default function EducationSection() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 relative overflow-hidden">
      <div
        className="absolute bottom-0 right-0 w-80 h-80 rounded-full pointer-events-none opacity-8"
        style={{ background: 'radial-gradient(circle, #f5a623 0%, transparent 70%)', filter: 'blur(80px)' }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="breadcrumb mb-8 reveal">
          <span>Home</span>
          <span>/</span>
          <span className="text-primary">Education</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Illustration */}
          <div className="relative reveal-left order-2 lg:order-1">
            <div
              className="absolute inset-0 rounded-3xl opacity-25 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at center, #f5a623 0%, transparent 65%)', filter: 'blur(40px)' }}
            />
            <div className="relative rounded-3xl overflow-hidden border border-primary/20 glass-card">
              <AppImage
                src="/assets/images/ChatGPT_Image_Aug_31__2026__09_06_03_PM-1788193729015.png"
                alt="Developer reading algorithms book at desk with graduation cap, warm study environment, dark ambient lighting"
                width={560}
                height={480}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right: Education Cards */}
          <div className="order-1 lg:order-2">
            <div className="section-label mb-3 reveal">Education</div>
            <h2 className="section-title text-foreground mb-8 reveal">
              My Academic <span className="text-gradient-gold">Journey</span>
            </h2>

            <div className="space-y-5">
              {/* BCA */}
              <div className="glass-card rounded-2xl p-6 border border-primary/20 glass-card-hover card-inner-glow reveal">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">🎓</span>
                    </div>
                    <div>
                      <h3 className="font-700 text-foreground text-lg">BCA</h3>
                      <p className="text-muted-foreground text-sm mt-0.5">Kurukshetra University</p>
                      <p className="text-muted-foreground text-xs mt-1">Currently in 2nd Year</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/15 border border-primary/30 flex-shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary pulse-gold" />
                    <span className="text-xs font-700 text-primary">Pursuing</span>
                  </div>
                </div>
              </div>

              {/* Class 12th */}
              <div className="glass-card rounded-2xl p-6 border border-border glass-card-hover reveal" style={{ transitionDelay: '100ms' }}>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-muted border border-border flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">📚</span>
                    </div>
                    <div>
                      <h3 className="font-700 text-foreground text-lg">12th (Arts with Mathematics)</h3>
                      <p className="text-muted-foreground text-sm mt-0.5">Board Examination</p>
                      <p className="text-muted-foreground text-xs mt-1">Completed</p>
                    </div>
                  </div>
                  <div className="flex-shrink-0 text-right">
                    <span className="text-2xl font-800 text-gradient-gold">92%</span>
                    <p className="text-xs text-muted-foreground mt-0.5">Score</p>
                  </div>
                </div>
              </div>

              {/* Currently Learning */}
              <div className="glass-card rounded-2xl p-5 border border-border reveal" style={{ transitionDelay: '200ms' }}>
                <p className="text-sm font-600 text-muted-foreground mb-3">Currently Exploring</p>
                <div className="flex flex-wrap gap-2">
                  {['TypeScript', 'Next.js', 'Redis', 'Docker', 'System Design']?.map((item) => (
                    <span key={item} className="text-xs px-3 py-1.5 rounded-full bg-muted border border-border text-muted-foreground font-500">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}