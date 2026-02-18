"use client";

import { useState, useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import t from "@/i18n/translations";

export default function ResourcesPage() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const { lang } = useLanguage();

  // Collect all unique tags from resources
  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    t.resourceItems.forEach((r) => r.tags.forEach((tag) => tagSet.add(tag)));
    return Array.from(tagSet);
  }, []);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const filteredResources =
    selectedTags.length === 0
      ? t.resourceItems
      : t.resourceItems.filter((r) =>
          selectedTags.some((tag) => (r.tags as readonly string[]).includes(tag))
        );

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-text-primary mb-2">{t.resources.title[lang]}</h1>
      <p className="text-text-secondary mb-8">{t.resources.subtitle[lang]}</p>

      {/* Tag filter */}
      <div className="flex flex-wrap items-center gap-2 mb-10">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => toggleTag(tag)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
              selectedTags.includes(tag)
                ? "bg-warm-500 text-white"
                : "bg-warm-50 text-text-secondary hover:bg-warm-100"
            }`}
          >
            {t.tagLabels[tag]?.[lang] ?? tag}
          </button>
        ))}
        {selectedTags.length > 0 && (
          <button
            onClick={() => setSelectedTags([])}
            className="px-3 py-1.5 rounded-full text-sm font-medium text-warm-500 hover:text-warm-600 transition-colors"
          >
            {t.resources.clearFilter[lang]}
          </button>
        )}
      </div>

      {/* Resource grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map((resource) => (
          <a
            key={resource.id}
            href={resource.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-2xl border border-warm-100 p-6 hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
          >
            <div className="w-12 h-12 bg-warm-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-warm-200 transition-colors">
              <span className="text-2xl">🔧</span>
            </div>
            <h3 className="font-semibold text-text-primary mb-2 group-hover:text-warm-500 transition-colors">
              {resource.name}
            </h3>
            <p className="text-sm text-text-secondary mb-4">{resource.description[lang]}</p>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {resource.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 bg-warm-50 text-warm-600 text-xs rounded-full"
                >
                  {t.tagLabels[tag]?.[lang] ?? tag}
                </span>
              ))}
            </div>
            <span className="text-warm-500 text-sm font-medium">
              {t.resources.visitLink[lang]} &rarr;
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
