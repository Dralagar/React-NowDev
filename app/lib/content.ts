// ============================================================
// REACT NOW DEV — CENTRAL CONTENT CONFIGURATION
// ============================================================

/**
 * Site-wide configuration
 */
export const site = {
  name: "React Now Dev",

  tagline:
    "Digital solutions for businesses, refugee-led organisations and enterprises across East Africa",

  description:
    "React Now Dev designs and builds modern digital experiences for businesses, refugee-led organisations, NGOs, startups and enterprises across East Africa.",

  location: "Nairobi, Kenya",

  regions: [
    "Kenya",
    "Uganda",
    "South Sudan",
    "East Africa",
  ],

  email: "hello@reactnow.dev",

  phone: "+254 706 255 611",

  linkedIn: "https://www.linkedin.com/in/dralagar-george",

  navigation: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Services",
      href: "/services",
    },
    {
      label: "Portfolio",
      href: "/portfolio",
    },
    {
      label: "Podcast",
      href: "/podcast",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],
} as const;


// ============================================================
// AUDIENCES
// ============================================================

export const audiences = [
  {
    slug: "businesses",

    title: "Businesses",

    body:
      "Websites, branding and digital growth solutions designed to help businesses establish credibility, reach customers and grow online.",

    shortDescription:
      "Digital products and growth solutions for ambitious businesses.",

    href: "/services",
  },

  {
    slug: "refugee-led-organisations",

    title: "Refugee-led Organisations",

    body:
      "Visibility, communication and impact-focused digital solutions that help refugee-led organisations tell their stories and strengthen their presence.",

    shortDescription:
      "Digital visibility and communication for organisations creating meaningful change.",

    href: "/services",
  },

  {
    slug: "ngos",

    title: "NGOs & Development Organisations",

    body:
      "Scalable digital platforms and communication tools designed around programmes, communities, partnerships and measurable impact.",

    shortDescription:
      "Reliable digital infrastructure for development and community organisations.",

    href: "/services",
  },

  {
    slug: "startups",

    title: "Startups & Enterprises",

    body:
      "Fast, flexible digital products that help new ventures launch confidently, validate ideas and build a foundation for growth.",

    shortDescription:
      "Launch-ready digital experiences built for speed and growth.",

    href: "/services",
  },
] as const;


// ============================================================
// SERVICES
// ============================================================

export const services = [
  {
    slug: "website-development",

    icon: "🎨",

    title: "Website Development",

    summary:
      "Modern, responsive websites built for credibility, performance, accessibility and long-term growth.",

    description:
      "We design and develop professional websites that communicate your organisation's value clearly and give your team a strong digital foundation.",

    features: [
      "Responsive web design",
      "Mobile-first development",
      "Next.js development",
      "Content management",
      "Performance optimisation",
      "Accessibility-focused implementation",
    ],

    href: "/services/website-development",
  },

  {
    slug: "seo",

    icon: "🔍",

    title: "SEO & AI Discovery",

    summary:
      "Better visibility online through search optimisation, structured content and AI-ready digital experiences.",

    description:
      "We help organisations become easier to discover through search engines and emerging AI-powered discovery experiences.",

    features: [
      "Technical SEO",
      "On-page optimisation",
      "Content structure",
      "Metadata optimisation",
      "Search visibility",
      "AI discovery readiness",
    ],

    href: "/services/seo",
  },

  {
    slug: "branding",

    icon: "🖌️",

    title: "Branding & Visual Identity",

    summary:
      "Strong visual identities that help organisations communicate consistently and professionally.",

    description:
      "From visual direction to digital assets, we create practical brand systems that organisations can actually use.",

    features: [
      "Visual identity",
      "Logo systems",
      "Colour systems",
      "Typography",
      "Social media assets",
      "Brand guidelines",
    ],

    href: "/services/branding",
  },

  {
    slug: "digital-strategy",

    icon: "🧭",

    title: "Digital Strategy",

    summary:
      "Clear digital roadmaps connecting technology, communication, audiences and organisational goals.",

    description:
      "We help teams understand what they need digitally, what should come first and how their digital ecosystem can evolve.",

    features: [
      "Digital audits",
      "Roadmaps",
      "Content strategy",
      "Platform planning",
      "Audience mapping",
      "Digital transformation planning",
    ],

    href: "/services/digital-strategy",
  },

  {
    slug: "training-capacity-building",

    icon: "🎓",

    title: "Training & Capacity Building",

    summary:
      "Practical training that enables teams to confidently manage and grow their digital presence.",

    description:
      "We do not believe your organisation should depend on a developer forever. We train your team to understand, manage and improve the systems we build.",

    features: [
      "Website management",
      "Digital literacy",
      "Content management",
      "SEO basics",
      "Digital communication",
      "Team capacity building",
    ],

    href: "/services/training-capacity-building",
  },

  {
    slug: "digital-products",

    icon: "🛠️",

    title: "Digital Products & Platforms",

    summary:
      "Custom digital platforms and web applications designed around real organisational and business needs.",

    description:
      "For organisations that need more than a website, we design and build scalable digital products that support workflows, communities and services.",

    features: [
      "Web applications",
      "Custom platforms",
      "Dashboards",
      "Online portals",
      "Workflow systems",
      "API integrations",
    ],

    href: "/services/digital-products",
  },
] as const;


