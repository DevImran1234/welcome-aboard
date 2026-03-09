import { Link } from "react-router-dom";
import { Calendar, Clock, User, ArrowRight, Tag, Star } from "lucide-react";
import { BlogPost } from "@/data/blogPosts";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

const BlogCard = ({ post, featured = false }: BlogCardProps) => {
  const cardClass = featured 
    ? "bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-amber-500/30 hover:border-amber-500/50 backdrop-blur-sm"
    : "bg-slate-800/30 border border-slate-700/50 hover:border-amber-500/30 backdrop-blur-sm";

  return (
    <article className={`rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10 ${cardClass}`}>
      <Link to={`/blog/${post.slug}`} className="block p-6 h-full">
        <div className="flex flex-col h-full">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-semibold text-amber-400 bg-amber-500/10 px-2 py-1 rounded border border-amber-500/20">
              {post.category}
            </span>
            {post.featured && (
              <span className="text-xs font-semibold text-orange-400 bg-orange-500/10 px-2 py-1 rounded border border-orange-500/20 flex items-center gap-1">
                <Star className="w-3 h-3" />
                Featured
              </span>
            )}
          </div>

          <h3 className={`font-bold mb-3 line-clamp-2 ${featured ? 'text-2xl' : 'text-xl'} text-white hover:text-amber-400 transition-colors`}>
            {post.title}
          </h3>

          <p className="text-gray-400 mb-4 line-clamp-3 flex-grow">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap gap-1 mb-4">
            {post.tags.slice(0, 3).map((tag) => (
              <span 
                key={tag} 
                className="inline-flex items-center gap-1 text-xs text-gray-400 bg-slate-700/50 px-2 py-1 rounded border border-slate-600/30"
              >
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
            {post.tags.length > 3 && (
              <span className="text-xs text-gray-500 bg-slate-700/30 px-2 py-1 rounded border border-slate-600/20">
                +{post.tags.length - 3}
              </span>
            )}
          </div>

          <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-slate-700/50">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <User className="w-4 h-4 text-amber-400" />
                <span className="text-gray-400">{post.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4 text-amber-400" />
                <span className="text-gray-400">{post.readTime} min read</span>
              </div>
            </div>
            <div className="flex items-center gap-1 text-amber-400 hover:text-amber-300">
              <span>Read more</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default BlogCard;
