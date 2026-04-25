/**
 * site.config.ts — Medcom AS
 * Webbyrå fokusert på nettsider og AIO (AI-optimalisert SEO) for bedrifter.
 */

export interface SiteConfig {
  company: {
    name: string;
    wordmark_style: string;
    tag?: string;
    phone: string;
    email: string;
    address?: string;
    org_no?: string;
    industry: string;
  };
  meta: {
    title: string;
    description: string;
    og_image?: string;
  };
  hero: {
    eyebrow?: string;
    headline: string;
    subhead: string;
    primary_cta: { label: string; href: string };
    secondary_cta?: { label: string; href: string };
    weird_thing_id: string;
    weird_thing_props?: Record<string, unknown>;
  };
  services: Array<{
    n: string;
    title: string;
    lead: string;
    included: string[];
    duration?: string;
    image?: string;
  }>;
  pricing?: {
    kind: 'calculator' | 'quote-cta' | 'tiers' | 'none';
    config?: Record<string, unknown>;
  };
  team?: Array<{
    name: string;
    role: string;
    years?: number;
    langs?: string;
    image: string;
  }>;
  reviews?: {
    source: 'google' | 'trustpilot' | 'customer-supplied' | 'omit';
    aggregate?: { rating: number; count: number };
    items: Array<{
      name: string;
      rating: number;
      text: string;
      when: string;
      source: string;
    }>;
  };
  clients?: Array<{
    name: string;
    style?: string;
  }>;
  contact: {
    heading: string;
    subhead: string;
    opening_hours?: string;
    service_area?: string;
  };
  footer: {
    tagline: string;
    columns: Array<{ title: string; links: Array<[string, string]> }>;
    status_line?: string;
  };
}

export const site: SiteConfig = {
  company: {
    name: 'Medcom AS',
    wordmark_style: 'uppercase-tight-sans',
    tag: 'Nettsider & AIO',
    phone: '+47 978 17 654',
    email: 'post@medcom.no',
    industry: 'webbyrå',
  },
  meta: {
    title: 'Medcom AS — Nettsider og AIO for bedrifter',
    description:
      'Medcom bygger nettsider som rangerer og konverterer. Vi tilbyr nettsideutvikling, AIO (AI-optimalisert SEO), og digital markedsføring for norske bedrifter.',
  },
  hero: {
    eyebrow: 'Nettsider · AIO · Markedsføring',
    headline: 'Nettsider som jobber\nnår du ikke gjør det.',
    subhead:
      'Vi bygger nettsider for norske bedrifter — og nå tilbyr vi AIO: AI-optimalisert SEO som gir deg synlighet i Google, automatisk.',
    primary_cta: { label: 'Få et tilbud', href: '#kontakt' },
    secondary_cta: { label: 'Se tjenestene', href: '#tjenester' },
    weird_thing_id: 'aio-reveal',
  },
  services: [
    {
      n: '01',
      title: 'Nettsider',
      lead: 'Vi bygger nettsider som ser bra ut og fungerer enda bedre. Fra enkel presentasjonsside til avanserte webløsninger.',
      included: [
        'Responsivt design',
        'Rask lastetid',
        'Optimalisert for konvertering',
        'CMS for enkel redigering',
      ],
    },
    {
      n: '02',
      title: 'AIO — AI-optimalisert SEO',
      lead: 'Vår nye tjeneste. Vi bruker AI til å optimalisere innholdet ditt kontinuerlig, slik at Google alltid finner deg.',
      included: [
        'AI-drevet innholdsoptimalisering',
        'Teknisk SEO-analyse',
        'Månedlige rangeringsrapporter',
        'Automatiske forbedringer',
      ],
    },
    {
      n: '03',
      title: 'Meta Ads & Annonsering',
      lead: 'Målrettet annonsering på Facebook og Instagram. Vi setter opp, optimaliserer og rapporterer.',
      included: [
        'Kampanjeoppsett',
        'Målgruppeanalyse',
        'A/B-testing av annonser',
        'Ukentlig rapportering',
      ],
    },
    {
      n: '04',
      title: 'Avanserte webløsninger',
      lead: 'Integrasjoner, bookingsystemer, e-handel og skreddersydde digitale løsninger for krevende bedrifter.',
      included: [
        'API-integrasjoner',
        'E-handelssystemer',
        'Bookingløsninger',
        'Tilpassede løsninger',
      ],
    },
  ],
  pricing: {
    kind: 'quote-cta',
  },
  reviews: {
    source: 'omit',
    items: [],
  },
  contact: {
    heading: 'Book en gratis gjennomgang.',
    subhead:
      'Vi går gjennom nettsiden din, SEO-statusen og hva AIO kan gjøre for deg. Uforpliktende.',
    opening_hours: 'Man–fre: 08–17',
    service_area: 'Hele Norge',
  },
  footer: {
    tagline: 'Nettsider og AIO for ambisiøse bedrifter.',
    columns: [
      {
        title: 'Tjenester',
        links: [
          ['Nettsider', '#tjenester'],
          ['AIO — AI-optimalisert SEO', '#tjenester'],
          ['Meta Ads & Annonsering', '#tjenester'],
          ['Avanserte webløsninger', '#tjenester'],
        ],
      },
      {
        title: 'Selskapet',
        links: [
          ['Om oss', '#om'],
          ['Kontakt', '#kontakt'],
        ],
      },
      {
        title: 'Kontakt',
        links: [
          ['+47 978 17 654', 'tel:+4797817654'],
          ['post@medcom.no', 'mailto:post@medcom.no'],
        ],
      },
    ],
    status_line: '© 2025 Medcom AS',
  },
};