// ============================================================
// CASE STUDIES
// ============================================================

export const caseStudies = [
  {
    slug: "youth-voices-community",

    client: "Youth Voices Community",

    category: "Community Organisation",

    summary:
      "Digital transformation and visibility work supporting a refugee-led organisation's communication, programmes and online presence.",

    status: "Completed",

    year: "2026",

    services: [
      "Website Development",
      "Digital Strategy",
      "Brand Communication",
    ],

    href: "/portfolio/youth-voices-community",
  },

  {
    slug: "react-now-academy",

    client: "React Now FC Academy",

    category: "Sports & Youth Development",

    summary:
      "A grassroots football digital platform connecting youth development, sports, mentorship and community engagement.",

    status: "Ongoing",

    year: "2026",

    services: [
      "Website Development",
      "Digital Communication",
      "Youth Engagement",
    ],

    href: "/portfolio/react-now-academy",
  },
] as const;


// ============================================================
// TEAM
// ============================================================

export const team = [
  {
    slug: "george-dralagar",

    name: "George Dralagar",

    role: "Lead Consultant",

    initials: "GD",

    bio:
      "Director of Programs at Youth Voices Community and a professional web developer with demonstrated experience delivering websites for refugee-led and community-based organisations in Kenya — with particular expertise in responsive design, modern frontend architecture, SEO, and the humanitarian and development sector across East Africa. Leads client relationships, proposals, project management, and content and communications strategy.",
  },

  {
    slug: "humphrey-omondi",

    name: "Humphrey Omondi",

    role: "Technical Lead",

    initials: "HO",

    bio:
      "Web developer with hands-on experience building and deploying websites for organisations in Kenya. Leads the technical build for every engagement — platform architecture, theme development and configuration, SEO/GEO implementation, and hosting setup and management.",
  },
] as const;


// ============================================================
// PRICING
// ============================================================
// NOTE: figures below are placeholders — update to match your
// real rates before publishing this page.

