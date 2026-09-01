import ContentArticleCard from "@/components/shared/ContentArticleCard";
import { CATEGORY_COLORS, type NewsroomArticle } from "@/lib/newsroom";

export default function NewsroomArticleCard({
  id,
  category,
  title,
  excerpt,
  date,
}: NewsroomArticle) {
  return (
    <ContentArticleCard
      category={category}
      title={title}
      excerpt={excerpt}
      date={date}
      href={`/about/newsroom/${id}`}
      headerColor={CATEGORY_COLORS[category]}
      variant="light"
    />
  );
}
