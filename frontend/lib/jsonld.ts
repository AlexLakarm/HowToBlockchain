// Types de schémas JSON-LD
export type JsonLdSchema =
  | WebsiteSchema
  | OrganizationSchema
  | BreadcrumbListSchema
  | FAQPageSchema
  | CourseSchema;

interface WebsiteSchema {
  '@context': 'https://schema.org';
  '@type': 'WebSite';
  name: string;
  url: string;
  description?: string;
  potentialAction?: {
    '@type': 'SearchAction';
    target: string;
    'query-input': string;
  };
}

interface OrganizationSchema {
  '@context': 'https://schema.org';
  '@type': 'Organization';
  name: string;
  url: string;
  logo?: string;
  sameAs?: string[];
  contactPoint?: {
    '@type': 'ContactPoint';
    telephone?: string;
    email?: string;
    contactType: string;
  };
}

interface BreadcrumbListSchema {
  '@context': 'https://schema.org';
  '@type': 'BreadcrumbList';
  itemListElement: {
    '@type': 'ListItem';
    position: number;
    name: string;
    item?: string;
  }[];
}

interface FAQPageSchema {
  '@context': 'https://schema.org';
  '@type': 'FAQPage';
  mainEntity: {
    '@type': 'Question';
    name: string;
    acceptedAnswer: {
      '@type': 'Answer';
      text: string;
    };
  }[];
}

interface CourseSchema {
  '@context': 'https://schema.org';
  '@type': 'Course';
  name: string;
  description: string;
  provider: {
    '@type': 'Organization';
    name: string;
    sameAs: string;
  };
}

// Générateurs de schémas

export function generateWebsiteSchema(websiteName: string, websiteUrl: string, description?: string): WebsiteSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: websiteName,
    url: websiteUrl,
    description,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${websiteUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };
}

export function generateOrganizationSchema(
  orgName: string,
  orgUrl: string,
  logoUrl?: string,
  socialLinks?: string[]
): OrganizationSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: orgName,
    url: orgUrl,
    ...(logoUrl && { logo: logoUrl }),
    ...(socialLinks && { sameAs: socialLinks }),
  };
}

export function generateBreadcrumbListSchema(items: { name: string; url?: string }[]): BreadcrumbListSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.url && { item: item.url }),
    })),
  };
}

export function generateFAQPageSchema(faqs: { question: string; answer: string }[]): FAQPageSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateCourseSchema(
  courseName: string,
  courseDescription: string,
  providerName: string,
  providerUrl: string
): CourseSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: courseName,
    description: courseDescription,
    provider: {
      '@type': 'Organization',
      name: providerName,
      sameAs: providerUrl,
    },
  };
}

// Fonction d'assistance pour ajouter des schémas JSON-LD à une page
export function generateJsonLd(schemas: JsonLdSchema | JsonLdSchema[]): string {
  const schemasArray = Array.isArray(schemas) ? schemas : [schemas];
  return `<script type="application/ld+json">${JSON.stringify(schemasArray)}</script>`;
} 