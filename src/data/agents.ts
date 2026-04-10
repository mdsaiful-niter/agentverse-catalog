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
];

export const agents: Agent[] = [
  // General Autonomous
  { id: "manus-ai", name: "Manus AI", category: "General Autonomous", emoji: "🤖", tagline: "World's first truly autonomous AI agent", description: "Browses web, writes code, and manages files end-to-end with full autonomy.", tags: ["autonomous", "web-browse", "code"], website: "https://manus.im", pricing: "Freemium", openSource: false },
  { id: "openmanus", name: "OpenManus", category: "General Autonomous", emoji: "🔓", tagline: "Open-source Manus alternative", description: "Full customization and no licensing fees with open-source Manus alternative.", tags: ["autonomous", "open-source"], website: "https://github.com/manusai/openmanus", pricing: "Free", openSource: true },
  { id: "autogpt", name: "AutoGPT", category: "General Autonomous", emoji: "🧠", tagline: "Pioneering autonomous agent", description: "Chains GPT-4 tasks using memory and web search for autonomous execution.", tags: ["autonomous", "gpt4", "open-source"], website: "https://agpt.co", pricing: "Free", openSource: true },
  { id: "babyagi", name: "BabyAGI", category: "General Autonomous", emoji: "👶", tagline: "Lightweight task-driven agent", description: "Uses LLMs and vector DB to manage complex goal queues autonomously.", tags: ["task-queue", "open-source"], website: "https://github.com/yoheinakajima/babyagi", pricing: "Free", openSource: true },
  { id: "agentgpt", name: "AgentGPT", category: "General Autonomous", emoji: "🚀", tagline: "Browser-based no-code autonomous agent", description: "Set a goal, watch it execute — no code required, runs in your browser.", tags: ["no-code", "web-based"], website: "https://agentgpt.reworkd.ai", pricing: "Freemium", openSource: false },
  { id: "superagi", name: "SuperAGI", category: "General Autonomous", emoji: "🦸", tagline: "Open-source multi-agent framework", description: "Run multiple concurrent autonomous agents with a beautiful GUI.", tags: ["framework", "multi-agent", "open-source"], website: "https://superagi.com", pricing: "Free", openSource: true },
  { id: "agenticseek", name: "AgenticSeek", category: "General Autonomous", emoji: "🔒", tagline: "100% local private Manus clone", description: "Runs on your hardware with zero API cost — fully private and local.", tags: ["local", "private", "open-source"], website: "https://github.com/Fosowl/agenticSeek", pricing: "Free", openSource: true },

  // Coding & Dev
  { id: "claude-code", name: "Claude Code", category: "Coding & Dev", emoji: "💻", tagline: "Anthropic's agentic CLI assistant", description: "Reads, writes, and executes code across your entire codebase from terminal.", tags: ["CLI", "Anthropic", "terminal"], website: "https://claude.ai/code", pricing: "Paid", openSource: false },
  { id: "devin", name: "Devin", category: "Coding & Dev", emoji: "👨‍💻", tagline: "First fully autonomous AI software engineer", description: "Plans, codes, tests, and deploys — a complete AI software engineer.", tags: ["SWE", "autonomous"], website: "https://cognition.ai", pricing: "Paid", openSource: false },
  { id: "swe-agent", name: "SWE-agent", category: "Coding & Dev", emoji: "🔧", tagline: "Princeton research agent", description: "Resolves GitHub issues autonomously using a custom shell interface.", tags: ["research", "open-source", "github"], website: "https://swe-agent.com", pricing: "Free", openSource: true },
  { id: "openhands", name: "OpenHands", category: "Coding & Dev", emoji: "✋", tagline: "Open-source AI dev agent", description: "Writes code, runs commands, and browses web — fully open source.", tags: ["open-source", "SWE"], website: "https://github.com/All-Hands-AI/OpenHands", pricing: "Free", openSource: true },
  { id: "github-copilot", name: "GitHub Copilot Agent", category: "Coding & Dev", emoji: "🐙", tagline: "Multi-file autonomous coding agent", description: "Deeply integrated into VS Code for autonomous multi-file editing.", tags: ["IDE", "VSCode"], website: "https://github.com/features/copilot", pricing: "Paid", openSource: false },
  { id: "aider", name: "Aider", category: "Coding & Dev", emoji: "🤝", tagline: "CLI AI pair programmer", description: "Directly edits your local git repository files from the command line.", tags: ["CLI", "git", "open-source"], website: "https://aider.chat", pricing: "Free", openSource: true },
  { id: "cursor", name: "Cursor", category: "Coding & Dev", emoji: "✨", tagline: "AI-first code editor", description: "Agentic Composer mode for autonomous multi-file edits in a modern IDE.", tags: ["IDE", "agentic"], website: "https://cursor.com", pricing: "Freemium", openSource: false },

  // Browser & Computer
  { id: "claude-computer-use", name: "Claude Computer Use", category: "Browser & Computer", emoji: "🖥", tagline: "Anthropic's computer control agent", description: "Sees your screen, clicks, types, and controls any app autonomously.", tags: ["vision", "computer-control"], website: "https://anthropic.com", pricing: "Paid", openSource: false },
  { id: "openai-operator", name: "OpenAI Operator", category: "Browser & Computer", emoji: "🌍", tagline: "OpenAI's browser agent", description: "Navigates websites and completes real-world tasks autonomously for you.", tags: ["browser", "automation"], website: "https://openai.com/operator", pricing: "Paid", openSource: false },
  { id: "browser-use", name: "Browser Use", category: "Browser & Computer", emoji: "🔍", tagline: "Python browser control library", description: "Gives AI agents real Chromium browser control via Playwright.", tags: ["open-source", "Python"], website: "https://browser-use.com", pricing: "Free", openSource: true },
  { id: "multion", name: "Multion", category: "Browser & Computer", emoji: "🦾", tagline: "Personal AI web agent", description: "Surfs the web, fills forms, and completes browser tasks automatically.", tags: ["web", "automation"], website: "https://multion.ai", pricing: "Freemium", openSource: false },
  { id: "skyvern", name: "Skyvern", category: "Browser & Computer", emoji: "👁", tagline: "Vision-powered web automation", description: "Understands page structure visually for intelligent web automation.", tags: ["vision", "workflow"], website: "https://skyvern.com", pricing: "Freemium", openSource: false },

  // Research & Analysis
  { id: "openai-deep-research", name: "OpenAI Deep Research", category: "Research & Analysis", emoji: "🔎", tagline: "Multi-hour autonomous web research", description: "o3-powered agent performing deep web research and writing full reports.", tags: ["research", "web-search"], website: "https://openai.com", pricing: "Paid", openSource: false },
  { id: "claude-research", name: "Claude Research Mode", category: "Research & Analysis", emoji: "📚", tagline: "Iterative research agent", description: "Searches, reads, and synthesizes multi-source web content iteratively.", tags: ["research", "Anthropic"], website: "https://claude.ai", pricing: "Paid", openSource: false },
  { id: "perplexity", name: "Perplexity Pro", category: "Research & Analysis", emoji: "🔮", tagline: "Real-time AI search engine", description: "Agentic research with real-time web search and source citations.", tags: ["search", "real-time"], website: "https://perplexity.ai", pricing: "Freemium", openSource: false },
  { id: "gemini-deep-research", name: "Gemini Deep Research", category: "Research & Analysis", emoji: "💎", tagline: "Google's research agent", description: "Browses hundreds of pages to synthesize comprehensive research reports.", tags: ["research", "Google"], website: "https://gemini.google.com", pricing: "Freemium", openSource: false },
  { id: "elicit", name: "Elicit", category: "Research & Analysis", emoji: "🎓", tagline: "Academic literature review agent", description: "Finds and summarizes scientific papers at scale for literature reviews.", tags: ["academic", "papers"], website: "https://elicit.com", pricing: "Freemium", openSource: false },

  // Multi-Agent Frameworks
  { id: "autogen", name: "AutoGen", category: "Multi-Agent Frameworks", emoji: "🔗", tagline: "Microsoft multi-agent framework", description: "Multi-agent conversations where LLM agents collaborate on complex tasks.", tags: ["framework", "Microsoft", "open-source"], website: "https://microsoft.github.io/autogen", pricing: "Free", openSource: true },
  { id: "crewai", name: "CrewAI", category: "Multi-Agent Frameworks", emoji: "👥", tagline: "Role-based agent framework", description: "AI agents work as a crew with defined roles, goals, and backstories.", tags: ["role-based", "orchestration"], website: "https://crewai.com", pricing: "Freemium", openSource: false },
  { id: "langgraph", name: "LangGraph", category: "Multi-Agent Frameworks", emoji: "📈", tagline: "Graph-based multi-agent framework", description: "Stateful multi-agent framework with memory and human-in-the-loop support.", tags: ["graph", "stateful", "open-source"], website: "https://langchain-ai.github.io/langgraph", pricing: "Free", openSource: true },
  { id: "metagpt", name: "MetaGPT", category: "Multi-Agent Frameworks", emoji: "🏢", tagline: "Simulated software company", description: "Multi-agent framework simulating PM, Engineer, and QA roles.", tags: ["simulated-org", "open-source"], website: "https://metagpt.ai", pricing: "Free", openSource: true },
  { id: "camel-ai", name: "Camel AI", category: "Multi-Agent Frameworks", emoji: "🐫", tagline: "Role-playing agent framework", description: "Cooperative agents using role-playing for autonomous problem solving.", tags: ["role-play", "open-source"], website: "https://camel-ai.org", pricing: "Free", openSource: true },

  // Data & Analytics
  { id: "julius-ai", name: "Julius AI", category: "Data & Analytics", emoji: "📊", tagline: "Upload CSV — get insights", description: "Upload CSV or Excel — Julius writes Python, runs analysis, and explains insights.", tags: ["data", "no-code", "charts"], website: "https://julius.ai", pricing: "Freemium", openSource: false },
  { id: "code-interpreter", name: "ChatGPT Code Interpreter", category: "Data & Analytics", emoji: "🐍", tagline: "Sandboxed Python agent", description: "OpenAI's sandboxed Python agent for autonomous data analysis and visualization.", tags: ["Python", "sandbox", "data"], website: "https://openai.com", pricing: "Paid", openSource: false },
  { id: "hex-magic", name: "Hex Magic AI", category: "Data & Analytics", emoji: "✨", tagline: "AI notebook assistant", description: "Generates SQL/Python cells and auto-fixes errors in data notebooks.", tags: ["notebook", "SQL"], website: "https://hex.tech", pricing: "Freemium", openSource: false },

  // Voice & Conversational
  { id: "vapi", name: "Vapi", category: "Voice & Conversational", emoji: "📞", tagline: "Voice AI agent platform", description: "Developer platform for building low-latency voice AI agents with custom LLMs.", tags: ["voice", "API", "real-time"], website: "https://vapi.ai", pricing: "Paid", openSource: false },
  { id: "bland-ai", name: "Bland AI", category: "Voice & Conversational", emoji: "📱", tagline: "Automated phone call AI", description: "Automated phone call AI agent for outbound/inbound sales and support.", tags: ["phone", "sales", "automation"], website: "https://bland.ai", pricing: "Paid", openSource: false },
  { id: "retell-ai", name: "Retell AI", category: "Voice & Conversational", emoji: "🎤", tagline: "Production voice agent platform", description: "Ultra-low latency voice agents with telephony integrations.", tags: ["voice", "telephony"], website: "https://retell.ai", pricing: "Paid", openSource: false },
  { id: "openai-realtime", name: "OpenAI Realtime API", category: "Voice & Conversational", emoji: "🔊", tagline: "Speech-to-speech API", description: "Low-latency speech-to-speech API for real-time conversational voice agents.", tags: ["voice", "speech-to-speech"], website: "https://platform.openai.com", pricing: "Paid", openSource: false },

  // Workflow & RPA
  { id: "n8n", name: "n8n AI Agent", category: "Workflow & RPA", emoji: "⚙️", tagline: "Self-hostable workflow platform", description: "Native AI agent nodes with memory and LLM reasoning in workflows.", tags: ["workflow", "open-source", "self-host"], website: "https://n8n.io", pricing: "Free", openSource: true },
  { id: "zapier-ai", name: "Zapier AI", category: "Workflow & RPA", emoji: "⚡", tagline: "Natural language automation", description: "Trigger 6,000+ app automations using natural language commands.", tags: ["no-code", "automation"], website: "https://zapier.com/ai", pricing: "Freemium", openSource: false },
  { id: "lindy-ai", name: "Lindy AI", category: "Workflow & RPA", emoji: "🤖", tagline: "No-code AI assistant", description: "Manages inbox, schedules meetings, and updates CRM automatically.", tags: ["no-code", "email", "CRM"], website: "https://lindy.ai", pricing: "Freemium", openSource: false },
  { id: "uipath", name: "UiPath Autopilot", category: "Workflow & RPA", emoji: "🏭", tagline: "Enterprise RPA + AI agent", description: "Automates complex judgment-intensive business processes at enterprise scale.", tags: ["RPA", "enterprise"], website: "https://uipath.com", pricing: "Paid", openSource: false },
];
