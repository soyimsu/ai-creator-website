const translations = {
  // Header & Nav
  nav: {
    tutorials: { zh: "教程文章", en: "Tutorials" },
    resources: { zh: "资源推荐", en: "Resources" },
    about: { zh: "关于我", en: "About" },
  },

  // Footer
  footer: {
    rights: { zh: "保留所有权利", en: "All rights reserved" },
    xiaohongshu: { zh: "小红书", en: "Xiaohongshu" },
  },

  // Home Page
  home: {
    bannerTitle: {
      zh: "用 AI 赋能你的职场与生活",
      en: "Empower Your Career & Life with AI",
    },
    bannerSubtitle: {
      zh: "分享实用的 AI 教程、提示词技巧和优质资源，帮助你在 AI 时代保持竞争力",
      en: "Sharing practical AI tutorials, prompt tips and quality resources to help you stay competitive in the AI era",
    },
    bannerCta: { zh: "开始探索", en: "Start Exploring" },
    latestArticles: { zh: "最新教程文章", en: "Latest Tutorials" },
    viewAll: { zh: "查看全部", en: "View All" },
    featuredResources: { zh: "精选资源推荐", en: "Featured Resources" },
    learnMore: { zh: "了解更多", en: "Learn More" },
  },

  // Tutorials Page
  tutorials: {
    title: { zh: "教程文章", en: "Tutorials" },
    subtitle: { zh: "探索 AI 实用教程，提升你的技能", en: "Explore practical AI tutorials to level up your skills" },
    categoryAll: { zh: "全部", en: "All" },
    categoryPrompts: { zh: "提示词", en: "Prompts" },
    categorySkills: { zh: "Skills", en: "Skills" },
    categoryInvestment: { zh: "AI+投资", en: "AI + Investment" },
    backToList: { zh: "\u2190 返回文章列表", en: "\u2190 Back to Tutorials" },
  },

  // Resources Page
  resources: {
    title: { zh: "资源推荐", en: "Resources" },
    subtitle: { zh: "精选优质 AI 工具和资源，助你高效工作", en: "Curated AI tools and resources to boost your productivity" },
    visitLink: { zh: "访问链接", en: "Visit" },
    clearFilter: { zh: "清除筛选", en: "Clear" },
  },

  // Resource tag labels (bilingual)
  tagLabels: {
    free: { zh: "免费", en: "Free" },
    freemium: { zh: "免费增值", en: "Freemium" },
    paid: { zh: "付费", en: "Paid" },
    chinese: { zh: "中文", en: "Chinese" },
    english: { zh: "英文", en: "English" },
    beginner: { zh: "入门友好", en: "Beginner" },
    writing: { zh: "写作", en: "Writing" },
    coding: { zh: "编程", en: "Coding" },
    design: { zh: "设计", en: "Design" },
    research: { zh: "搜索研究", en: "Research" },
    productivity: { zh: "效率工具", en: "Productivity" },
  } as Record<string, { zh: string; en: string }>,

  // About Page
  about: {
    greeting: { zh: "你好，我是 AI Creator", en: "Hi, I'm AI Creator" },
    intro: {
      zh: "一个热爱 AI 的内容创作者，致力于将复杂的 AI 技术转化为人人都能理解和使用的实用教程。在这里，你可以找到关于提示词工程、AI 工作技巧和 AI 投资分析的各类内容。",
      en: "A passionate AI content creator dedicated to transforming complex AI technologies into practical tutorials everyone can understand and use. Here you'll find content on prompt engineering, AI productivity tips, and AI-powered investment analysis.",
    },
    experienceTitle: { zh: "我的经历", en: "My Journey" },
    philosophyTitle: { zh: "我的 AI 创作理念", en: "My AI Philosophy" },
    philosophy: {
      zh: "我相信 AI 不是替代人类的工具，而是赋能每个人的助手。通过分享实用的教程和经验，我希望帮助更多职场人拥抱 AI 技术，在工作和生活中获得更多可能性。无论你是 AI 新手还是有一定基础，这里都有适合你的内容。",
      en: "I believe AI is not a tool to replace humans, but an assistant to empower everyone. By sharing practical tutorials and experiences, I hope to help more professionals embrace AI technology and unlock new possibilities in work and life. Whether you're an AI beginner or have some experience, there's something here for you.",
    },
    xiaohongshuTitle: { zh: "关注我的小红书", en: "Follow Me on Xiaohongshu" },
    xiaohongshuSubtitle: {
      zh: "在小红书上获取更多 AI 使用技巧和日常分享",
      en: "Get more AI tips and daily insights on Xiaohongshu",
    },
    xiaohongshuCta: { zh: "前往小红书主页", en: "Visit My Xiaohongshu" },
  },

  // Article data (content stored separately in articleContent.ts)
  articles: [
    { id: 1, slug: "chatgpt-prompt-engineering-guide", title: { zh: "ChatGPT 提示词工程完全指南", en: "The Complete Guide to ChatGPT Prompt Engineering" }, category: "prompts", date: "2026-02-15", excerpt: { zh: "从零开始学习如何编写高效的提示词，提升 AI 输出质量。", en: "Learn how to write effective prompts from scratch and improve AI output quality." } },
    { id: 2, slug: "ai-stock-fundamental-analysis", title: { zh: "用 AI 分析股票基本面数据", en: "Analyzing Stock Fundamentals with AI" }, category: "investment", date: "2026-02-14", excerpt: { zh: "利用 AI 工具快速分析公司财报和基本面指标。", en: "Use AI tools to quickly analyze company financials and fundamental indicators." } },
    { id: 3, slug: "5-ai-workflows-productivity", title: { zh: "5 个让你效率翻倍的 AI 工作流", en: "5 AI Workflows to Double Your Productivity" }, category: "skills", date: "2026-02-12", excerpt: { zh: "分享 5 个经过验证的 AI 工作流，适合各类职场人。", en: "Sharing 5 proven AI workflows suitable for all professionals." } },
    { id: 4, slug: "midjourney-prompt-templates", title: { zh: "Midjourney 提示词模板大全", en: "Ultimate Midjourney Prompt Templates Collection" }, category: "prompts", date: "2026-02-10", excerpt: { zh: "收录 50+ 实用的 Midjourney 提示词模板，覆盖多种风格。", en: "50+ practical Midjourney prompt templates covering multiple styles." } },
    { id: 5, slug: "ai-quantitative-trading-intro", title: { zh: "AI 量化交易入门", en: "Getting Started with AI Quantitative Trading" }, category: "investment", date: "2026-02-08", excerpt: { zh: "了解如何利用 AI 构建简单的量化交易策略。", en: "Learn how to build simple quantitative trading strategies with AI." } },
    { id: 6, slug: "claude-professional-writing-tips", title: { zh: "用 Claude 写专业文档的技巧", en: "Tips for Writing Professional Documents with Claude" }, category: "skills", date: "2026-02-06", excerpt: { zh: "掌握用 Claude 撰写报告、邮件和文档的高效方法。", en: "Master efficient methods for writing reports, emails and documents with Claude." } },
  ],

  // Resource data (bilingual)
  resourceItems: [
    { id: 1, name: "ChatGPT", tags: ["freemium", "chinese", "english", "beginner", "writing", "coding"], description: { zh: "OpenAI 的对话式 AI 助手，适合文本生成、翻译、编程等多种场景", en: "OpenAI's conversational AI assistant for text generation, translation, coding and more" }, link: "#" },
    { id: 2, name: "Claude", tags: ["freemium", "chinese", "english", "writing", "coding", "research"], description: { zh: "Anthropic 的 AI 助手，擅长长文分析和复杂推理", en: "Anthropic's AI assistant, excelling at long-form analysis and complex reasoning" }, link: "#" },
    { id: 3, name: "Midjourney", tags: ["paid", "english", "design"], description: { zh: "强大的 AI 图像生成工具，适合创意设计和视觉内容", en: "Powerful AI image generation tool for creative design and visual content" }, link: "#" },
    { id: 4, name: "Notion AI", tags: ["freemium", "chinese", "english", "beginner", "productivity"], description: { zh: "集成 AI 的知识管理和协作平台，提升团队效率", en: "AI-integrated knowledge management and collaboration platform" }, link: "#" },
    { id: 5, name: "Perplexity", tags: ["free", "english", "beginner", "research"], description: { zh: "AI 驱动的搜索引擎，快速获取准确信息", en: "AI-powered search engine for fast and accurate information retrieval" }, link: "#" },
    { id: 6, name: "Cursor", tags: ["freemium", "english", "coding"], description: { zh: "AI 辅助编程的代码编辑器，大幅提升开发效率", en: "AI-powered code editor that dramatically boosts development productivity" }, link: "#" },
  ],

  // Timeline data (bilingual)
  timeline: [
    { year: "2024", title: { zh: "开始 AI 内容创作", en: "Started AI Content Creation" }, description: { zh: "在小红书分享 AI 使用心得，积累第一批粉丝", en: "Shared AI experiences on Xiaohongshu, built first following" } },
    { year: "2023", title: { zh: "深入研究 AI 应用", en: "Deep Dive into AI Applications" }, description: { zh: "系统学习提示词工程和 AI 工具链", en: "Systematically studied prompt engineering and AI toolchains" } },
    { year: "2022", title: { zh: "接触 AI 领域", en: "First Contact with AI" }, description: { zh: "第一次使用 ChatGPT，被 AI 的潜力深深吸引", en: "First time using ChatGPT, deeply captivated by AI's potential" } },
  ],
} as const;

export default translations;
