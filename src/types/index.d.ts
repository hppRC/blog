type MdxNode = {
  body: string;
  excerpt: string;
  frontmatter: Frontmatter;
};

type PostPageContext = {
  previous: MdxNode;
  next: MdxNode;
  slug: string;
};

type PostData = {
  mdx: {
    body: string;
    excerpt: string;
    headings: {
      value: string;
      depth: number;
    }[];
    frontmatter: Frontmatter;
  } | null;
};


type Frontmatter = Partial<{
  slug: string;
  title: string;
  date: string;
  tags: string[];
  cover: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
}>;

type PostsByTag = {
  [key: string]: { frontmatter: Frontmatter; excerpt: string }[];
};

type SiteMetadata = DeepPartial<{
  siteTitle: string;
  siteTitleAlt: string;
  siteHeadline: string;
  siteUrl: string;
  siteDescription: string;
  siteLanguage: string;
  author: string;
  social: {
    twitter: string;
    github: string;
    qiita: string;
  };
}>;

type Post = {
  body: string;
  excerpt: string;
  frontmatter: Frontmatter;
};


type JsonLdConfig = Partial<{
  '@context': string;
  '@type': string;
  inLanguage: string;
  url: string;
  headline: string;
  name: string;
  alternateName: string;
  description: string;
  author: Partial<{
    '@type': string;
    name: string;
    sameas: string;
    url: string;
    image: Partial<{
      '@type': string;
      url: string;
      width: number;
      height: number;
    }>;
  }>[];
  publisher: Partial<{
    '@type': string;
    name: string;
    description: string;
    logo: Partial<{
      '@type': string;
      url: string;
      width: number;
      height: number;
    }>;
  }>;
  image:
    | Partial<{
        '@type': string;
        url: string;
      }>
    | string;
  itemListElement: [
    Partial<{
      '@type': string;
      position: number;
      item: Partial<{
        '@id': string;
        name: string;
        image: string;
      }>;
    }>
  ];
  datePublished: string;
  dateModified: string;
  potentialAction: Record<string, unknown>;
  mainEntityOfPage: Partial<{
    '@type': string;
    '@id': string;
  }>;
}>[];
