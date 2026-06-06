import { content, Lang } from '@/lib/content';

export default function Hero({ lang }: { lang: Lang }) {
  const t = content[lang].hero;
  const stats = content[lang].stats;

  return (
    <section className="hero" id="hero">
      <div className="hero__grid" />
      <div className="wrap hero__inner">

        <div className="hero__lead">
          <div className="hero__tagline reveal">
            <span className="tagline">{t.tagline}</span>
          </div>
          <h1 className="display hero__title reveal" style={{ ['--reveal-delay' as string]: '80ms' }}>
            <span>{t.title1}</span>{' '}
            <em>{t.title2}</em>
          </h1>
          <p className="hero__desc reveal" style={{ ['--reveal-delay' as string]: '160ms' }}>
            {t.desc}
          </p>
          <div className="hero__cta reveal" style={{ ['--reveal-delay' as string]: '240ms' }}>
            <a className="btn btn--gold" href="#kontakt">{t.cta1}</a>
            <a className="btn btn--ghost" href="#projekty">
              <span>{t.cta2}</span>
              <span className="arrow">→</span>
            </a>
          </div>
        </div>

        <div className="hero__side reveal" style={{ ['--reveal-delay' as string]: '200ms' }}>
          <div className="hero__stats">
            <div className="stats-grid">
              {stats.map((s, i) => (
                <div className="stat" key={i}>
                  <div className="stat__num">
                    {s.num}{s.unitSm && <span className="unit-sm">{s.unitSm}</span>}
                  </div>
                  <div className="stat__label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
      <div className="scroll-hint">
        <span className="bar" />
        <span>{t.scroll}</span>
      </div>
    </section>
  );
}
