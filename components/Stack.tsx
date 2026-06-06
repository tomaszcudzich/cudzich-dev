import { content, Lang } from '@/lib/content';

export default function Stack({ lang }: { lang: Lang }) {
  const t = content[lang].stack;

  return (
    <section className="stack-section" id="stack">
      <div className="wrap">
        <div className="stack__head reveal">
          <h2 className="stack__title">{t.title}</h2>
          <span className="label">{t.label}</span>
        </div>
        <div className="stack__tags reveal" style={{ ['--reveal-delay' as string]: '80ms' }}>
          {t.items.map((item) => (
            <span className="tech" key={item}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
