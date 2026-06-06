'use client';

import { useEffect, useState } from 'react';
import { content, Lang } from '@/lib/content';

interface NavProps {
  lang: Lang;
  onLangChange: (l: Lang) => void;
}

export default function Nav({ lang, onLangChange }: NavProps) {
  const t = content[lang].nav;
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#uslugi',  label: t.services },
    { href: '#projekty', label: t.work },
    { href: '#o-mnie',  label: t.about },
    { href: '#stack',   label: t.stack },
    { href: '#kontakt', label: t.contact },
  ];

  return (
    <header className={`nav${scrolled ? ' scrolled' : ''}`} id="nav">
      <div className="wrap nav__inner">
        <a className="logo" href="#top" aria-label="Tomasz Cudzich — Software Engineer">
          <span className="logo__diamond"><span>TC</span></span>
          <span className="logo__text">
            <span className="logo__name">Tomasz Cudzich</span>
            <span className="logo__role">Software Engineer</span>
          </span>
        </a>

        <nav className="nav__links">
          {links.map((l) => (
            <a key={l.href} className="nav__link" href={l.href}>{l.label}</a>
          ))}
        </nav>

        <div className="nav__right">
          <div className="lang" role="group" aria-label="Język / Language">
            <button
              data-lang="pl"
              aria-pressed={lang === 'pl' ? 'true' : 'false'}
              onClick={() => onLangChange('pl')}
            >PL</button>
            <button
              data-lang="en"
              aria-pressed={lang === 'en' ? 'true' : 'false'}
              onClick={() => onLangChange('en')}
            >EN</button>
          </div>
          <button
            className="nav__burger"
            aria-label="Menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      <nav className={`nav__mobile${menuOpen ? ' open' : ''}`}>
        {links.map((l) => (
          <a
            key={l.href}
            className="nav__link"
            href={l.href}
            onClick={() => setMenuOpen(false)}
          >{l.label}</a>
        ))}
      </nav>
    </header>
  );
}