export const pricing = [
  {
    slug: "starter",

    name: "Starter Site",

    price: "From KSh 45,000",

    cadence: "one-time",

    bestFor: "A small organisation that needs an essential, professional online presence.",

    features: [
      "Up to 5 pages",
      "Mobile-first responsive design",
      "Basic on-page SEO",
      "1 round of revisions",
      "Hosting & domain setup assistance",
    ],

    href: "/contact",

    highlighted: false,
  },

  {
    slug: "growth",

    name: "Growth Site",

    price: "From KSh 85,000",

    cadence: "one-time",

    bestFor: "Organisations that need more depth, content, and discoverability from day one.",

    features: [
      "Up to 10 pages",
      "SEO & GEO optimisation",
      "Content drafting support",
      "Admin training session",
      "2 rounds of revisions",
      "30 days post-launch support",
    ],

    href: "/contact",

    highlighted: true,
  },

  {
    slug: "custom",

    name: "Custom / Multi-Org Platform",

    price: "Custom quote",

    cadence: "project-based",

    bestFor: "Programmes running multi-organisation rollouts or needing custom-built platforms.",

    features: [
      "Custom design & development",
      "Multi-organisation rollout",
      "Digital product / platform work",
      "Dedicated project management",
      "Ongoing support retainer available",
    ],

    href: "/contact",

    highlighted: false,
  },
] as const;

export const addOns = [
  {
    title: "Hosting & domain management",
    body: "Locally-hosted infrastructure with SSL, backups, and renewal handled for you — billed annually.",
  },
  {
    title: "Ongoing support retainer",
    body: "A monthly retainer for content updates, technical support, and performance monitoring after launch.",
  },
  {
    title: "Extra training sessions",
    body: "Additional admin training or onboarding sessions for new team members, booked as needed.",
  },
] as const;


// ============================================================
// FAQ
// ============================================================

export const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "Most single-organisation websites take 3–6 weeks from kick-off to launch, depending on how quickly content and feedback come back to us. Multi-organisation or custom platform builds take longer and are scoped individually.",
  },
  {
    question: "Who owns the website, hosting, and domain?",
    answer:
      "You do. Hosting accounts and domains are registered in your organisation's own name from day one — there's no lock-in to us as a vendor.",
  },
  {
    question: "Do you train our team to manage the site after launch?",
    answer:
      "Yes. Every engagement includes admin training, written or recorded materials, and a follow-up support call so your team can update content independently.",
  },
  {
    question: "What platforms do you build on?",
    answer:
      "We build on WordPress for most organisation websites, and Next.js/React for custom digital products and platforms — we'll recommend the right fit during discovery.",
  },
  {
    question: "How does payment work?",
    answer:
      "Projects are typically split into milestones — a deposit to begin, a payment at design sign-off, and a final payment at launch. Custom platforms may follow a different schedule agreed up front.",
  },
  {
    question: "Can you work with organisations outside Kenya?",
    answer:
      "Yes — we currently serve organisations across Kenya and Uganda, and are happy to discuss projects across East Africa more broadly.",
  },
] as const;


// ============================================================
// WHY REACT NOW DEV
// ============================================================

export const whyUs = [
  {
    slug: "human-centred",

    title: "Human-Centred",

    body:
      "Designed for real people, real teams and real-world organisational needs.",

    icon: "users",
  },

  {
    slug: "future-ready",

    title: "Future Ready",

    body:
      "Built with modern technologies and flexible foundations that can evolve as your organisation grows.",

    icon: "sparkles",
  },

  {
    slug: "sustainable",

    title: "Sustainable",

    body:
      "We build systems that your team can understand, manage and maintain long after launch.",

    icon: "leaf",
  },

  {
    slug: "east-africa",

    title: "East Africa Focused",

    body:
      "We understand the organisations, communities and digital realities shaping East Africa.",

    icon: "globe",
  },

  {
    slug: "impact-driven",

    title: "Impact Driven",

    body:
      "Technology is only useful when it helps people, organisations and communities achieve something meaningful.",

    icon: "target",
  },

  {
    slug: "collaborative",

    title: "Collaborative",

    body:
      "We work alongside your team rather than disappearing behind a technical process.",

    icon: "handshake",
  },
] as const;


// ============================================================
// CALL TO ACTION
// ============================================================

