import { content, Lang } from '@/lib/content';

export default function Footer({ lang }: { lang: Lang }) {
  const t = content[lang].footer;

  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <span className="footer__c">{t.copy}</span>
        <span className="footer__mark">
          <span className="footer__diamond"><span>TC</span></span>
        </span>
        <span className="footer__c">{t.loc}</span>
      </div>
    </footer>
  );
}
