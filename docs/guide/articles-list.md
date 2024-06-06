---
layout: helpful
---

# Articles List Configuration

In version 2.0.0, the article list has been removed from the main layout, and became a custom layout due to issues with the build process. To use the article list, you can follow these steps:

## Initial Setup

1. Create a file named `ArticleList.vue` inside the `/.vitepress/theme/` folder.

2. The code for the `ArticleList.vue` file is available inside the package under `aplos/custom/ArticleListExample.txt`. You can copy the code from there and paste it into the `ArticleList.vue` file. If you want to copy it from here, you can use the following code:

```vue {37}
<template>
  <div class="article-list">
    <noscript>
      <small>To use the filter you need JavaScript to be enabled.</small>
    </noscript>
    <div class="filter-tags">
      <button @click="filterPosts('')" id="all-tags">All</button>
      <button v-for="tag in uniqueTags" :key="tag" @click="filterPosts(tag)">
        <span class="hashtag">#</span>{{ tag }}
      </button>
    </div>
    <div class="post-container">
      <article v-for="post in filteredPosts" :key="post.title" class="post">
        <h3>
          <a
            :href="`posts/${post.title
              .toLowerCase()
              .replace(/\s+/g, '-')}.html`"
            >{{ post.title }}</a
          >
        </h3>
        <p class="date">{{ post.date }}</p>
        <p>{{ post.description }}</p>
        <div class="tags">
          <span v-if="typeof post.tags === 'string'" :key="post.tags"
            >#{{ post.tags }}</span
          >
          <span v-else v-for="tag in post.tags" :key="tag">#{{ tag }}</span>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
import "aplos/custom/ArticleList.scss";
import { data as posts } from "./posts.data";
import { computed, ref } from "vue";

const selectedTag = ref(null);

const allTags = computed(() => {
  return posts.reduce((tags, post) => {
    return tags.concat(Array.isArray(post.tags) ? post.tags : [post.tags]);
  }, []);
});

const uniqueTags = computed(() => {
  const tags = [...new Set(allTags.value)];
  return tags.filter((tag) => tag !== "");
});

const filteredPosts = computed(() => {
  return selectedTag.value === null
    ? posts
    : posts.filter((post) =>
        Array.isArray(post.tags)
          ? post.tags.includes(selectedTag.value)
          : post.tags === selectedTag.value,
      );
});

function filterPosts(tag: string) {
  selectedTag.value = tag === "" ? null : tag;
}
</script>
```

4. Inside the `.vitepress/theme` folder, create a file named `blog.data.ts` and paste the following code:

```ts{12}
import { createContentLoader } from "vitepress";

interface Post {
  title: string;
  description: string;
  tags: string[];
}

declare const data: Post[];
export { data };

export default createContentLoader("articles/posts/*.md", { // Change the path to your posts
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
```

## Setting up the page

Inside the page you want to use the article list, you can use the following code:

```md
# My Page

This is my page content.

<ArticleList />

This is the rest of my page content.

<script setup lang="ts">
import ArticleList from ".vitepress/theme/ArticleList.vue";
</script>
```
