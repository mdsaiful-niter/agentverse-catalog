import { ExternalLink, Star } from "lucide-react";
import { motion } from "framer-motion";
import type { Agent } from "@/data/agents";
import { cn } from "@/lib/utils";

interface ToolCardProps {
  agent: Agent;
  index: number;
  isBookmarked: boolean;
  onToggleBookmark: (id: string) => void;
}

const pricingStyles: Record<string, string> = {
  Free: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  Freemium: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  Paid: "bg-amber-500/20 text-amber-400 border-amber-500/30",
};

const ToolCard = ({ agent, index, isBookmarked, onToggleBookmark }: ToolCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      className="glass-card rounded-xl p-5 group hover:-translate-y-1 hover:border-secondary/50 hover:shadow-[0_0_20px_hsl(187_94%_43%/0.15)] transition-all duration-200 flex flex-col"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center text-2xl">
            {agent.emoji}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-foreground text-base truncate">{agent.name}</h3>
            <p className="text-xs text-muted-foreground truncate">{agent.tagline}</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 flex-shrink-0">
          <span className={cn("text-[10px] font-semibold px-2 py-0.5 rounded-full border", pricingStyles[agent.pricing])}>
            {agent.pricing}
          </span>
          <button
            onClick={() => onToggleBookmark(agent.id)}
            className="p-1 rounded-md hover:bg-muted transition-colors"
          >
            <Star
              className={cn(
                "h-4 w-4 transition-colors",
                isBookmarked ? "fill-amber-400 text-amber-400" : "text-muted-foreground"
              )}
            />
          </button>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-muted-foreground line-clamp-2 mb-3 flex-1">
        {agent.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        {agent.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary/80 border border-primary/20"
          >
            {tag}
          </span>
        ))}
        {agent.openSource && (
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            Open Source
          </span>
        )}
      </div>

      {/* Footer */}
      <a
        href={agent.website}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-secondary transition-colors group/link"
      >
        Visit Site
        <ExternalLink className="h-3.5 w-3.5 group-hover/link:translate-x-0.5 transition-transform" />
      </a>
    </motion.div>
  );
};

export default ToolCard;
