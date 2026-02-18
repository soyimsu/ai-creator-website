"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import t from "@/i18n/translations";
import type { ArticleMeta } from "@/lib/articles";

const categoryKeys = ["all", "prompts", "skills", "investment"] as const;

export default function TutorialsList({ articles }: { articles: ArticleMeta[] }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const { lang } = useLanguage();

  const categoryLabels: Record<string, string> = {
    all: t.tutorials.categoryAll[lang],
    prompts: t.tutorials.categoryPrompts[lang],
    skills: t.tutorials.categorySkills[lang],
    investment: t.tutorials.categoryInvestment[lang],
  };

  const filteredArticles = activeCategory === "all"
    ? articles
    : articles.filter((a) => a.category === activeCategory);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-text-primary mb-2">{t.tutorials.title[lang]}</h1>
      <p className="text-text-secondary mb-8">{t.tutorials.subtitle[lang]}</p>

      <div className="flex flex-wrap gap-3 mb-10">
        {categoryKeys.map((key) => (
          <button
            key={key}
            onClick={() => setActiveCategory(key)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === key
                ? "bg-warm-500 text-white"
                : "bg-warm-50 text-text-secondary hover:bg-warm-100"
            }`}
          >
            {categoryLabels[key]}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles.map((article) => (
          <Link
            key={article.slug}
            href={`/tutorials/${article.slug}`}
            className="bg-white rounded-2xl border border-warm-100 overflow-hidden hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
          >
            <div className="h-40 bg-gradient-to-br from-warm-200 to-pink-100 flex items-center justify-center">
              <span className="text-4xl">📄</span>
            </div>
            <div className="p-5">
              <span className="inline-block px-2 py-1 bg-warm-50 text-warm-600 text-xs font-medium rounded-full mb-3">
                {categoryLabels[article.category]}
              </span>
              <h3 className="font-semibold text-text-primary mb-2">{article.title[lang]}</h3>
              <p className="text-sm text-text-secondary mb-3 line-clamp-2">{article.excerpt[lang]}</p>
              <p className="text-xs text-text-secondary">{article.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
