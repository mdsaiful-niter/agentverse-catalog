import type { Agent } from "@/data/agents";
import ToolCard from "./ToolCard";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";

interface ToolGridProps {
  tools: Agent[];
  totalCount: number;
  bookmarks: string[];
  onToggleBookmark: (id: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  selectedTags: string[];
  allTags: string[];
  onTagToggle: (tag: string) => void;
}

const ToolGrid = ({
  tools,
  totalCount,
  bookmarks,
  onToggleBookmark,
  sortBy,
  onSortChange,
  selectedTags,
  allTags,
  onTagToggle,
}: ToolGridProps) => {
  return (
    <div>
      {/* Filter bar */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <div className="flex flex-wrap gap-1.5 flex-1">
          {allTags.slice(0, 12).map((tag) => (
            <button
              key={tag}
              onClick={() => onTagToggle(tag)}
              className={`text-xs px-2.5 py-1 rounded-full border transition-colors ${
                selectedTags.includes(tag)
                  ? "bg-primary/20 text-primary border-primary/40"
                  : "bg-muted/50 text-muted-foreground border-border hover:bg-muted"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="text-xs px-3 py-1.5 rounded-lg bg-muted border border-border text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
        >
          <option value="az">A-Z</option>
          <option value="free">Free First</option>
          <option value="opensource">Open Source First</option>
        </select>
      </div>

      {/* Count */}
      <p className="text-sm text-muted-foreground mb-4">
        Showing <span className="text-foreground font-semibold">{tools.length}</span> of {totalCount} tools
      </p>

      {/* Grid */}
      {tools.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {tools.map((agent, i) => (
              <ToolCard
                key={agent.id}
                agent={agent}
                index={i}
                isBookmarked={bookmarks.includes(agent.id)}
                onToggleBookmark={onToggleBookmark}
              />
            ))}
          </AnimatePresence>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center justify-center py-20 text-center"
        >
          <Search className="h-12 w-12 text-muted-foreground/30 mb-4" />
          <h3 className="text-lg font-semibold text-foreground mb-2">No tools found</h3>
          <p className="text-sm text-muted-foreground">Try adjusting your search or filters</p>
        </motion.div>
      )}
    </div>
  );
};

export default ToolGrid;
