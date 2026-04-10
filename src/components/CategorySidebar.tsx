import { categories, agents } from "@/data/agents";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface CategorySidebarProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  bookmarkCount: number;
  showBookmarks: boolean;
  onToggleBookmarks: () => void;
}

const CategorySidebar = ({
  activeCategory,
  onCategoryChange,
  bookmarkCount,
  showBookmarks,
  onToggleBookmarks,
}: CategorySidebarProps) => {
  const getCategoryCount = (name: string) => {
    if (name === "All Tools") return agents.length;
    return agents.filter((a) => a.category === name).length;
  };

  return (
    <div className="w-full space-y-1">
      {categories.map((cat) => (
        <button
          key={cat.name}
          onClick={() => {
            onCategoryChange(cat.name);
            if (showBookmarks) onToggleBookmarks();
          }}
          className={cn(
            "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all text-left",
            activeCategory === cat.name && !showBookmarks
              ? "bg-primary/15 text-primary border-l-2 border-primary"
              : "text-muted-foreground hover:bg-muted/50 hover:text-foreground border-l-2 border-transparent"
          )}
        >
          <span className="text-lg">{cat.emoji}</span>
          <span className="flex-1 truncate">{cat.name}</span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
            {getCategoryCount(cat.name)}
          </span>
        </button>
      ))}

      <div className="border-t border-border my-2" />

      <button
        onClick={onToggleBookmarks}
        className={cn(
          "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all text-left",
          showBookmarks
            ? "bg-primary/15 text-primary border-l-2 border-primary"
            : "text-muted-foreground hover:bg-muted/50 hover:text-foreground border-l-2 border-transparent"
        )}
      >
        <Star className="h-4 w-4" />
        <span className="flex-1">Bookmarks</span>
        <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
          {bookmarkCount}
        </span>
      </button>
    </div>
  );
};

export default CategorySidebar;
