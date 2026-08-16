import type { Translations } from '../types/translations'

/** Full translation dictionary for the site, keyed by language. */
export const translations: Record<'en' | 'lt', Translations> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      experience: 'Experience',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hi, I'm Adomas Pakalniškis.",
      titleLine1: 'Software Systems Student',
      titleLine2: 'Frontend Developer',
      subtitle: 'Building modern web applications.',
      viewProjects: 'View Projects',
      contactMe: 'Contact Me',
    },
    about: {
      heading: 'About',
      paragraph1:
        "I'm a Software Systems student focused on building useful, well-designed software. With a foundation in programming, algorithms, databases, and software engineering, I'm currently exploring modern web development through JavaScript, TypeScript, and React — learning by building real projects from scratch.",
      paragraph2:
        "What draws me to programming is the combination of logic and craft — solving a problem is only half the job; building something people can actually use well is the other half. I'm driven by continuous improvement and interested in the intersection of technology, products, and business.",
      cta: 'Currently looking for internship opportunities where I can learn, contribute, and build something meaningful.',
    },
    skills: {
      heading: 'Skills',
    },
    experience: {
      heading: 'Experience',
      entries: [
        {
          role: 'Mathematics Tutor',
          period: '2025 - Present',
          org: 'Self-employed',
          description: 'Teaching mathematics to 15 students, grades 5-12.',
        },
        {
          role: 'Lifeguard',
          period: 'Summer 2025',
          org: 'Cedar Point / Work and Travel USA',
          description:
            'Monitored guest safety in a high-traffic aquatic environment; CPR and AED certified.',
        },
        {
          role: 'Technician Assistant',
          period: 'Summers 2021-2024',
          org: 'TPS - Technological Service Solutions',
          description:
            'Assisted with installation and configuration of security systems and technical infrastructure.',
        },
      ],
    },
    projects: {
      heading: 'Projects',
      entries: [
        {
          title: 'Atidelioju.lt',
          description:
            'A full CRUD task management app with checklist sub-items, live overdue detection, category filtering, dark mode, and full responsiveness (desktop/tablet/mobile).',
          tech: ['React', 'TypeScript', 'Vite'],
          githubUrl: 'https://github.com/AD0MAS/atidelioju-lt',
          liveUrl: 'https://atidelioju-lt.vercel.app',
        },
      ],
    },
    contact: {
      heading: 'Contact',
      subtitle:
        'Currently looking for internship opportunities — feel free to reach out.',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      copyEmail: 'Copy Email',
      copied: 'Copied!',
    },
    footer: {
      builtWith: 'Built with React + TypeScript + Tailwind',
    },
  },
  lt: {
    nav: {
      home: 'Pradžia',
      about: 'Apie mane',
      skills: 'Įgūdžiai',
      projects: 'Projektai',
      experience: 'Patirtis',
      contact: 'Kontaktai',
    },
    hero: {
      greeting: 'Sveiki, aš Adomas Pakalniškis.',
      titleLine1: 'Programų sistemų studentas',
      titleLine2: 'Frontend programuotojas',
      subtitle: 'Kuriu modernias web aplikacijas.',
      viewProjects: 'Mano projektai',
      contactMe: 'Susisiekti',
    },
    about: {
      heading: 'Apie mane',
      paragraph1:
        'Esu Programų sistemų studentas, siekiantis kurti naudingą ir gerai apgalvotą programinę įrangą. Turėdamas tvirtus programavimo, algoritmų, duomenų bazių ir programinės įrangos inžinerijos pagrindus, šiuo metu gilinuosi į modernų web programavimą (JavaScript, TypeScript, React) ir mokausi kurdamas realius projektus nuo nulio.',
      paragraph2:
        'Programavime mane labiausiai žavi logikos ir kūrybos derinys: išspręsti problemą yra tik pusė darbo, o sukurti tai, kuo žmonėms būtų patogu naudotis — kita pusė. Mane motyvuoja nuolatinis tobulėjimas, taip pat domina tai, kaip technologijos ir produktai kuria vertę verslui.',
      cta: 'Šiuo metu ieškau praktikos galimybių, kur galėčiau mokytis, prisidėti prie komandos ir kurti vertę teikiančius sprendimus.',
    },
    skills: {
      heading: 'Įgūdžiai',
    },
    experience: {
      heading: 'Patirtis',
      entries: [
        {
          role: 'Matematikos korepetitorius',
          period: '2025 - dabar',
          org: 'Individuali veikla',
          description: 'Mokau matematiką 15 moksleivių (5-12 klasės).',
        },
        {
          role: 'Gelbėtojas',
          period: '2025 m. vasara',
          org: 'Cedar Point / Work and Travel USA',
          description:
            'Užtikrinau lankytojų saugumą didelio srauto vandens parke; įgijau CPR ir AED sertifikatus.',
        },
        {
          role: 'Technikas asistentas',
          period: '2021-2024 m. vasaros',
          org: 'TPS - Technologinių paslaugų sprendimai',
          description:
            'Padėjau diegti ir konfigūruoti saugos sistemas bei techninę infrastruktūrą.',
        },
      ],
    },
    projects: {
      heading: 'Projektai',
      entries: [
        {
          title: 'Atidelioju.lt',
          description:
            'Pilna CRUD užduočių valdymo aplikacija su sub-užduočių sąrašais, vėluojančių užduočių sekimu realiu laiku, kategorijų filtravimu, tamsiuoju režimu ir pilnu pritaikymu mobiliesiems įrenginiams.',
          tech: ['React', 'TypeScript', 'Vite'],
          githubUrl: 'https://github.com/AD0MAS/atidelioju-lt',
          liveUrl: 'https://atidelioju-lt.vercel.app',
        },
      ],
    },
    contact: {
      heading: 'Kontaktai',
      subtitle: 'Šiuo metu ieškau praktikos galimybių — drąsiai susisiekite.',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      copyEmail: 'Kopijuoti el. paštą',
      copied: 'Nukopijuota!',
    },
    footer: {
      builtWith: 'Sukurta su React + TypeScript + Tailwind',
    },
  },
}
