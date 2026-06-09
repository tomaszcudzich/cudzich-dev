import Link from 'next/link';
import { content, Lang } from '@/lib/content';

export default function Projects({ lang }: { lang: Lang }) {
  const t = content[lang].projects;

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

        <div className="proj-grid">
          {t.items.map((project, i) => (
            <Link
              key={project.slug}
              href={`/projekty/${project.slug}`}
              className="proj-card reveal"
              style={{ ['--reveal-delay' as string]: `${i * 100}ms` }}
            >
              <div className="proj-card__thumb">
                {project.screenshots[0] ? (
                  <img src={project.screenshots[0]} alt={project.name} />
                ) : (
                  <div className="proj-card__ph">
                    <span className="proj-card__ph-name">{project.name}</span>
                  </div>
                )}
              </div>
              <div className="proj-card__body">
                <div className="proj-card__flag">
                  <span className="dot" />
                  <span>{project.flag}</span>
                </div>
                <h3 className="proj-card__name">{project.name}</h3>
                <p className="proj-card__desc">{project.desc}</p>
                <div className="pills">
                  {project.pills.map((p) => (
                    <span className="pill" key={p}>{p}</span>
                  ))}
                </div>
                <span className="proj-card__cta">
                  {t.viewProject} <span className="arrow">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
