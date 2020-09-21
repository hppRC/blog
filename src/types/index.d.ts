type Post = {
  fileAbsolutePath: string;
  body: string;
  excerpt: string;
  frontmatter: Frontmatter;
  slug: string;
  headings: {
    value: string;
    depth: number;
  }[];
};

type PostPageContext = {
  previous: Post;
  next: Post;
  slug: string;
};

type PostsByTagPageContext = {
  posts: Post[];
  tagName: string;
};

type PostData = {
  mdx: Post | null;
};


type Frontmatter = Partial<{
  title: string;
  date: string;
  tags: string[];
  cover: {
    childImageSharp: {
      fluid: import("gatsby-image").FluidObject;
    };
  };
}>;

type PostsByTag = {
  [key: string]: Post[];
};

type SiteMetadata = Partial<{
  siteTitle: string;
  siteTitleAlt: string;
  siteHeadline: string;
  siteUrl: string;
  siteDescription: string;
  siteLanguage: string;
  author: string;
  social: Partial<{
    twitter: string;
    github: string;
    qiita: string;
  }>;
}>;

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
