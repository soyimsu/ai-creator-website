import { getArticleBySlug, getAllArticleMetas } from "@/lib/articles";
import ArticleDetail from "@/components/ArticleDetail";
import Link from "next/link";

export function generateStaticParams() {
  const articles = getAllArticleMetas();
  return articles.map((a) => ({ slug: a.slug }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-text-primary mb-4">Article Not Found</h1>
        <Link href="/tutorials" className="text-warm-500 hover:text-warm-600 font-medium">
          &larr; Back to Tutorials
        </Link>
      </div>
    );
  }

  return <ArticleDetail article={article} />;
}
