import { mockNews } from "./mock-data";

export type NewsItem = {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content?: string;
  category?: string;
};

export async function fetchNews() {
  return mockNews;
}

export async function fetchNewsBySlug(slug: string) {
  return mockNews.find((n) => n.slug === slug) ?? null;
}
