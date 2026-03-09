import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from '@/data/blogPosts';
import BlogPostContent from '@/components/blog/BlogPostContent';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

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
      <Helmet>
        <title>{post.seoTitle}</title>
        <meta name="description" content={post.seoDescription} />
        <meta name="keywords" content={post.seoKeywords.join(', ')} />
        <link rel="canonical" href={`https://logiccascade.com/blog/${post.slug}`} />
        <meta property="og:title" content={post.seoTitle} />
        <meta property="og:description" content={post.seoDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://logiccascade.com/blog/${post.slug}`} />
        <meta property="article:published_time" content={post.publishedAt} />
        <meta property="article:author" content={post.author} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.seoTitle} />
        <meta name="twitter:description" content={post.seoDescription} />
        {post.seoImage && <meta property="og:image" content={post.seoImage} />}
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
            "url": `https://logiccascade.com/blog/${post.slug}`
          })}
        </script>
      </Helmet>
      <div className="min-h-screen bg-slate-900">
        <Navbar />
        <BlogPostContent post={post} />
        <Footer />
      </div>
    </>
  );
};

export default BlogPost;
