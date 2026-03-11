import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from '@/data/blogPosts';
import BlogPostContent from '@/components/blog/BlogPostContent';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  useEffect(() => {
    if (post) {
      // Set meta tags
      document.title = post.seoTitle;
      document.querySelector('meta[name="description"]')?.setAttribute('content', post.seoDescription);
      document.querySelector('meta[name="keywords"]')?.setAttribute('content', post.seoKeywords.join(', '));
      
      let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!canonical) {
        canonical = document.createElement('link') as HTMLLinkElement;
        canonical.rel = 'canonical';
        document.head.appendChild(canonical);
      }
      canonical.href = `https://logiccascade.us/blog/${post.slug}`;
      
      document.querySelector('meta[property="og:title"]')?.setAttribute('content', post.seoTitle);
      document.querySelector('meta[property="og:description"]')?.setAttribute('content', post.seoDescription);
      document.querySelector('meta[property="og:url"]')?.setAttribute('content', `https://logiccascade.us/blog/${post.slug}`);
      document.querySelector('meta[property="article:published_time"]')?.setAttribute('content', post.publishedAt);
      document.querySelector('meta[property="article:author"]')?.setAttribute('content', post.author);
      document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', post.seoTitle);
      document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', post.seoDescription);
      
      if (post.seoImage) {
        document.querySelector('meta[property="og:image"]')?.setAttribute('content', post.seoImage);
      }
    }
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-900">
        <Navbar />
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center text-white">Blog Post Not Found</h1>
          <p className="text-center mt-4 text-gray-400">
            The blog post you're looking for doesn't exist.
          </p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.seoDescription,
          "author": {
            "@type": "Person",
            "name": post.author
          },
          "datePublished": post.publishedAt,
          "dateModified": post.updatedAt,
          "image": post.seoImage,
          "url": `https://logiccascade.us/blog/${post.slug}`
        })}
      </script>
      <div className="min-h-screen bg-slate-900">
        <Navbar />
        <BlogPostContent post={post} />
        <Footer />
      </div>
    </>
  );
};

export default BlogPost;
