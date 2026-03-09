import { Filter } from "lucide-react";

interface BlogFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const BlogFilter = ({ categories, selectedCategory, onCategoryChange }: BlogFilterProps) => {
  return (
    <div className="flex flex-col items-center mb-12">
      <div className="flex items-center gap-2 mb-6">
        <Filter className="w-5 h-5 text-amber-400" />
        <span className="text-sm text-gray-300">Filter by category</span>
      </div>
      
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedCategory === category
                ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/25 border border-amber-500/50"
                : "bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20 hover:border-amber-500/50 backdrop-blur-sm"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BlogFilter;
