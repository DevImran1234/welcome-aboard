import { ArrowRight, BookOpen, TrendingUp, Sparkles } from "lucide-react";

const BlogHero = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Enhanced background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-amber-500/10 to-transparent rounded-full blur-3xl animate-float" />
      </div>
      
      <div className="relative container mx-auto max-w-6xl">
        <div className="text-center space-y-8">
          {/* Enhanced badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-full text-sm font-medium text-amber-400 backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            Latest Tech Insights
            <Sparkles className="w-4 h-4" />
          </div>
          
          {/* Enhanced title with gradient */}
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-white via-amber-200 to-orange-200 bg-clip-text text-transparent">
              LogicCascade Blog
            </span>
          </h1>
          
          {/* Enhanced description */}
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Expert insights on web development, AI technology, and digital transformation. 
            Stay ahead with cutting-edge tutorials, best practices, and industry trends.
          </p>
          
          {/* Enhanced stats */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
                <TrendingUp className="w-4 h-4 text-amber-400" />
                <span>30+ Articles</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span>Expert Written</span>
              </div>
            </div>
          </div>

          {/* Call to action */}
          <div className="pt-8">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg text-white font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-amber-500/25">
              <BookOpen className="w-5 h-5" />
              Explore Articles
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
