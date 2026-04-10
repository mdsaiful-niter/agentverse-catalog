import { Search } from "lucide-react";
import { motion } from "framer-motion";

interface HeroSectionProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  toolCount: number;
}

const HeroSection = ({ searchQuery, onSearchChange, toolCount }: HeroSectionProps) => {
  return (
    <div className="relative overflow-hidden border-b border-border">
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

      <div className="relative px-6 py-12 md:py-16 text-center max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-extrabold gradient-text mb-4"
        >
          AgentVerse 🤖
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg md:text-xl text-muted-foreground mb-6"
        >
          Discover {toolCount}+ Agentic AI Tools — All in One Place
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-primary/20 text-primary border border-primary/30">
            {toolCount}+ Tools
          </span>
          <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-secondary/20 text-secondary border border-secondary/30">
            8 Categories
          </span>
          <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-muted text-muted-foreground border border-border">
            Updated 2025
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative max-w-xl mx-auto"
        >
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search by name, task, or tag..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full h-12 pl-12 pr-4 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
