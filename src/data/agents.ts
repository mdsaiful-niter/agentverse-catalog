export interface Agent {
  id: string;
  name: string;
  category: string;
  emoji: string;
  tagline: string;
  description: string;
  tags: string[];
  website: string;
  pricing: "Free" | "Freemium" | "Paid";
  openSource: boolean;
}

export const categories = [
  { name: "All Tools", emoji: "🌐" },
  { name: "General Autonomous", emoji: "⚡" },
  { name: "Coding & Dev", emoji: "🛠" },
  { name: "Browser & Computer", emoji: "🌐" },
  { name: "Research & Analysis", emoji: "🔬" },
  { name: "Multi-Agent Frameworks", emoji: "🤝" },
  { name: "Data & Analytics", emoji: "📊" },
  { name: "Voice & Conversational", emoji: "🎙" },
  { name: "Workflow & RPA", emoji: "🔄" },
  { name: "AI Assistants", emoji: "🧠" },
  { name: "Image & Design", emoji: "🎨" },
  { name: "Writing & Content", emoji: "✍️" },
];

/** Extract the domain from a URL for favicon fetching */
export function getFaviconUrl(website: string): string {
  try {
    const url = new URL(website);
    return `https://www.google.com/s2/favicons?domain=${url.hostname}&sz=64`;
  } catch {
    return "";
  }
}

