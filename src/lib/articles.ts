import data from "@/data/articles.json";

export type ArticleJSON = (typeof data)[number];

export function getAllArticles(): ArticleJSON[] {
  return data as ArticleJSON[];
}

export function getArticleBySlug(slug: string): ArticleJSON | undefined {
  return getAllArticles().find((a) => a.slug === slug);
}
