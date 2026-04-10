
# AgentVerse — AI Tools Directory

## Overview
A beautiful, searchable catalog of 40+ agentic AI tools with dark theme, glassmorphism cards, and category navigation.

## Implementation

### 1. Design System & Theme
- Dark navy background (#0D1117), violet (#7C3AED) and cyan (#06B6D4) accents
- Plus Jakarta Sans font via Google Fonts
- Glassmorphism card styles with backdrop-blur
- Custom CSS variables for the dark palette

### 2. Data Layer
- `src/data/agents.ts` — all 40+ tools with name, category, emoji, tagline, description, tags, website, pricing, openSource fields
- 8 categories: General Autonomous, Coding & Dev, Browser & Computer, Research & Analysis, Multi-Agent Frameworks, Data & Analytics, Voice & Conversational, Workflow & RPA

### 3. Hero Section
- Gradient text heading "AgentVerse 🤖" (violet→cyan)
- Subtitle + animated stat badges (40+ Tools, 8 Categories, Updated 2025)
- Large centered search bar
- Animated dot-grid background using CSS

### 4. Left Sidebar Navigation
- Category list with emoji icons and tool count badges
- Active state: violet left border + violet bg
- Mobile: transforms into a bottom sheet drawer

### 5. Tool Cards Grid
- Responsive: 3 cols → 2 → 1
- Each card: emoji logo, pricing badge (color-coded), name, tagline, truncated description, tag pills (max 3), open-source badge, "Visit Site →" button, bookmark toggle
- Hover: lift + cyan border glow with smooth transition
- Skeleton loading animation on initial render

### 6. Filtering & Sorting
- Tag filter chips bar (toggleable, multi-select) above grid
- Sort dropdown: A-Z, Free First, Open Source First
- "Showing X of Y tools" live count
- Search filters by name, tags, and description

### 7. Additional Features
- Bookmarks stored in localStorage, accessible via sidebar link
- Scroll-to-top button (bottom-right)
- Empty state with illustration when no search results
- Framer Motion for card animations, page transitions, and hover effects

### 8. Pages & Routing
- `/` — Main directory page with hero, sidebar, and card grid
- All on single page with smooth interactions
