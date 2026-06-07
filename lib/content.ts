export type Lang = 'pl' | 'en';

export const content = {
  pl: {
    meta: {
      title: 'Tomasz Cudzich — Software Engineer',
      description: 'Projektuję i wdrażam precyzyjne aplikacje webowe. Rozmawiasz bezpośrednio z osobą, która pisze kod.',
    },
    nav: {
      services: 'Usługi',
      work: 'Projekty',
      about: 'O mnie',
      stack: 'Stack',
      contact: 'Kontakt',
    },
    hero: {
      tagline: 'Full-stack Software Engineer',
      title1: 'Precyzyjne aplikacje webowe',
      title2: 'szyte na miarę',
      desc: 'Projektuję i wdrażam systemy webowe dla firm — od narzędzi wewnętrznych po strony, które sprzedają. Jeden rozmówca, który rozumie zarówno technikę, jak i cel biznesowy projektu.',
      cta1: 'Porozmawiajmy o projekcie',
      cta2: 'Zobacz realizacje',
      live: 'Live na produkcji',
      scroll: 'Przewiń',
    },
    stats: [
      { num: 'Full',   unitSm: 'stack', label: 'Frontend · Backend · DB' },
      { num: 'Custom', unitSm: '',      label: 'Każdy projekt od podstaw' },
      { num: 'Deploy', unitSm: '',      label: 'Od projektu do produkcji' },
      { num: '24',     unitSm: 'h',     label: 'Czas odpowiedzi' },
    ],
    services: {
      tag: '01 — 03',
      title: 'Co robię',
      sub: 'Trzy obszary — jeden standard. Prowadzę każdy projekt od pierwszej rozmowy do wdrożenia na produkcję.',
      items: [
        {
          num: '01',
          title: 'Aplikacje webowe dla biznesu',
          desc: 'Narzędzia wewnętrzne i systemy operacyjne pisane pod konkretne procesy Twojej firmy. Interfejs projektowany dla Twoich ludzi, logika dopasowana do tego, jak naprawdę działacie.',
        },
        {
          num: '02',
          title: 'Strony i wizytówki firmowe',
          desc: 'Strony budowane od podstaw — szybkie, czytelne i zaprojektowane tak, żeby pracowały na Twoją markę przez lata. Żadnych gotowych szablonów, żadnych kompromisów.',
        },
        {
          num: '03',
          title: 'Wsparcie i podwykonawstwo',
          desc: 'Potrzebujesz sprawdzonego inżyniera do swojego projektu? Piszę solidny, czytelny kod i dotrzymuję terminów. Działa jak rozszerzenie Twojego zespołu — bez zbędnych formalności.',
        },
      ],
    },
    projects: {
      tag: 'Realizacje',
      title: 'Wdrożone i działające',
      items: [
        {
          flag: 'Live · Produkcja · Maj 2026',
          name: 'Magazyn Opon',
          desc: 'System do zarządzania flotą 120 pojazdów dla zakładu mięsnego. Pełna kontrola nad oponami, przeglądami i kosztami eksploatacji — w jednym miejscu, dostępna z każdego urządzenia. Działa produkcyjnie od maja 2026.',
          pills: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS'],
          link: 'Zapytaj o szczegóły wdrożenia',
          stats: [
            { num: '120', label: 'Pojazdów w systemie' },
            { num: '0',   label: 'Przestojów od startu' },
          ],
        },
      ],
    },
    about: {
      tag: 'O mnie',
      title1: 'Jedna osoba.',
      title2: 'Pełna odpowiedzialność.',
      p1: 'Każdy projekt, który przyjmuję, prowadzę osobiście — od pierwszej rozmowy przez projekt i kod, aż po wdrożenie. Jeden rozmówca z pełną odpowiedzialnością za wynik.',
      p2: 'Pracuję z nowoczesnym stackiem i korzystam z najlepszych dostępnych narzędzi — w tym AI. Nie po to, żeby ciąć koszty, ale żeby dostarczać szybciej bez kompromisów jakościowych.',
      p3: 'Traktuję każdy projekt jak rzemiosło: logika ma być prosta, kod czytelny, a system ma działać bez problemów przez lata. Jakość nie jest opcją.',
      facts: [
        { key: 'LinkedIn', value: '/in/tomasz-cudzich', href: 'https://linkedin.com/in/tomasz-cudzich' },
        { key: 'GitHub',   value: '@tcudzich',          href: 'https://github.com/tcudzich' },
      ],
    },
    stack: {
      title: 'Narzędzia, którym ufam',
      label: 'Stack technologiczny',
      items: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'Prisma', 'Vercel', 'Claude AI'],
    },
    contact: {
      title1: 'Zacznijmy',
      title2: 'rozmowę.',
      desc: 'Masz pomysł na narzędzie, system do przebudowania albo stronę do dowiezienia? Napisz kilka zdań — odpowiem tego samego dnia.',
      links: [
        { key: 'Email',    value: 'kontakt@cudzich.dev', href: 'mailto:kontakt@cudzich.dev' },
        { key: 'LinkedIn', value: '/in/tomasz-cudzich',  href: 'https://linkedin.com/in/tomasz-cudzich' },
      ],
      form: {
        name:    'Imię i nazwisko',
        namePh:  'Jan Kowalski',
        email:   'Email',
        emailPh: 'jan@firma.pl',
        msg:     'Wiadomość',
        msgPh:   'Kilka zdań o projekcie...',
        send:    'Wyślij wiadomość',
        success: 'Dziękuję — odezwę się wkrótce',
        error:   'Coś poszło nie tak — spróbuj ponownie.',
      },
    },
    footer: {
      copy: '© 2026 Tomasz Cudzich',
      loc: 'Software Engineer',
    },
  },

  en: {
    meta: {
      title: 'Tomasz Cudzich — Software Engineer',
      description: 'I design and build precise web applications. You talk directly to the person writing the code.',
    },
    nav: {
      services: 'Services',
      work: 'Work',
      about: 'About',
      stack: 'Stack',
      contact: 'Contact',
    },
    hero: {
      tagline: 'Full-stack Software Engineer',
      title1: 'Precise web applications,',
      title2: 'built to measure',
      desc: 'I design and build web systems for companies — from internal tools to sites that convert. One point of contact who understands both the technology and the goal behind the project.',
      cta1: "Let's talk about your project",
      cta2: 'See the work',
      live: 'Live in production',
      scroll: 'Scroll',
    },
    stats: [
      { num: 'Full',   unitSm: 'stack', label: 'Frontend · Backend · DB' },
      { num: 'Custom', unitSm: '',      label: 'Every project from scratch' },
      { num: 'Deploy', unitSm: '',      label: 'Concept to production' },
      { num: '24',     unitSm: 'h',     label: 'Response time' },
    ],
    services: {
      tag: '01 — 03',
      title: 'What I do',
      sub: 'Three areas — one standard. I run every project from the first conversation to production launch.',
      items: [
        {
          num: '01',
          title: 'Web applications for business',
          desc: 'Internal tools and operational systems built around the way your company actually works. Logic written for your processes, interfaces designed for your people.',
        },
        {
          num: '02',
          title: 'Company websites',
          desc: 'Sites built from scratch — fast, clear and designed to work for your brand for years. No page builders, no templates, no shortcuts.',
        },
        {
          num: '03',
          title: 'Engineering support',
          desc: 'Need a reliable engineer for your project? I write clean, readable code and meet deadlines. Works like an extension of your team — without the overhead.',
        },
      ],
    },
    projects: {
      tag: 'Selected work',
      title: 'Deployed and running',
      items: [
        {
          flag: 'Live · Production · May 2026',
          name: 'Magazyn Opon',
          desc: 'A fleet management system for 120 vehicles at a meat-processing plant. Full oversight of tyres, inspections and running costs — in one place, accessible from any device. Running in production since May 2026.',
          pills: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS'],
          link: 'Ask about the deployment',
          stats: [
            { num: '120', label: 'Vehicles in system' },
            { num: '0',   label: 'Downtime since launch' },
          ],
        },
      ],
    },
    about: {
      tag: 'About',
      title1: 'One person.',
      title2: 'Full ownership.',
      p1: 'Every project I take on, I run personally — from the first conversation through design and code to deployment. One point of contact with full accountability for the outcome.',
      p2: 'I work with a modern stack and use the best tools available — including AI. Not to cut corners, but to deliver faster without sacrificing quality.',
      p3: 'I treat every project as craft: simple logic, readable code, a system that runs without issues for years. Quality is not optional.',
      facts: [
        { key: 'LinkedIn', value: '/in/tomasz-cudzich', href: 'https://linkedin.com/in/tomasz-cudzich' },
        { key: 'GitHub',   value: '@tcudzich',          href: 'https://github.com/tcudzich' },
      ],
    },
    stack: {
      title: 'Tools I trust',
      label: 'Technology stack',
      items: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'Prisma', 'Vercel', 'Claude AI'],
    },
    contact: {
      title1: "Let's start",
      title2: 'a conversation.',
      desc: 'Got an idea for a tool, a system to rebuild, or a site to ship? Drop me a few lines — I reply the same day.',
      links: [
        { key: 'Email',    value: 'kontakt@cudzich.dev', href: 'mailto:kontakt@cudzich.dev' },
        { key: 'LinkedIn', value: '/in/tomasz-cudzich',  href: 'https://linkedin.com/in/tomasz-cudzich' },
      ],
      form: {
        name:    'Full name',
        namePh:  'John Smith',
        email:   'Email',
        emailPh: 'john@company.com',
        msg:     'Message',
        msgPh:   'A few lines about the project...',
        send:    'Send message',
        success: 'Thank you — I\'ll be in touch soon',
        error:   'Something went wrong — please try again.',
      },
    },
    footer: {
      copy: '© 2026 Tomasz Cudzich',
      loc: 'Software Engineer',
    },
  },
} as const;
