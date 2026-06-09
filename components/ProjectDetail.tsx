'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { content, Lang } from '@/lib/content';
import Nav from './Nav';
import Footer from './Footer';

export default function ProjectDetail({ slug }: { slug: string }) {
  const [lang, setLang] = useState<Lang>('pl');
  const [lightbox, setLightbox] = useState<string | null>(null);

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

  const closeLightbox = useCallback(() => setLightbox(null), []);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeLightbox(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightbox, closeLightbox]);

  function handleLangChange(l: Lang) {
    setLang(l);
    try { localStorage.setItem('tc-lang', l); } catch {}
  }

  const t = content[lang].projects;
  const project = t.items.find((p) => p.slug === slug);
  if (!project) return null;

  return (
    <>
      <Nav lang={lang} onLangChange={handleLangChange} prefix="/" />
      <main>
        {/* Hero — screenshot w ramce na ciemnym tle */}
        <div className="proj-detail__hero">
          {project.screenshots[0] ? (
            <img
              src={project.screenshots[0]}
              alt={project.name}
              className="proj-detail__hero-img"
              onClick={() => setLightbox(project.screenshots[0])}
            />
          ) : (
            <div className="proj-detail__hero-ph">
              <span className="proj-detail__hero-name">{project.name}</span>
            </div>
          )}
        </div>

        <div className="wrap proj-detail__wrap">
          <div className="proj-detail__back reveal">
            <Link href="/#projekty" className="proj-detail__back-link">
              ← {lang === 'pl' ? 'Realizacje' : 'Projects'}
            </Link>
          </div>

          <div className="proj-detail__top reveal">
            <div className="proj-card__flag" style={{ marginBottom: '20px' }}>
              <span className="dot" />
              <span>{project.flag}</span>
            </div>
            <h1 className="proj-detail__title">{project.name}</h1>
          </div>

          <div className="proj-detail__body">
            <div className="proj-detail__desc reveal">
              {project.longDesc.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <aside className="proj-detail__aside reveal" style={{ ['--reveal-delay' as string]: '80ms' }}>
              <div className="proj-detail__stats">
                {project.stats.map((s) => (
                  <div className="proj-detail__stat" key={s.label}>
                    <span className="n">{s.num}</span>
                    <span className="l">{s.label}</span>
                  </div>
                ))}
              </div>
              <div className="proj-detail__pills">
                <p className="proj-detail__pills-label">
                  {lang === 'pl' ? 'Technologie' : 'Stack'}
                </p>
                <div className="pills">
                  {project.pills.map((p) => (
                    <span className="pill" key={p}>{p}</span>
                  ))}
                </div>
              </div>
            </aside>
          </div>

          {project.screenshots.length > 0 && (
            <div className="proj-detail__screens reveal">
              <p className="proj-detail__pills-label" style={{ marginBottom: '24px' }}>
                {lang === 'pl' ? 'Screenshoty' : 'Screenshots'}
              </p>
              <div className="proj-detail__screens-grid">
                {project.screenshots.map((src, i) => (
                  <button
                    key={i}
                    className="proj-detail__screen-btn"
                    onClick={() => setLightbox(src)}
                    aria-label={`${project.name} screenshot ${i + 1}`}
                  >
                    <img src={src} alt={`${project.name} screenshot ${i + 1}`} className="proj-detail__screen" />
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="proj-detail__cta reveal">
            <p>{lang === 'pl' ? 'Chcesz podobne rozwiązanie?' : 'Looking for a similar solution?'}</p>
            <Link href="/#kontakt" className="btn btn--ghost">
              {lang === 'pl' ? 'Porozmawiajmy' : 'Let\'s talk'} <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </main>
      <Footer lang={lang} />

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox" onClick={closeLightbox} role="dialog" aria-modal="true">
          <button className="lightbox__close" onClick={closeLightbox} aria-label="Zamknij">✕</button>
          <img
            src={lightbox}
            alt="Podgląd"
            className="lightbox__img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
