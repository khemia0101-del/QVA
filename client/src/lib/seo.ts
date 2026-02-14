/**
 * QVA Holdings — SEO Utilities
 * Dynamic meta tag management and schema generation
 */

export interface SEOConfig {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  keywords?: string[];
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

/**
 * Update page meta tags dynamically
 */
export function updateMetaTags(config: SEOConfig): void {
  // Update title
  document.title = config.title;

  // Update or create meta tags
  const metaTags: Record<string, string> = {
    description: config.description,
    "og:title": config.title,
    "og:description": config.description,
    "twitter:title": config.title,
    "twitter:description": config.description,
  };

  if (config.ogImage) {
    metaTags["og:image"] = config.ogImage;
    metaTags["twitter:image"] = config.ogImage;
  }

  if (config.ogType) {
    metaTags["og:type"] = config.ogType;
  }

  if (config.canonical) {
    metaTags["og:url"] = config.canonical;
    
    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = config.canonical;
  }

  if (config.keywords && config.keywords.length > 0) {
    metaTags["keywords"] = config.keywords.join(", ");
  }

  if (config.author) {
    metaTags["author"] = config.author;
  }

  if (config.publishedTime) {
    metaTags["article:published_time"] = config.publishedTime;
  }

  if (config.modifiedTime) {
    metaTags["article:modified_time"] = config.modifiedTime;
  }

  // Apply all meta tags
  Object.entries(metaTags).forEach(([name, content]) => {
    const isOg = name.startsWith("og:");
    const isTwitter = name.startsWith("twitter:");
    const attribute = isOg || isTwitter ? "property" : "name";
    
    let meta = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute(attribute, name);
      document.head.appendChild(meta);
    }
    meta.content = content;
  });
}

/**
 * Generate Article schema for blog posts
 */
export function generateArticleSchema(article: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  url: string;
}): void {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: article.image,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      "@type": article.author ? "Person" : "Organization",
      name: article.author || "QVA Holdings",
    },
    publisher: {
      "@type": "Organization",
      name: "QVA Holdings",
      logo: {
        "@type": "ImageObject",
        url: "https://qvaholdings.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": article.url,
    },
  };

  injectSchema("article-schema", schema);
}

/**
 * Generate PodcastEpisode schema
 */
export function generatePodcastEpisodeSchema(episode: {
  title: string;
  description: string;
  datePublished: string;
  duration: string; // ISO 8601 format, e.g., "PT45M"
  audioUrl?: string;
  image: string;
  episodeNumber: number;
  url: string;
}): void {
  const schema = {
    "@context": "https://schema.org",
    "@type": "PodcastEpisode",
    name: episode.title,
    description: episode.description,
    datePublished: episode.datePublished,
    duration: episode.duration,
    image: episode.image,
    episodeNumber: episode.episodeNumber,
    url: episode.url,
    associatedMedia: episode.audioUrl
      ? {
          "@type": "MediaObject",
          contentUrl: episode.audioUrl,
        }
      : undefined,
    partOfSeries: {
      "@type": "PodcastSeries",
      name: "The Credit Partnership Playbook",
      url: "https://qvaholdings.com/podcast",
      description: "Deep dives into credit partnerships, DSCR financing, and strategies to leverage your credit score for income.",
    },
  };

  injectSchema("podcast-episode-schema", schema);
}

/**
 * Generate BreadcrumbList schema
 */
export function generateBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>): void {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  injectSchema("breadcrumb-schema", schema);
}

/**
 * Inject or update schema script tag
 */
function injectSchema(id: string, schema: object): void {
  // Remove existing schema with this ID
  const existing = document.getElementById(id);
  if (existing) {
    existing.remove();
  }

  // Create new schema script
  const script = document.createElement("script");
  script.id = id;
  script.type = "application/ld+json";
  script.text = JSON.stringify(schema);
  document.head.appendChild(script);
}

/**
 * Convert date string to ISO 8601 format
 */
export function formatDateISO(dateString: string): string {
  const date = new Date(dateString);
  return date.toISOString();
}

/**
 * Convert duration string to ISO 8601 duration format
 * Example: "45 min" -> "PT45M", "1 hr 15 min" -> "PT1H15M"
 */
export function formatDurationISO(duration: string): string {
  const hourMatch = duration.match(/(\d+)\s*hr/);
  const minMatch = duration.match(/(\d+)\s*min/);
  
  let iso = "PT";
  if (hourMatch) iso += `${hourMatch[1]}H`;
  if (minMatch) iso += `${minMatch[1]}M`;
  
  return iso;
}

/**
 * Clean up schemas on component unmount
 */
export function cleanupSchemas(ids: string[]): void {
  ids.forEach((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.remove();
    }
  });
}
