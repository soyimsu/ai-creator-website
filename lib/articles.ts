import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const articlesDirectory = path.join(process.cwd(), "content/articles");

export interface ArticleMeta {
  slug: string;
  title: { zh: string; en: string };
  category: string;
  date: string;
  excerpt: { zh: string; en: string };
}

export interface Article extends ArticleMeta {
  contentZh: string;
  contentEn: string;
}

async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

export function getAllArticleMetas(): ArticleMeta[] {
  if (!fs.existsSync(articlesDirectory)) return [];

  const slugs = fs.readdirSync(articlesDirectory).filter((f) =>
    fs.statSync(path.join(articlesDirectory, f)).isDirectory()
  );

  const articles = slugs
    .map((slug) => {
      const zhPath = path.join(articlesDirectory, slug, "zh.mdoc");
      if (!fs.existsSync(zhPath)) return null;

      const zhContent = fs.readFileSync(zhPath, "utf-8");
      const { data: zhData } = matter(zhContent);

      const enPath = path.join(articlesDirectory, slug, "en.mdoc");
      let enData: Record<string, string> = {};
      if (fs.existsSync(enPath)) {
        const enContent = fs.readFileSync(enPath, "utf-8");
        enData = matter(enContent).data as Record<string, string>;
      }

      return {
        slug,
        title: { zh: zhData.title || slug, en: enData.title || zhData.title || slug },
        category: zhData.category || "skills",
        date: zhData.date || "",
        excerpt: { zh: zhData.excerpt || "", en: enData.excerpt || zhData.excerpt || "" },
      } as ArticleMeta;
    })
    .filter(Boolean) as ArticleMeta[];

  return articles.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const articleDir = path.join(articlesDirectory, slug);
  if (!fs.existsSync(articleDir)) return null;

  const zhPath = path.join(articleDir, "zh.mdoc");
  if (!fs.existsSync(zhPath)) return null;

  const zhRaw = fs.readFileSync(zhPath, "utf-8");
  const { data: zhData, content: zhMarkdown } = matter(zhRaw);
  const contentZh = await markdownToHtml(zhMarkdown);

  let enData: Record<string, string> = {};
  let contentEn = contentZh;
  const enPath = path.join(articleDir, "en.mdoc");
  if (fs.existsSync(enPath)) {
    const enRaw = fs.readFileSync(enPath, "utf-8");
    const parsed = matter(enRaw);
    enData = parsed.data as Record<string, string>;
    contentEn = await markdownToHtml(parsed.content);
  }

  return {
    slug,
    title: { zh: zhData.title || slug, en: enData.title || zhData.title || slug },
    category: zhData.category || "skills",
    date: zhData.date || "",
    excerpt: { zh: zhData.excerpt || "", en: enData.excerpt || zhData.excerpt || "" },
    contentZh,
    contentEn,
  };
}
