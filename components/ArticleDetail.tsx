"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import t from "@/i18n/translations";
import type { Article } from "@/lib/articles";

export default function ArticleDetail({ article }: { article: Article }) {
  const { lang } = useLanguage();

  const categoryLabels: Record<string, string> = {
    prompts: t.tutorials.categoryPrompts[lang],
    skills: t.tutorials.categorySkills[lang],
    investment: t.tutorials.categoryInvestment[lang],
  };

  const htmlContent = lang === "zh" ? article.contentZh : article.contentEn;

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Link
        href="/tutorials"
        className="inline-block text-warm-500 hover:text-warm-600 font-medium mb-8"
      >
        {t.tutorials.backToList[lang]}
      </Link>

      <header className="mb-10">
        <span className="inline-block px-3 py-1 bg-warm-50 text-warm-600 text-sm font-medium rounded-full mb-4">
          {categoryLabels[article.category]}
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
          {article.title[lang]}
        </h1>
        <p className="text-text-secondary">{article.date}</p>
      </header>

      <div className="h-48 md:h-64 bg-gradient-to-br from-warm-200 to-pink-100 rounded-2xl flex items-center justify-center mb-10">
        <span className="text-6xl">📄</span>
      </div>

      <article
        className="prose prose-warm max-w-none
          [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-text-primary [&_h2]:mt-10 [&_h2]:mb-4
          [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-text-primary [&_h3]:mt-8 [&_h3]:mb-3
          [&_p]:text-text-secondary [&_p]:leading-relaxed [&_p]:mb-4
          [&_ul]:list-disc [&_ul]:list-inside [&_ul]:text-text-secondary [&_ul]:mb-4 [&_ul]:space-y-1
          [&_ol]:list-decimal [&_ol]:list-inside [&_ol]:text-text-secondary [&_ol]:mb-4 [&_ol]:space-y-1
          [&_strong]:font-semibold [&_strong]:text-text-primary
          [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:bg-warm-50 [&_code]:text-warm-600 [&_code]:rounded [&_code]:text-sm
          [&_pre]:bg-gray-900 [&_pre]:text-gray-100 [&_pre]:rounded-xl [&_pre]:p-4 [&_pre]:overflow-x-auto [&_pre]:mb-4
          [&_pre_code]:bg-transparent [&_pre_code]:text-inherit [&_pre_code]:p-0 [&_pre_code]:rounded-none [&_pre_code]:text-sm"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
}
