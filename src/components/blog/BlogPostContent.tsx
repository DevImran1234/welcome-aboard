import { Link } from "react-router-dom";
import { Calendar, Clock, User, ArrowLeft, Share2, Tag } from "lucide-react";
import { BlogPost } from "@/data/blogPosts";

interface BlogPostContentProps {
  post: BlogPost;
}

const BlogPostContent = ({ post }: BlogPostContentProps) => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <article className="py-12 px-4 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          
          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm font-semibold text-amber-400 bg-amber-500/10 px-3 py-1 rounded border border-amber-500/20">
              {post.category}
            </span>
            {post.featured && (
              <span className="text-sm font-semibold text-orange-400 bg-orange-500/10 px-3 py-1 rounded border border-orange-500/20">
                Featured
              </span>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-8 pb-8 border-b border-slate-700">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-amber-400" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-amber-400" />
              <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-amber-400" />
              <span>{post.readTime} min read</span>
            </div>
            <button
              onClick={handleShare}
              className="flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors"
            >
              <Share2 className="w-5 h-5" />
              <span>Share</span>
            </button>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <span 
                key={tag} 
                className="inline-flex items-center gap-1 text-sm text-gray-300 bg-slate-700/50 px-3 py-1 rounded-full border border-slate-600/30"
              >
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="prose prose-lg prose-invert max-w-none">
          <div className="text-gray-300 leading-relaxed whitespace-pre-wrap break-words">
            {post.content.split('\n').map((line, idx) => {
              // Handle headings
              if (line.startsWith('# ')) {
                return <h1 key={idx} className="text-3xl font-bold text-white mb-6 mt-8 first:mt-0">{line.replace('# ', '')}</h1>;
              }
              if (line.startsWith('## ')) {
                return <h2 key={idx} className="text-2xl font-bold text-white mb-4 mt-8">{line.replace('## ', '')}</h2>;
              }
              if (line.startsWith('### ')) {
                return <h3 key={idx} className="text-xl font-bold text-white mb-3 mt-6">{line.replace('### ', '')}</h3>;
              }
              if (line.startsWith('#### ')) {
                return <h4 key={idx} className="text-lg font-bold text-white mb-2 mt-4">{line.replace('#### ', '')}</h4>;
              }
              // Handle code blocks
              if (line.startsWith('```')) {
                return null; // Skip code fence markers
              }
              // Handle blockquotes
              if (line.startsWith('> ')) {
                return <blockquote key={idx} className="border-l-4 border-amber-500 pl-4 my-4 text-gray-300 italic">{line.replace('> ', '')}</blockquote>;
              }
              // Handle lists
              if (line.startsWith('- ') || line.startsWith('* ')) {
                return <li key={idx} className="text-gray-300 list-disc list-inside">{line.replace(/^[-*] /, '')}</li>;
              }
              if (line.startsWith('1. ') || line.match(/^\d+\. /)) {
                return <li key={idx} className="text-gray-300 list-decimal list-inside">{line.replace(/^\d+\. /, '')}</li>;
              }
              // Handle horizontal rules
              if (line === '---' || line === '***') {
                return <hr key={idx} className="border-slate-700 my-8" />;
              }
              // Handle empty lines as spacing
              if (line.trim() === '') {
                return <div key={idx} className="h-2"></div>;
              }
              // Regular paragraphs
              return <p key={idx} className="text-gray-300 mb-4 leading-relaxed">{line}</p>;
            })}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-700">
          <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-xl p-8 text-center border border-amber-500/20 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              Enjoyed this article?
            </h3>
            <p className="text-gray-300 mb-6">
              Stay updated with our latest insights on web development, AI, and technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/blog" 
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-lg"
              >
                Read More Articles
              </Link>
              <button
                onClick={handleShare}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-amber-500 text-amber-400 rounded-lg hover:bg-amber-500/10 transition-all duration-300"
              >
                <Share2 className="w-4 h-4" />
                Share Article
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPostContent;
