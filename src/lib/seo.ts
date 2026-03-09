/**
 * SEO Utility Functions
 * Helps manage meta tags and structured data for better search engine optimization
 */

interface SEOMetadata {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonicalUrl?: string;
  robotsIndexing?: string;
}

/**
 * Update document title
 */
export const setSeoTitle = (title: string) => {
  document.title = title;
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
  document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', title);
};

/**
 * Update meta description
 */
export const setSeoDescription = (description: string) => {
  document.querySelector('meta[name="description"]')?.setAttribute('content', description);
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
  document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', description);
};

/**
 * Update canonical URL
 */
export const setSeoCanonical = (url: string) => {
  let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  canonical.href = url;
};

/**
 * Update OG image
 */
export const setSeoImage = (imageUrl: string) => {
  document.querySelector('meta[property="og:image"]')?.setAttribute('content', imageUrl);
  document.querySelector('meta[name="twitter:image"]')?.setAttribute('content', imageUrl);
};

/**
 * Update multiple SEO metadata at once
 */
export const updateSeoMetadata = (metadata: SEOMetadata) => {
  if (metadata.title) setSeoTitle(metadata.title);
  if (metadata.description) setSeoDescription(metadata.description);
  if (metadata.canonicalUrl) setSeoCanonical(metadata.canonicalUrl);
  if (metadata.ogImage) setSeoImage(metadata.ogImage);
  
  if (metadata.keywords) {
    document.querySelector('meta[name="keywords"]')?.setAttribute('content', metadata.keywords);
  }
  
  if (metadata.robotsIndexing) {
    document.querySelector('meta[name="robots"]')?.setAttribute('content', metadata.robotsIndexing);
  }
};

/**
 * Add JSON-LD structured data
 */
export const addJsonLd = (schema: Record<string, unknown>) => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
};

/**
 * Remove duplicate JSON-LD scripts (useful when navigating between pages)
 */
export const cleanupJsonLd = () => {
  document.head.querySelectorAll('script[type="application/ld+json"]').forEach((script) => {
    // Keep the main ones, remove navigation-specific ones
    const content = script.textContent || '';
    if (content.includes('BreadcrumbList') || content.includes('Article') || content.includes('NewsArticle')) {
      script.remove();
    }
  });
};

/**
 * Blog post schema generator
 */
export const generateBlogPostSchema = (
  title: string,
  description: string,
  author: string,
  publishedDate: string,
  imageUrl: string,
  articleBody: string,
  url: string
) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: description,
    image: imageUrl,
    datePublished: publishedDate,
    dateModified: publishedDate,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Logiccascade',
      logo: {
        '@type': 'ImageObject',
        url: 'https://logiccascade.us/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    articleBody: articleBody,
  };
};

/**
 * Service schema generator
 */
export const generateServiceSchema = (
  serviceName: string,
  description: string,
  image: string
) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: description,
    image: image,
    provider: {
      '@type': 'Organization',
      name: 'Logiccascade',
      url: 'https://logiccascade.us',
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
  };
};

/**
 * Local business schema generator
 */
export const generateLocalBusinessSchema = (
  name: string,
  address: string,
  phone: string,
  email: string,
  image: string
) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://logiccascade.us',
    name: name,
    image: image,
    address: {
      '@type': 'PostalAddress',
      name: address,
    },
    telephone: phone,
    email: email,
    url: 'https://logiccascade.us',
  };
};
