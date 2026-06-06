import { content, Lang } from '@/lib/content';

export default function About({ lang }: { lang: Lang }) {
  const t = content[lang].about;

  return (
    <section className="section" id="o-mnie">
      <div className="wrap">
        <div className="about-single reveal">
          <div className="section-tag">
            <span className="num">{t.tag}</span>
            <span className="line" />
          </div>
          <h2 className="about__title">
            <span>{t.title1}</span>{' '}
            <em>{t.title2}</em>
          </h2>
          <div className="about__copy">
            <p dangerouslySetInnerHTML={{ __html: t.p1 }} />
            <p>{t.p2}</p>
            <p>{t.p3}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
