'use client';

import { useEffect } from 'react';

export default function ScrollRevealInit() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    elements?.forEach((el) => observer?.observe(el));

    return () => observer?.disconnect();
  }, []);

  return null;
}