import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tomasz Cudzich — Software Engineer',
  description: 'Buduję precyzyjne aplikacje webowe dla polskich przedsiębiorstw. Jednoosobowa firma B2B — pełna odpowiedzialność, bez pośredników.',
  openGraph: {
    title: 'Tomasz Cudzich — Software Engineer',
    description: 'Precyzyjne aplikacje webowe szyte na miarę.',
    url: 'https://cudzich.dev',
    siteName: 'Tomasz Cudzich',
    locale: 'pl_PL',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=DM+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
