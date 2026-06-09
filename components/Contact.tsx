'use client';

import { useState, useRef, useEffect } from 'react';
import { content, Lang } from '@/lib/content';

// Po rejestracji na formspree.io wstaw swój form ID:
const FORMSPREE_ID = 'mzdqvpoz';

interface ContactProps {
  lang: Lang;
}

export default function Contact({ lang }: ContactProps) {
  const t = content[lang].contact;
  const f = t.form;

  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const [focused, setFocused] = useState<Record<string, boolean>>({});

  const handleFocus = (name: string) => setFocused((s) => ({ ...s, [name]: true }));
  const handleBlur = (name: string, value: string) => {
    if (!value) setFocused((s) => ({ ...s, [name]: false }));
  };

  useEffect(() => {
    if (status === 'sent') formRef.current?.classList.add('is-visible');
  }, [status]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (FORMSPREE_ID === 'TODO_REPLACE_WITH_FORMSPREE_ID') {
      setStatus('sent');
      return;
    }
    const data = new FormData(e.currentTarget);
    setStatus('sending');
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('sent');
        formRef.current?.reset();
        setFocused({});
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <section className="section" id="kontakt">
      <div className="wrap contact">
        <div className="reveal">
          <h2 className="contact__title">
            <span>{t.title1} </span>
            <em>{t.title2}</em>
          </h2>
          <p className="contact__desc">{t.desc}</p>
          <div className="contact__links">
            {t.links.map((l) => (
              <a className="contact__link" href={l.href} key={l.key} target={l.href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer">
                <span className="ck">{l.key}</span>
                <span className="cv">{l.value}</span>
                <span className="arrow">→</span>
              </a>
            ))}
          </div>
        </div>

        <form
          ref={formRef}
          className={`form reveal${status === 'sent' ? ' sent' : ''}`}
          style={{ ['--reveal-delay' as string]: '120ms' }}
          onSubmit={handleSubmit}
          noValidate
        >
          {(['name', 'email', 'message'] as const).map((field) => {
            const isTextarea = field === 'message';
            const label = field === 'name' ? f.name : field === 'email' ? f.email : f.msg;
            const placeholder = field === 'name' ? f.namePh : field === 'email' ? f.emailPh : f.msgPh;
            const id = `f-${field}`;
            return (
              <div className={`field${focused[field] ? ' focused' : ''}`} key={field}>
                <label htmlFor={id}>{label}</label>
                {isTextarea ? (
                  <textarea
                    id={id}
                    name={field}
                    required
                    placeholder={placeholder}
                    onFocus={() => handleFocus(field)}
                    onBlur={(e) => handleBlur(field, e.target.value)}
                  />
                ) : (
                  <input
                    id={id}
                    type={field === 'email' ? 'email' : 'text'}
                    name={field}
                    required
                    placeholder={placeholder}
                    onFocus={() => handleFocus(field)}
                    onBlur={(e) => handleBlur(field, e.target.value)}
                  />
                )}
              </div>
            );
          })}

          <div className="form__actions">
            <button className="btn btn--gold" type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? '...' : f.send}
            </button>
            <span className="form__note" />
            <span className="form__success">
              <span className="dot" />
              <span>{f.success}</span>
            </span>
            {status === 'error' && (
              <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: '#e05a5a' }}>
                {f.error}
              </span>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
