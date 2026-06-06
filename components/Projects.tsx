import { content, Lang } from '@/lib/content';

export default function Projects({ lang }: { lang: Lang }) {
  const t = content[lang].projects;
  const project = t.items[0];

  return (
    <section className="section" id="projekty">
      <div className="wrap">
        <div className="section__head reveal">
          <div className="section-tag">
            <span className="num">{t.tag}</span>
            <span className="line" />
          </div>
          <h2 className="section__title">{t.title}</h2>
        </div>

        <article className="project reveal">
          <div className="project__main">
            <div className="project__flag">
              <span className="dot" />
              <span>{project.flag}</span>
            </div>
            <h3 className="project__name">{project.name}</h3>
            <p className="project__desc">{project.desc}</p>
            <div className="pills">
              {project.pills.map((p) => (
                <span className="pill" key={p}>{p}</span>
              ))}
            </div>
            <a className="btn btn--ghost" href="#kontakt">
              <span>{project.link}</span>
              <span className="arrow">→</span>
            </a>
          </div>
          <div className="project__side">
            {project.stats.map((s) => (
              <div className="project__stat" key={s.label}>
                <span className="n">{s.num}</span>
                <span className="l">{s.label}</span>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
