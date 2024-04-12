import path from "path";
import { createContentLoader } from "vitepress";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

interface Post {
  title: string;
  description: string;
  tags: string[];
}

declare const data: Post[];

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export { data };

export default createContentLoader(path.join(__dirname, "../../../pages/blog/posts/*.md"), {
  excerpt: true,
  transform(raw): Post[] {
    return raw
      .map(({ frontmatter }) => ({
        title: frontmatter.title,
        description: frontmatter.description,
        tags: frontmatter.tags,
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
