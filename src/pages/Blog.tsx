import { Helmet } from 'react-helmet-async';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogHero from "@/components/blog/BlogHero";
import BlogGrid from "@/components/blog/BlogGrid";

const Blog = () => {
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
      <Helmet>
        <title>Logiccascade Blog - Web Development, AI, & Tech Insights | Software Development Agency</title>
        <meta name="description" content="Logiccascade blog features expert insights on web development, AI technology, software engineering, DevOps, and digital transformation. Stay updated with the latest tech trends and best practices." />
        <meta name="keywords" content="logiccascade blog, web development, AI technology, software engineering, tech insights, digital transformation, React, TypeScript, machine learning, DevOps" />
        <link rel="canonical" href="https://logiccascade.us/blog" />
        <meta property="og:title" content="Logiccascade Blog - Web Development, AI & Tech Insights" />
        <meta property="og:description" content="Expert insights on web development, AI technology, software engineering, and digital transformation. Logiccascade's comprehensive tech blog." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://logiccascade.us/blog" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Logiccascade Blog - Web Development, AI & Tech Insights" />
        <meta name="twitter:description" content="Expert insights on web development, AI technology, software engineering, and digital transformation." />
        <script type="application/ld+json">
          {JSON.stringify(blogSchema)}
        </script>
      </Helmet>
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
