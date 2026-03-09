import { Link } from "react-router-dom";
import { Calendar, Clock, User, ArrowLeft, Share2, Tag } from "lucide-react";
import { BlogPost } from "@/data/blogPosts";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import 'highlight.js/styles/github-dark.css';

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

        <div className="prose prose-lg prose-invert max-w-none prose-headings:text-white prose-p:text-gray-300 prose-strong:text-white prose-code:text-amber-400 prose-pre:bg-slate-800 prose-pre:border-slate-700 prose-blockquote:border-l-amber-500 prose-blockquote:text-gray-300 prose-a:text-amber-400 hover:prose-a:text-amber-300 prose-ul:text-gray-300 prose-ol:text-gray-300 prose-li:text-gray-300 prose-hr:border-slate-700 prose-table:border-slate-700 prose-th:border-slate-700 prose-td:border-slate-700 prose-th:bg-slate-800 prose-td:bg-slate-900">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw, rehypeHighlight]}
            components={{
              h1: ({children}) => <h1 className="text-3xl font-bold text-white mb-6 mt-8 first:mt-0">{children}</h1>,
              h2: ({children}) => <h2 className="text-2xl font-bold text-white mb-4 mt-8">{children}</h2>,
              h3: ({children}) => <h3 className="text-xl font-bold text-white mb-3 mt-6">{children}</h3>,
              h4: ({children}) => <h4 className="text-lg font-bold text-white mb-2 mt-4">{children}</h4>,
              p: ({children}) => <p className="text-gray-300 mb-4 leading-relaxed">{children}</p>,
              code: ({inline, children, ...props}) => {
                if (inline) {
                  return <code className="bg-slate-800 text-amber-400 px-2 py-1 rounded text-sm font-mono border border-slate-700" {...props}>{children}</code>;
                }
                return <code className="block bg-slate-800 text-gray-300 p-4 rounded-lg overflow-x-auto font-mono text-sm border border-slate-700" {...props}>{children}</code>;
              },
              pre: ({children}) => <pre className="bg-slate-800 border border-slate-700 rounded-lg overflow-x-auto p-4 mb-4">{children}</pre>,
              blockquote: ({children}) => <blockquote className="border-l-4 border-amber-500 pl-4 my-4 text-gray-300 italic">{children}</blockquote>,
              ul: ({children}) => <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">{children}</ul>,
              ol: ({children}) => <ol className="list-decimal list-inside text-gray-300 mb-4 space-y-2">{children}</ol>,
              li: ({children}) => <li className="text-gray-300">{children}</li>,
              a: ({href, children}) => <a href={href} className="text-amber-400 hover:text-amber-300 underline transition-colors">{children}</a>,
              hr: () => <hr className="border-slate-700 my-8" />,
              table: ({children}) => <table className="w-full border-collapse border border-slate-700 mb-4">{children}</table>,
              th: ({children}) => <th className="border border-slate-700 bg-slate-800 px-4 py-2 text-left text-white font-semibold">{children}</th>,
              td: ({children}) => <td className="border border-slate-700 bg-slate-900 px-4 py-2 text-gray-300">{children}</td>,
            }}
          >
            {post.content}
          </ReactMarkdown>
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
