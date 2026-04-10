import { useState, useMemo, useCallback } from "react";
import { Menu } from "lucide-react";
import { agents } from "@/data/agents";
import HeroSection from "@/components/HeroSection";
import CategorySidebar from "@/components/CategorySidebar";
import ToolGrid from "@/components/ToolGrid";
import ScrollToTop from "@/components/ScrollToTop";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";

const useBookmarks = () => {
  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem("agentverse-bookmarks") || "[]");
    } catch {
      return [];
    }
  });

  const toggle = useCallback((id: string) => {
    setBookmarks((prev) => {
      const next = prev.includes(id) ? prev.filter((b) => b !== id) : [...prev, id];
      localStorage.setItem("agentverse-bookmarks", JSON.stringify(next));
      return next;
    });
  }, []);

  return { bookmarks, toggle };
};

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Tools");
  const [sortBy, setSortBy] = useState("az");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showBookmarks, setShowBookmarks] = useState(false);
  const { bookmarks, toggle: toggleBookmark } = useBookmarks();
  const isMobile = useIsMobile();

  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    agents.forEach((a) => a.tags.forEach((t) => tagSet.add(t)));
    return Array.from(tagSet).sort();
  }, []);

  const filteredTools = useMemo(() => {
    let result = agents;

    if (showBookmarks) {
      result = result.filter((a) => bookmarks.includes(a.id));
    } else if (activeCategory !== "All Tools") {
      result = result.filter((a) => a.category === activeCategory);
    }

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (a) =>
          a.name.toLowerCase().includes(q) ||
          a.description.toLowerCase().includes(q) ||
          a.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    if (selectedTags.length > 0) {
      result = result.filter((a) => selectedTags.some((t) => a.tags.includes(t)));
    }

    switch (sortBy) {
      case "az":
        result = [...result].sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "free":
        result = [...result].sort((a, b) => {
          const order = { Free: 0, Freemium: 1, Paid: 2 };
          return order[a.pricing] - order[b.pricing];
        });
        break;
      case "opensource":
        result = [...result].sort((a, b) => (b.openSource ? 1 : 0) - (a.openSource ? 1 : 0));
        break;
    }

    return result;
  }, [searchQuery, activeCategory, sortBy, selectedTags, showBookmarks, bookmarks]);

  const sidebarContent = (
    <CategorySidebar
      activeCategory={activeCategory}
      onCategoryChange={setActiveCategory}
      bookmarkCount={bookmarks.length}
      showBookmarks={showBookmarks}
      onToggleBookmarks={() => setShowBookmarks((p) => !p)}
    />
  );

  return (
    <div className="min-h-screen bg-background">
      <HeroSection
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        toolCount={agents.length}
      />

      <div className="flex">
        {/* Desktop Sidebar */}
        {!isMobile && (
          <aside className="w-64 flex-shrink-0 border-r border-border p-4 sticky top-0 h-screen overflow-y-auto">
            {sidebarContent}
          </aside>
        )}

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-6 min-w-0">
          {/* Mobile category trigger */}
          {isMobile && (
            <Sheet>
              <SheetTrigger asChild>
                <button className="mb-4 flex items-center gap-2 px-3 py-2 rounded-lg bg-muted text-sm font-medium text-foreground">
                  <Menu className="h-4 w-4" />
                  {showBookmarks ? "Bookmarks" : activeCategory}
                </button>
              </SheetTrigger>
              <SheetContent side="bottom" className="bg-background border-border rounded-t-2xl">
                <SheetTitle className="text-foreground mb-2">Categories</SheetTitle>
                {sidebarContent}
              </SheetContent>
            </Sheet>
          )}

          <ToolGrid
            tools={filteredTools}
            totalCount={agents.length}
            bookmarks={bookmarks}
            onToggleBookmark={toggleBookmark}
            sortBy={sortBy}
            onSortChange={setSortBy}
            selectedTags={selectedTags}
            allTags={allTags}
            onTagToggle={(tag) =>
              setSelectedTags((prev) =>
                prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
              )
            }
          />
        </main>
      </div>

      <ScrollToTop />
    </div>
  );
};

export default Index;