export const cta = {
  title:
    "Let's build a digital presence that works as hard as your mission.",

  description:
    "Tell us about your organisation and we'll put together a clear scope and quote.",

  primary: {
    label: "Get in touch",
    href: "/contact",
  },

  secondary: {
    label: "See pricing",
    href: "/pricing",
  },
} as const;


// ============================================================
// SOCIAL / CONTACT
// ============================================================

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "#",
  },
  {
    label: "Instagram",
    href: "#",
  },
  {
    label: "Facebook",
    href: "#",
  },
  {
    label: "TikTok",
    href: "#",
  },
] as const;


// ============================================================
// PODCAST
// ============================================================
// NOTE: episode links/platform URLs below are placeholders —
// swap in your real show links once the podcast is live.

export const podcast = {
  name: "React Now Radio",

  tagline: "Conversations on building digital tools that outlast the project.",

  description:
    "A short-form podcast from React Now Dev on websites, SEO, and digital strategy for NGOs, refugee-led organisations, and small businesses across East Africa — plus the occasional guest from the organisations we've worked with.",

  platforms: [
    { label: "Spotify", href: "#" },
    { label: "Apple Podcasts", href: "#" },
    { label: "YouTube", href: "#" },
    { label: "Google Podcasts", href: "#" },
  ],
} as const;

export const podcastEpisodes = [
  {
    slug: "why-your-ngo-needs-a-website",
    number: 1,
    title: "Why Your NGO Needs a Website (Even a Simple One)",
    guest: "George Dralagar",
    summary:
      "What actually changes for a small organisation once it has a professional web presence — funders, credibility, and being found.",
    duration: "24 min",
    date: "2026-02-10",
    href: "#",
  },
  {
    slug: "seo-for-organisations-that-dont-sell-anything",
    number: 2,
    title: "SEO for Organisations That Don't Sell Anything",
    guest: "Humphrey Omondi",
    summary:
      "Search optimisation isn't just for e-commerce — how programme-driven organisations get discovered by the people looking for them.",
    duration: "31 min",
    date: "2026-03-03",
    href: "#",
  },
  {
    slug: "handover-that-actually-works",
    number: 3,
    title: "Handover That Actually Works",
    guest: "George Dralagar",
    summary:
      "Why most website handovers fail, and what we changed about our training process after watching it happen.",
    duration: "27 min",
    date: "2026-04-14",
    href: "#",
  },
  {
    slug: "building-for-refugee-led-organisations",
    number: 4,
    title: "Building for Refugee-Led Organisations",
    guest: "Refugee Brotherhood (guest episode)",
    summary:
      "A conversation with a partner organisation about what they needed from their site that most agencies get wrong.",
    duration: "35 min",
    date: "2026-05-19",
    href: "#",
  },
] as const;


// ============================================================
// FOOTER
// ============================================================

export const footer = {
  description:
    "Digital solutions for businesses, refugee-led organisations and enterprises across East Africa.",

  columns: [
    {
      title: "Company",

      links: [
        {
          label: "About",
          href: "/about",
        },
        {
          label: "Portfolio",
          href: "/portfolio",
        },
        {
          label: "Podcast",
          href: "/podcast",
        },
        {
          label: "Pricing",
          href: "/pricing",
        },
        {
          label: "Contact",
          href: "/contact",
        },
      ],
    },

    {
      title: "Services",

      links: [
        {
          label: "Website Development",
          href: "/services/website-development",
        },
        {
          label: "SEO",
          href: "/services/seo",
        },
        {
          label: "Branding",
          href: "/services/branding",
        },
        {
          label: "Digital Strategy",
          href: "/services/digital-strategy",
        },
      ],
    },

    {
      title: "Support",

      links: [
        {
          label: "Training",
          href: "/services/training-capacity-building",
        },
        {
          label: "Digital Products",
          href: "/services/digital-products",
        },
        {
          label: "FAQs",
          href: "/faq",
        },
      ],
    },
  ],
} as const;