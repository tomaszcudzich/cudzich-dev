'use client';

import { useState, useEffect } from 'react';
import { Lang } from '@/lib/content';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Stack from '@/components/Stack';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Page() {
  const [lang, setLang] = useState<Lang>('pl');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('tc-lang') as Lang | null;
      if (saved === 'en') setLang('en');
    } catch {}
  }, []);

  useEffect(() => {
    const reveals = document.querySelectorAll<HTMLElement>('.reveal');
    if (!('IntersectionObserver' in window)) {
      reveals.forEach((el) => el.classList.add('is-visible'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    reveals.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [lang]);

  function handleLangChange(l: Lang) {
    setLang(l);
    try { localStorage.setItem('tc-lang', l); } catch {}
  }

  return (
    <>
      <Nav lang={lang} onLangChange={handleLangChange} />
      <main id="top">
        <Hero lang={lang} />
        <Services lang={lang} />
        <Projects lang={lang} />
        <About lang={lang} />
        <Stack lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}
