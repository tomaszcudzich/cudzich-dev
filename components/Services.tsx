import { content, Lang } from '@/lib/content';

export default function Services({ lang }: { lang: Lang }) {
  const t = content[lang].services;

  return (
    <section className="section" id="uslugi">
      <div className="wrap">
        <div className="section__head reveal">
          <div className="section-tag">
            <span className="num">{t.tag}</span>
            <span className="line" />
          </div>
          <h2 className="section__title">{t.title}</h2>
          <p className="section__sub">{t.sub}</p>
        </div>

        <div className="services-grid">
          {t.items.map((svc, i) => (
            <article
              className="service reveal"
              key={svc.num}
              style={i > 0 ? { ['--reveal-delay' as string]: `${i * 100}ms` } : undefined}
            >
              <span className="service__num">{svc.num}</span>
              <h3 className="service__title">{svc.title}</h3>
              <p className="service__desc">{svc.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
