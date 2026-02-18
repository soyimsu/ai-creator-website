"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import t from "@/i18n/translations";

export default function AboutPage() {
  const { lang } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Avatar & Intro */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-warm-200 to-pink-200 flex items-center justify-center shrink-0">
          <span className="text-5xl">👤</span>
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold text-text-primary mb-3">{t.about.greeting[lang]}</h1>
          <p className="text-text-secondary leading-relaxed">{t.about.intro[lang]}</p>
        </div>
      </div>

      {/* Career Timeline */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-text-primary mb-8">{t.about.experienceTitle[lang]}</h2>
        <div className="space-y-8">
          {t.timeline.map((item, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-warm-100 flex items-center justify-center text-warm-600 font-bold text-xs">
                  {item.year}
                </div>
                {index < t.timeline.length - 1 && (
                  <div className="w-0.5 flex-1 bg-warm-100 mt-2" />
                )}
              </div>
              <div className="pb-8">
                <h3 className="font-semibold text-text-primary mb-1">{item.title[lang]}</h3>
                <p className="text-sm text-text-secondary">{item.description[lang]}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AI Philosophy */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-text-primary mb-4">{t.about.philosophyTitle[lang]}</h2>
        <div className="bg-warm-50 rounded-2xl p-6 md:p-8">
          <p className="text-text-secondary leading-relaxed">{t.about.philosophy[lang]}</p>
        </div>
      </section>

      {/* Xiaohongshu CTA */}
      <section className="text-center bg-gradient-to-br from-pink-50 to-warm-50 rounded-2xl p-8 md:p-12">
        <h2 className="text-2xl font-bold text-text-primary mb-3">{t.about.xiaohongshuTitle[lang]}</h2>
        <p className="text-text-secondary mb-6">{t.about.xiaohongshuSubtitle[lang]}</p>
        <a
          href="https://www.xiaohongshu.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-pink-400 text-white rounded-full font-medium hover:bg-pink-500 transition-colors"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
          {t.about.xiaohongshuCta[lang]}
        </a>
      </section>
    </div>
  );
}
