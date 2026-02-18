"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import t from "@/i18n/translations";

export default function ResourcesPage() {
  const { lang } = useLanguage();

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-text-primary mb-2">{t.resources.title[lang]}</h1>
      <p className="text-text-secondary mb-10">{t.resources.subtitle[lang]}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {t.resourceItems.map((resource) => (
          <a
            key={resource.id}
            href={resource.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-2xl border border-warm-100 p-6 hover:shadow-lg transition-shadow"
          >
            <div className="w-12 h-12 bg-warm-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-warm-200 transition-colors">
              <span className="text-2xl">🔧</span>
            </div>
            <h3 className="font-semibold text-text-primary mb-2 group-hover:text-warm-500 transition-colors">
              {resource.name}
            </h3>
            <p className="text-sm text-text-secondary mb-4">{resource.description[lang]}</p>
            <span className="text-warm-500 text-sm font-medium">
              {t.resources.visitLink[lang]} &rarr;
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
