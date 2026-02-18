import { getAllArticleMetas } from "@/lib/articles";
import HomeContent from "@/components/HomeContent";

export default function Home() {
  const articles = getAllArticleMetas().slice(0, 3);
  return <HomeContent articles={articles} />;
}
