"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import t from "@/i18n/translations";

export default function Footer() {
  const { lang } = useLanguage();

  return (
    <footer className="bg-white border-t border-warm-100 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-text-secondary text-sm">
          &copy; {new Date().getFullYear()} AI Creator. {t.footer.rights[lang]}.
        </p>
        <a
          href="https://www.xiaohongshu.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 text-pink-600 rounded-full text-sm font-medium hover:bg-pink-200 transition-colors"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
          {t.footer.xiaohongshu[lang]}
        </a>
      </div>
    </footer>
  );
}
