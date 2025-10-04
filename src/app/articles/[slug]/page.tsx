import { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header_Alt";
import ArticleBreadcrumb from "@/components/Article_Breadcrumb";
import ArticleContent from "@/components/Article_Content";
import ArticleHead from "@/components/Article_Head";
import ArticleAuthor from "@/components/Article_Author";
import RelatedArticles from "@/components/Articles_Related";
import { getAllArticles, getArticleBySlug } from "@/lib/articles";

export function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

export function generateMetadata(
  { params }: { params: { slug: string } }
): Metadata {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};

  const url = `${
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  }/articles/${article.slug}`;

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url,
      images: article.featuredImage
        ? [{ url: article.featuredImage }]
        : undefined,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: article.featuredImage ? [article.featuredImage] : undefined,
    },
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);
  if (!article) return notFound();

  const allArticles = getAllArticles(); // ✅ so RelatedArticles can find related posts
  const blogUrl = `${
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  }/articles/${article.slug}`;

  return (
    <main className="pb-24">
      <Header />
      <ArticleBreadcrumb title={article.title} slug={article.slug} />
      <ArticleHead
        blogData={{
          title: article.title,
          slug: article.slug,
          author: article.author,
          category: article.category,
          publishedDate: article.publishedDate,
          readingTime: article.readingTime,
          featuredImage: article.featuredImage,
        }}
      />

      <ArticleContent
        blogTitle={article.title}
        blogUrl={blogUrl}
        contentData={{ content: article.content }}
      />

      <ArticleAuthor />

      {/* ✅ Fixed prop names */}
      <RelatedArticles
        currentSlug={article.slug}
        currentCategory={article.category}
        articles={allArticles}
      />
    </main>
  );
}
