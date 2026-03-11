import { useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogHero from "@/components/blog/BlogHero";
import BlogGrid from "@/components/blog/BlogGrid";

const Blog = () => {
  useEffect(() => {
    // Set meta tags
    document.title = "Logiccascade Blog - Web Development, AI, & Tech Insights | Software Development Agency";
    document.querySelector('meta[name="description"]')?.setAttribute('content', "Logiccascade blog features expert insights on web development, AI technology, software engineering, DevOps, and digital transformation. Stay updated with the latest tech trends and best practices.");
    document.querySelector('meta[name="keywords"]')?.setAttribute('content', "logiccascade blog, web development, AI technology, software engineering, tech insights, digital transformation, React, TypeScript, machine learning, DevOps");
    
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link') as HTMLLinkElement;
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = "https://logiccascade.us/blog";
    
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', "Logiccascade Blog - Web Development, AI & Tech Insights");
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', "Expert insights on web development, AI technology, software engineering, and digital transformation. Logiccascade's comprehensive tech blog.");
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', "https://logiccascade.us/blog");
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', "Logiccascade Blog - Web Development, AI & Tech Insights");
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', "Expert insights on web development, AI technology, software engineering, and digital transformation.");
  }, []);

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Logiccascade Blog",
    "description": "Expert insights on web development, AI technology, software engineering, and digital transformation from Logiccascade.",
    "url": "https://logiccascade.us/blog",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://logiccascade.us/blog"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Logiccascade",
      "logo": {
        "@type": "ImageObject",
        "url": "https://logiccascade.us/logo.png"
      }
    }
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(blogSchema)}
      </script>
      <div className="min-h-screen bg-slate-900">
        <Navbar />
        <BlogHero />
        <BlogGrid />
        <Footer />
      </div>
    </>
  );
};

export default Blog;
