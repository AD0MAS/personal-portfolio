import type { Language } from '../constants/languages'
import type { Translations } from '../types/translations'

/** Full translation dictionary for the site, keyed by language. */
export const translations: Record<Language, Translations> = {
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
      titleLine2: 'Software Developer',
      subtitle: 'Building modern web applications.',
      viewProjects: 'View Projects',
      contactMe: 'Contact Me',
    },
    about: {
      heading: 'About',
      paragraph1:
        "I'm a Software Systems student focused on building useful, well-designed software. With a foundation in programming, algorithms, databases, and software engineering, I build web applications across the stack, from the user interface to the database, using React, Next.js, TypeScript, and PostgreSQL — learning by building real projects from scratch.",
      paragraph2:
        "What draws me to programming is the combination of logic and craft — solving a problem is only half the job; building something people can actually use well is the other half. I'm driven by continuous improvement and interested in the intersection of technology, products, and business.",
      cta: 'Currently looking for internship opportunities where I can learn, contribute, and build something meaningful.',
    },
    skills: {
      heading: 'Skills',
    },
    experience: {
      heading: 'Experience',
      entries: {
        tutor: {
          role: 'Mathematics Tutor',
          period: '2025 - Present',
          org: 'Self-employed',
          description: 'Teaching mathematics to 15 students, grades 5-12.',
        },
        lifeguard: {
          role: 'Lifeguard',
          period: 'Summer 2025',
          org: 'Cedar Point / Work and Travel USA',
          description:
            'Monitored guest safety in a high-traffic aquatic environment; CPR and AED certified.',
        },
        technician: {
          role: 'Technician Assistant',
          period: 'Summers 2021-2024',
          org: 'TPS - Technological Service Solutions',
          description:
            'Assisted with installation and configuration of security systems and technical infrastructure.',
        },
      },
    },
    projects: {
      heading: 'Projects',
      entries: [
        {
          title: 'GoHybrid',
          description:
            'A full-stack training platform for hybrid athletes with a structured workout builder, weekly planning, a focused workout mode, progress analytics, and user authentication.',
          tech: [
            'Next.js',
            'TypeScript',
            'PostgreSQL',
            'Supabase',
            'Tailwind CSS',
          ],
          githubUrl: 'https://github.com/AD0MAS/gohybrid',
          liveUrl: 'https://gohybrid.vercel.app',
        },
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
      titleLine2: 'Programinės įrangos kūrėjas',
      subtitle: 'Kuriu modernias web aplikacijas.',
      viewProjects: 'Mano projektai',
      contactMe: 'Susisiekti',
    },
    about: {
      heading: 'Apie mane',
      paragraph1:
        'Esu Programų sistemų studentas, siekiantis kurti naudingą ir gerai apgalvotą programinę įrangą. Turėdamas tvirtus programavimo, algoritmų, duomenų bazių ir programinės įrangos inžinerijos pagrindus, kuriu web aplikacijas nuo vartotojo sąsajos iki duomenų bazės, naudodamas React, Next.js, TypeScript ir PostgreSQL, ir mokausi kurdamas realius projektus nuo nulio.',
      paragraph2:
        'Programavime mane labiausiai žavi logikos ir kūrybos derinys: išspręsti problemą yra tik pusė darbo, o sukurti tai, kuo žmonėms būtų patogu naudotis — kita pusė. Mane motyvuoja nuolatinis tobulėjimas, taip pat domina tai, kaip technologijos ir produktai kuria vertę verslui.',
      cta: 'Šiuo metu ieškau praktikos galimybių, kur galėčiau mokytis, prisidėti prie komandos ir kurti vertę teikiančius sprendimus.',
    },
    skills: {
      heading: 'Įgūdžiai',
    },
    experience: {
      heading: 'Patirtis',
      entries: {
        tutor: {
          role: 'Matematikos korepetitorius',
          period: '2025 - dabar',
          org: 'Individuali veikla',
          description: 'Mokau matematiką 15 moksleivių (5-12 klasės).',
        },
        lifeguard: {
          role: 'Gelbėtojas',
          period: '2025 m. vasara',
          org: 'Cedar Point / Work and Travel USA',
          description:
            'Užtikrinau lankytojų saugumą didelio srauto vandens parke; įgijau CPR ir AED sertifikatus.',
        },
        technician: {
          role: 'Technikas asistentas',
          period: '2021-2024 m. vasaros',
          org: 'TPS - Technologinių paslaugų sprendimai',
          description:
            'Padėjau diegti ir konfigūruoti saugos sistemas bei techninę infrastruktūrą.',
        },
      },
    },
    projects: {
      heading: 'Projektai',
      entries: [
        {
          title: 'GoHybrid',
          description:
            'Full-stack treniruočių platforma hibridiniams sportininkams su struktūrizuotu treniruočių konstruktoriumi, savaitės planavimu, treniruotės atlikimo režimu, progreso analitika ir naudotojų paskyromis.',
          tech: [
            'Next.js',
            'TypeScript',
            'PostgreSQL',
            'Supabase',
            'Tailwind CSS',
          ],
          githubUrl: 'https://github.com/AD0MAS/gohybrid',
          liveUrl: 'https://gohybrid.vercel.app',
        },
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