export const agents: Agent[] = [
  // ⚡ General Autonomous
  { id: "manus-ai", name: "Manus AI", category: "General Autonomous", emoji: "🤖", tagline: "World's first truly autonomous AI agent", description: "Browses web, writes code, and manages files end-to-end with full autonomy.", tags: ["autonomous", "web-browse", "code"], website: "https://manus.im", pricing: "Freemium", openSource: false },
  { id: "openmanus", name: "OpenManus", category: "General Autonomous", emoji: "🔓", tagline: "Open-source Manus alternative", description: "Full customization and no licensing fees with open-source Manus alternative.", tags: ["autonomous", "open-source"], website: "https://github.com/manusai/openmanus", pricing: "Free", openSource: true },
  { id: "autogpt", name: "AutoGPT", category: "General Autonomous", emoji: "🧠", tagline: "Pioneering autonomous agent", description: "Chains GPT-4 tasks using memory and web search for autonomous execution.", tags: ["autonomous", "gpt4", "open-source"], website: "https://agpt.co", pricing: "Free", openSource: true },
  { id: "babyagi", name: "BabyAGI", category: "General Autonomous", emoji: "👶", tagline: "Lightweight task-driven agent", description: "Uses LLMs and vector DB to manage complex goal queues autonomously.", tags: ["task-queue", "open-source"], website: "https://github.com/yoheinakajima/babyagi", pricing: "Free", openSource: true },
  { id: "agentgpt", name: "AgentGPT", category: "General Autonomous", emoji: "🚀", tagline: "Browser-based no-code autonomous agent", description: "Set a goal, watch it execute — no code required, runs in your browser.", tags: ["no-code", "web-based"], website: "https://agentgpt.reworkd.ai", pricing: "Freemium", openSource: false },
  { id: "superagi", name: "SuperAGI", category: "General Autonomous", emoji: "🦸", tagline: "Open-source multi-agent framework", description: "Run multiple concurrent autonomous agents with a beautiful GUI.", tags: ["framework", "multi-agent", "open-source"], website: "https://superagi.com", pricing: "Free", openSource: true },
  { id: "agenticseek", name: "AgenticSeek", category: "General Autonomous", emoji: "🔒", tagline: "100% local private Manus clone", description: "Runs on your hardware with zero API cost — fully private and local.", tags: ["local", "private", "open-source"], website: "https://github.com/Fosowl/agenticSeek", pricing: "Free", openSource: true },
  { id: "godmode", name: "GodMode", category: "General Autonomous", emoji: "⚡", tagline: "Generative AI web interface", description: "Access AutoGPT and BabyAGI through a sleek web interface with no setup.", tags: ["web-based", "no-code"], website: "https://godmode.space", pricing: "Free", openSource: true },
  { id: "cognosys", name: "Cognosys", category: "General Autonomous", emoji: "🧩", tagline: "Web-based AI agent platform", description: "Deploy autonomous agents that browse, research, and complete complex tasks.", tags: ["autonomous", "web-based"], website: "https://cognosys.ai", pricing: "Freemium", openSource: false },

  // 🛠 Coding & Dev
  { id: "claude-code", name: "Claude Code", category: "Coding & Dev", emoji: "💻", tagline: "Anthropic's agentic CLI assistant", description: "Reads, writes, and executes code across your entire codebase from terminal.", tags: ["CLI", "Anthropic", "terminal"], website: "https://claude.ai/code", pricing: "Paid", openSource: false },
  { id: "devin", name: "Devin", category: "Coding & Dev", emoji: "👨‍💻", tagline: "First fully autonomous AI software engineer", description: "Plans, codes, tests, and deploys — a complete AI software engineer.", tags: ["SWE", "autonomous"], website: "https://cognition.ai", pricing: "Paid", openSource: false },
  { id: "swe-agent", name: "SWE-agent", category: "Coding & Dev", emoji: "🔧", tagline: "Princeton research agent", description: "Resolves GitHub issues autonomously using a custom shell interface.", tags: ["research", "open-source", "github"], website: "https://swe-agent.com", pricing: "Free", openSource: true },
  { id: "openhands", name: "OpenHands", category: "Coding & Dev", emoji: "✋", tagline: "Open-source AI dev agent", description: "Writes code, runs commands, and browses web — fully open source.", tags: ["open-source", "SWE"], website: "https://github.com/All-Hands-AI/OpenHands", pricing: "Free", openSource: true },
  { id: "github-copilot", name: "GitHub Copilot Agent", category: "Coding & Dev", emoji: "🐙", tagline: "Multi-file autonomous coding agent", description: "Deeply integrated into VS Code for autonomous multi-file editing.", tags: ["IDE", "VSCode"], website: "https://github.com/features/copilot", pricing: "Paid", openSource: false },
  { id: "aider", name: "Aider", category: "Coding & Dev", emoji: "🤝", tagline: "CLI AI pair programmer", description: "Directly edits your local git repository files from the command line.", tags: ["CLI", "git", "open-source"], website: "https://aider.chat", pricing: "Free", openSource: true },
  { id: "cursor", name: "Cursor", category: "Coding & Dev", emoji: "✨", tagline: "AI-first code editor", description: "Agentic Composer mode for autonomous multi-file edits in a modern IDE.", tags: ["IDE", "agentic"], website: "https://cursor.com", pricing: "Freemium", openSource: false },
  { id: "lovable", name: "Lovable", category: "Coding & Dev", emoji: "💜", tagline: "AI full-stack web app builder", description: "Build production-ready web apps with natural language — deploy instantly.", tags: ["no-code", "full-stack", "web"], website: "https://lovable.dev", pricing: "Freemium", openSource: false },
  { id: "bolt", name: "Bolt.new", category: "Coding & Dev", emoji: "⚡", tagline: "AI-powered web dev environment", description: "Prompt, edit, and deploy full-stack web apps directly in the browser.", tags: ["web", "full-stack"], website: "https://bolt.new", pricing: "Freemium", openSource: false },
  { id: "replit-agent", name: "Replit Agent", category: "Coding & Dev", emoji: "🔄", tagline: "Build apps from natural language", description: "Describe what you want and Replit Agent builds, deploys, and iterates on it.", tags: ["no-code", "full-stack"], website: "https://replit.com", pricing: "Freemium", openSource: false },
  { id: "codeium", name: "Codeium / Windsurf", category: "Coding & Dev", emoji: "🏄", tagline: "AI-powered code acceleration", description: "Free AI code completion and chat with deep codebase understanding.", tags: ["IDE", "free", "autocomplete"], website: "https://codeium.com", pricing: "Freemium", openSource: false },
  { id: "tabnine", name: "Tabnine", category: "Coding & Dev", emoji: "🔮", tagline: "AI code assistant for teams", description: "Privacy-focused AI code completions that run on your infrastructure.", tags: ["IDE", "private", "enterprise"], website: "https://tabnine.com", pricing: "Freemium", openSource: false },
  { id: "continue", name: "Continue", category: "Coding & Dev", emoji: "▶️", tagline: "Open-source AI code assistant", description: "Customizable open-source autopilot for VS Code and JetBrains.", tags: ["open-source", "IDE"], website: "https://continue.dev", pricing: "Free", openSource: true },

  // 🌐 Browser & Computer
  { id: "claude-computer-use", name: "Claude Computer Use", category: "Browser & Computer", emoji: "🖥", tagline: "Anthropic's computer control agent", description: "Sees your screen, clicks, types, and controls any app autonomously.", tags: ["vision", "computer-control"], website: "https://anthropic.com", pricing: "Paid", openSource: false },
  { id: "openai-operator", name: "OpenAI Operator", category: "Browser & Computer", emoji: "🌍", tagline: "OpenAI's browser agent", description: "Navigates websites and completes real-world tasks autonomously for you.", tags: ["browser", "automation"], website: "https://openai.com/operator", pricing: "Paid", openSource: false },
  { id: "browser-use", name: "Browser Use", category: "Browser & Computer", emoji: "🔍", tagline: "Python browser control library", description: "Gives AI agents real Chromium browser control via Playwright.", tags: ["open-source", "Python"], website: "https://browser-use.com", pricing: "Free", openSource: true },
  { id: "multion", name: "Multion", category: "Browser & Computer", emoji: "🦾", tagline: "Personal AI web agent", description: "Surfs the web, fills forms, and completes browser tasks automatically.", tags: ["web", "automation"], website: "https://multion.ai", pricing: "Freemium", openSource: false },
  { id: "skyvern", name: "Skyvern", category: "Browser & Computer", emoji: "👁", tagline: "Vision-powered web automation", description: "Understands page structure visually for intelligent web automation.", tags: ["vision", "workflow"], website: "https://skyvern.com", pricing: "Freemium", openSource: false },
  { id: "hyperwrite", name: "HyperWrite Agent", category: "Browser & Computer", emoji: "✍️", tagline: "AI personal assistant in browser", description: "Chrome extension that automates web tasks like booking, shopping, and research.", tags: ["browser", "extension"], website: "https://hyperwriteai.com", pricing: "Freemium", openSource: false },

  // 🔬 Research & Analysis
  { id: "openai-deep-research", name: "OpenAI Deep Research", category: "Research & Analysis", emoji: "🔎", tagline: "Multi-hour autonomous web research", description: "o3-powered agent performing deep web research and writing full reports.", tags: ["research", "web-search"], website: "https://openai.com", pricing: "Paid", openSource: false },
  { id: "claude-research", name: "Claude Research Mode", category: "Research & Analysis", emoji: "📚", tagline: "Iterative research agent", description: "Searches, reads, and synthesizes multi-source web content iteratively.", tags: ["research", "Anthropic"], website: "https://claude.ai", pricing: "Paid", openSource: false },
  { id: "perplexity", name: "Perplexity Pro", category: "Research & Analysis", emoji: "🔮", tagline: "Real-time AI search engine", description: "Agentic research with real-time web search and source citations.", tags: ["search", "real-time"], website: "https://perplexity.ai", pricing: "Freemium", openSource: false },
  { id: "gemini-deep-research", name: "Gemini Deep Research", category: "Research & Analysis", emoji: "💎", tagline: "Google's research agent", description: "Browses hundreds of pages to synthesize comprehensive research reports.", tags: ["research", "Google"], website: "https://gemini.google.com", pricing: "Freemium", openSource: false },
  { id: "elicit", name: "Elicit", category: "Research & Analysis", emoji: "🎓", tagline: "Academic literature review agent", description: "Finds and summarizes scientific papers at scale for literature reviews.", tags: ["academic", "papers"], website: "https://elicit.com", pricing: "Freemium", openSource: false },
  { id: "consensus", name: "Consensus", category: "Research & Analysis", emoji: "📄", tagline: "AI-powered academic search", description: "Search engine that finds and synthesizes scientific research with evidence-based answers.", tags: ["academic", "search"], website: "https://consensus.app", pricing: "Freemium", openSource: false },
  { id: "scispace", name: "SciSpace", category: "Research & Analysis", emoji: "🔬", tagline: "AI research assistant", description: "Understand, explain, and extract insights from any scientific paper instantly.", tags: ["academic", "papers"], website: "https://typeset.io", pricing: "Freemium", openSource: false },
  { id: "you-research", name: "You.com Research", category: "Research & Analysis", emoji: "🔍", tagline: "AI search with research mode", description: "Multi-step AI research with citations, summarization, and follow-up questions.", tags: ["search", "research"], website: "https://you.com", pricing: "Freemium", openSource: false },

  // 🤝 Multi-Agent Frameworks
  { id: "autogen", name: "AutoGen", category: "Multi-Agent Frameworks", emoji: "🔗", tagline: "Microsoft multi-agent framework", description: "Multi-agent conversations where LLM agents collaborate on complex tasks.", tags: ["framework", "Microsoft", "open-source"], website: "https://microsoft.github.io/autogen", pricing: "Free", openSource: true },
  { id: "crewai", name: "CrewAI", category: "Multi-Agent Frameworks", emoji: "👥", tagline: "Role-based agent framework", description: "AI agents work as a crew with defined roles, goals, and backstories.", tags: ["role-based", "orchestration"], website: "https://crewai.com", pricing: "Freemium", openSource: false },
  { id: "langgraph", name: "LangGraph", category: "Multi-Agent Frameworks", emoji: "📈", tagline: "Graph-based multi-agent framework", description: "Stateful multi-agent framework with memory and human-in-the-loop support.", tags: ["graph", "stateful", "open-source"], website: "https://langchain-ai.github.io/langgraph", pricing: "Free", openSource: true },
  { id: "metagpt", name: "MetaGPT", category: "Multi-Agent Frameworks", emoji: "🏢", tagline: "Simulated software company", description: "Multi-agent framework simulating PM, Engineer, and QA roles.", tags: ["simulated-org", "open-source"], website: "https://metagpt.ai", pricing: "Free", openSource: true },
  { id: "camel-ai", name: "Camel AI", category: "Multi-Agent Frameworks", emoji: "🐫", tagline: "Role-playing agent framework", description: "Cooperative agents using role-playing for autonomous problem solving.", tags: ["role-play", "open-source"], website: "https://camel-ai.org", pricing: "Free", openSource: true },
  { id: "langchain", name: "LangChain", category: "Multi-Agent Frameworks", emoji: "🔗", tagline: "LLM application framework", description: "Build context-aware, reasoning LLM applications with chains, agents, and tools.", tags: ["framework", "open-source", "chains"], website: "https://langchain.com", pricing: "Free", openSource: true },
  { id: "llamaindex", name: "LlamaIndex", category: "Multi-Agent Frameworks", emoji: "🦙", tagline: "Data framework for LLMs", description: "Connect custom data sources to LLMs with indexing, retrieval, and agents.", tags: ["data", "RAG", "open-source"], website: "https://llamaindex.ai", pricing: "Free", openSource: true },
  { id: "semantic-kernel", name: "Semantic Kernel", category: "Multi-Agent Frameworks", emoji: "🔷", tagline: "Microsoft's AI orchestration SDK", description: "Integrate LLMs into C#, Python, and Java apps with plugins and planners.", tags: ["Microsoft", "SDK", "open-source"], website: "https://learn.microsoft.com/en-us/semantic-kernel", pricing: "Free", openSource: true },

  // 📊 Data & Analytics
  { id: "julius-ai", name: "Julius AI", category: "Data & Analytics", emoji: "📊", tagline: "Upload CSV — get insights", description: "Upload CSV or Excel — Julius writes Python, runs analysis, and explains insights.", tags: ["data", "no-code", "charts"], website: "https://julius.ai", pricing: "Freemium", openSource: false },
  { id: "code-interpreter", name: "ChatGPT Code Interpreter", category: "Data & Analytics", emoji: "🐍", tagline: "Sandboxed Python agent", description: "OpenAI's sandboxed Python agent for autonomous data analysis and visualization.", tags: ["Python", "sandbox", "data"], website: "https://openai.com", pricing: "Paid", openSource: false },
  { id: "hex-magic", name: "Hex Magic AI", category: "Data & Analytics", emoji: "✨", tagline: "AI notebook assistant", description: "Generates SQL/Python cells and auto-fixes errors in data notebooks.", tags: ["notebook", "SQL"], website: "https://hex.tech", pricing: "Freemium", openSource: false },
  { id: "rows-ai", name: "Rows AI", category: "Data & Analytics", emoji: "📋", tagline: "AI-powered spreadsheets", description: "Spreadsheet with built-in AI analyst — ask questions, get charts and summaries.", tags: ["spreadsheet", "no-code"], website: "https://rows.com", pricing: "Freemium", openSource: false },
  { id: "obviously-ai", name: "Obviously AI", category: "Data & Analytics", emoji: "🎯", tagline: "No-code ML predictions", description: "Build and deploy ML models in minutes without writing any code.", tags: ["ML", "no-code", "predictions"], website: "https://obviously.ai", pricing: "Freemium", openSource: false },

  // 🎙 Voice & Conversational
  { id: "vapi", name: "Vapi", category: "Voice & Conversational", emoji: "📞", tagline: "Voice AI agent platform", description: "Developer platform for building low-latency voice AI agents with custom LLMs.", tags: ["voice", "API", "real-time"], website: "https://vapi.ai", pricing: "Paid", openSource: false },
  { id: "bland-ai", name: "Bland AI", category: "Voice & Conversational", emoji: "📱", tagline: "Automated phone call AI", description: "Automated phone call AI agent for outbound/inbound sales and support.", tags: ["phone", "sales", "automation"], website: "https://bland.ai", pricing: "Paid", openSource: false },
  { id: "retell-ai", name: "Retell AI", category: "Voice & Conversational", emoji: "🎤", tagline: "Production voice agent platform", description: "Ultra-low latency voice agents with telephony integrations.", tags: ["voice", "telephony"], website: "https://retell.ai", pricing: "Paid", openSource: false },
  { id: "openai-realtime", name: "OpenAI Realtime API", category: "Voice & Conversational", emoji: "🔊", tagline: "Speech-to-speech API", description: "Low-latency speech-to-speech API for real-time conversational voice agents.", tags: ["voice", "speech-to-speech"], website: "https://platform.openai.com", pricing: "Paid", openSource: false },
  { id: "eleven-labs", name: "ElevenLabs", category: "Voice & Conversational", emoji: "🗣", tagline: "AI voice synthesis & cloning", description: "Generate realistic AI voices and clone any voice with high fidelity.", tags: ["voice", "TTS", "cloning"], website: "https://elevenlabs.io", pricing: "Freemium", openSource: false },
  { id: "play-ht", name: "Play.ht", category: "Voice & Conversational", emoji: "▶️", tagline: "AI voice generator", description: "Ultra-realistic text-to-speech with voice cloning for content creators.", tags: ["TTS", "voice", "content"], website: "https://play.ht", pricing: "Freemium", openSource: false },

  // 🔄 Workflow & RPA
  { id: "n8n", name: "n8n AI Agent", category: "Workflow & RPA", emoji: "⚙️", tagline: "Self-hostable workflow platform", description: "Native AI agent nodes with memory and LLM reasoning in workflows.", tags: ["workflow", "open-source", "self-host"], website: "https://n8n.io", pricing: "Free", openSource: true },
  { id: "zapier-ai", name: "Zapier AI", category: "Workflow & RPA", emoji: "⚡", tagline: "Natural language automation", description: "Trigger 6,000+ app automations using natural language commands.", tags: ["no-code", "automation"], website: "https://zapier.com/ai", pricing: "Freemium", openSource: false },
  { id: "lindy-ai", name: "Lindy AI", category: "Workflow & RPA", emoji: "🤖", tagline: "No-code AI assistant", description: "Manages inbox, schedules meetings, and updates CRM automatically.", tags: ["no-code", "email", "CRM"], website: "https://lindy.ai", pricing: "Freemium", openSource: false },
  { id: "uipath", name: "UiPath Autopilot", category: "Workflow & RPA", emoji: "🏭", tagline: "Enterprise RPA + AI agent", description: "Automates complex judgment-intensive business processes at enterprise scale.", tags: ["RPA", "enterprise"], website: "https://uipath.com", pricing: "Paid", openSource: false },
  { id: "make", name: "Make (Integromat)", category: "Workflow & RPA", emoji: "🔧", tagline: "Visual automation platform", description: "Design, build, and automate workflows visually with 1500+ app integrations.", tags: ["automation", "no-code", "visual"], website: "https://make.com", pricing: "Freemium", openSource: false },
  { id: "activepieces", name: "Activepieces", category: "Workflow & RPA", emoji: "🧩", tagline: "Open-source automation tool", description: "Open-source no-code business automation with AI-powered pieces.", tags: ["open-source", "automation", "no-code"], website: "https://activepieces.com", pricing: "Free", openSource: true },

  // 🧠 AI Assistants
  { id: "chatgpt", name: "ChatGPT", category: "AI Assistants", emoji: "💬", tagline: "OpenAI's conversational AI", description: "The most popular AI assistant for conversations, writing, analysis, and coding.", tags: ["chat", "general", "GPT"], website: "https://chat.openai.com", pricing: "Freemium", openSource: false },
  { id: "claude", name: "Claude", category: "AI Assistants", emoji: "🟠", tagline: "Anthropic's AI assistant", description: "Thoughtful AI assistant excelling at analysis, writing, and long-context tasks.", tags: ["chat", "Anthropic", "analysis"], website: "https://claude.ai", pricing: "Freemium", openSource: false },
  { id: "gemini", name: "Gemini", category: "AI Assistants", emoji: "💎", tagline: "Google's multimodal AI", description: "Google's most capable AI with multimodal understanding across text, images, and code.", tags: ["multimodal", "Google"], website: "https://gemini.google.com", pricing: "Freemium", openSource: false },
  { id: "copilot", name: "Microsoft Copilot", category: "AI Assistants", emoji: "🔷", tagline: "AI companion by Microsoft", description: "AI assistant integrated across Microsoft 365 apps for work productivity.", tags: ["Microsoft", "productivity"], website: "https://copilot.microsoft.com", pricing: "Freemium", openSource: false },
  { id: "poe", name: "Poe", category: "AI Assistants", emoji: "🤖", tagline: "Multi-model AI platform", description: "Access ChatGPT, Claude, Gemini, and more models all in one place.", tags: ["multi-model", "aggregator"], website: "https://poe.com", pricing: "Freemium", openSource: false },
  { id: "pi", name: "Pi by Inflection", category: "AI Assistants", emoji: "🥧", tagline: "Personal AI companion", description: "Empathetic and supportive AI designed for personal conversations and emotional support.", tags: ["personal", "empathy"], website: "https://pi.ai", pricing: "Free", openSource: false },

  // 🎨 Image & Design
  { id: "midjourney", name: "Midjourney", category: "Image & Design", emoji: "🎨", tagline: "AI image generation", description: "Create stunning artwork and images from text prompts with unmatched quality.", tags: ["image", "art", "generation"], website: "https://midjourney.com", pricing: "Paid", openSource: false },
  { id: "dall-e", name: "DALL·E 3", category: "Image & Design", emoji: "🖼", tagline: "OpenAI's image generator", description: "Generate and edit images from natural language descriptions with high fidelity.", tags: ["image", "OpenAI"], website: "https://openai.com/dall-e-3", pricing: "Paid", openSource: false },
  { id: "stable-diffusion", name: "Stable Diffusion", category: "Image & Design", emoji: "🌊", tagline: "Open-source image generation", description: "Run powerful image generation locally with full control and customization.", tags: ["image", "open-source", "local"], website: "https://stability.ai", pricing: "Free", openSource: true },
  { id: "canva-ai", name: "Canva AI", category: "Image & Design", emoji: "🎯", tagline: "AI-powered design platform", description: "Generate designs, images, presentations, and videos with AI magic tools.", tags: ["design", "no-code"], website: "https://canva.com", pricing: "Freemium", openSource: false },
  { id: "figma-ai", name: "Figma AI", category: "Image & Design", emoji: "🖌", tagline: "AI features in Figma", description: "AI-powered design tools for auto-layout, content generation, and prototyping.", tags: ["design", "UI/UX"], website: "https://figma.com", pricing: "Freemium", openSource: false },
  { id: "leonardo-ai", name: "Leonardo AI", category: "Image & Design", emoji: "🎭", tagline: "AI creative suite", description: "Generate production-quality images, 3D textures, and game assets with AI.", tags: ["image", "gaming", "3D"], website: "https://leonardo.ai", pricing: "Freemium", openSource: false },

  // ✍️ Writing & Content
  { id: "jasper", name: "Jasper", category: "Writing & Content", emoji: "✍️", tagline: "AI marketing content platform", description: "Generate marketing copy, blog posts, and brand content at scale.", tags: ["marketing", "copywriting"], website: "https://jasper.ai", pricing: "Paid", openSource: false },
  { id: "copy-ai", name: "Copy.ai", category: "Writing & Content", emoji: "📝", tagline: "AI-powered copywriting", description: "Generate high-converting marketing copy, emails, and social media content.", tags: ["copywriting", "marketing"], website: "https://copy.ai", pricing: "Freemium", openSource: false },
  { id: "writesonic", name: "Writesonic", category: "Writing & Content", emoji: "🚀", tagline: "AI writing & SEO platform", description: "Create SEO-optimized content, blog posts, and ads with AI assistance.", tags: ["SEO", "writing", "content"], website: "https://writesonic.com", pricing: "Freemium", openSource: false },
  { id: "notion-ai", name: "Notion AI", category: "Writing & Content", emoji: "📓", tagline: "AI writing in Notion", description: "Summarize, brainstorm, draft, and edit content directly inside Notion.", tags: ["productivity", "writing"], website: "https://notion.so", pricing: "Paid", openSource: false },
  { id: "grammarly", name: "Grammarly", category: "Writing & Content", emoji: "✅", tagline: "AI writing assistant", description: "AI-powered writing assistant for grammar, clarity, tone, and style improvements.", tags: ["grammar", "writing"], website: "https://grammarly.com", pricing: "Freemium", openSource: false },
  { id: "otter-ai", name: "Otter.ai", category: "Writing & Content", emoji: "🦦", tagline: "AI meeting transcription", description: "Automatically transcribe meetings, generate summaries, and extract action items.", tags: ["transcription", "meetings"], website: "https://otter.ai", pricing: "Freemium", openSource: false },
];
