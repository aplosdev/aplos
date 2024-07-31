import { createContentLoader } from "vitepress";

interface Plugin {
  title: string;
  description: string;
  author: string;
  banner: string;
  tags: string[];
}

declare const data: Plugin[];
export { data };

export default createContentLoader("boosts/posts/*.md", {
  excerpt: true,
  transform(raw): Plugin[] {
    return raw
      .map(({ frontmatter }) => ({
        title: frontmatter.title,
        description: frontmatter.description,
        tags: frontmatter.tags,
        banner: frontmatter.banner,
        author: frontmatter.author,
        date: formatDate(frontmatter.date),
      }))
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  },
});

function formatDate(raw: string): string {
  const date = new Date(raw);
  date.setUTCHours(12);
  return date.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
}
