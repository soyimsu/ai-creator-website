import { getAllArticleMetas } from "@/lib/articles";
import TutorialsList from "@/components/TutorialsList";

export default function TutorialsPage() {
  const articles = getAllArticleMetas();
  return <TutorialsList articles={articles} />;
}
