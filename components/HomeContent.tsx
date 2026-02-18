"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import t from "@/i18n/translations";
import type { ArticleMeta } from "@/lib/articles";
import FadeInSection from "./FadeInSection";

export default function HomeContent({ articles }: { articles: ArticleMeta[] }) {
  const { lang } = useLanguage();
  const resources = t.resourceItems.slice(0, 3);

  return (
    <div>
      {/* Banner */}
      <section className="bg-gradient-to-br from-warm-100 via-pink-50 to-warm-50 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="animate-fade-in-up text-4xl md:text-5xl font-bold text-text-primary mb-4">
            {t.home.bannerTitle[lang]}
          </h1>
          <p className="animate-fade-in-up-delay text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-8">
            {t.home.bannerSubtitle[lang]}
          </p>
          <Link
            href="/tutorials"
            className="animate-fade-in-up-delay-2 inline-block px-6 py-3 bg-warm-500 text-white rounded-full font-medium hover:bg-warm-600 transition-colors"
          >
            {t.home.bannerCta[lang]}
          </Link>
        </div>
      </section>

      {/* Latest Articles */}
      <FadeInSection>
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-text-primary">{t.home.latestArticles[lang]}</h2>
            <Link href="/tutorials" className="text-warm-500 hover:text-warm-600 font-medium">
              {t.home.viewAll[lang]} &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.map((article) => (
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
                    {article.category === "prompts" ? t.tutorials.categoryPrompts[lang]
                      : article.category === "skills" ? t.tutorials.categorySkills[lang]
                      : t.tutorials.categoryInvestment[lang]}
                  </span>
                  <h3 className="font-semibold text-text-primary mb-2">{article.title[lang]}</h3>
                  <p className="text-sm text-text-secondary">{article.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </FadeInSection>

      {/* Featured Resources */}
      <FadeInSection>
        <section className="bg-warm-50 py-16">
          <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-text-primary">{t.home.featuredResources[lang]}</h2>
            <Link href="/resources" className="text-warm-500 hover:text-warm-600 font-medium">
              {t.home.viewAll[lang]} &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.map((resource) => (
              <a
                key={resource.id}
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl border border-warm-100 p-6 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-warm-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-warm-200 transition-colors">
                  <span className="text-2xl">🔧</span>
                </div>
                <h3 className="font-semibold text-text-primary mb-2 group-hover:text-warm-500 transition-colors">{resource.name}</h3>
                <p className="text-sm text-text-secondary mb-4">{resource.description[lang]}</p>
                <span className="text-warm-500 text-sm font-medium">
                  {t.home.learnMore[lang]} &rarr;
                </span>
              </a>
            ))}
          </div>
          </div>
        </section>
      </FadeInSection>
    </div>
  );
}
