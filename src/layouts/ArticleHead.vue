<template>
  <div id="article-head">
    <h1>{{ frontmatter.title }}</h1>
    <small>
      {{
        new Date(frontmatter.date).toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "long",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })
      }}
      &middot;
      <span v-if="theme.articles.author">
        Author:
        {{ frontmatter.author }}
        &middot;
      </span>
      <span class="tags">
        <span v-for="(tag, index) in frontmatter.tags" :key="index"
          >#{{ tag }}</span
        >
      </span>
    </small>
    <br />
    <p>{{ frontmatter.description }}</p>
    <hr />
  </div>
</template>

<script setup lang="ts">
import { useData } from "vitepress";
const { frontmatter, theme } = useData();
</script>

<style lang="scss">
#article-head {
  h1 {
    margin-bottom: 0;
  }

  .tags {
    span {
      transition: all 0.3s ease;
      cursor: default;
      margin-right: 5px;
      border-radius: 20px;
      background-color: var(--color-background-second);
      padding: 0.15rem 0.45rem;
      color: var(--color-text-secondary);
      font-size: 12px;

      &:hover {
        transform: scale(1.05);
        background-color: var(--color-accent-alpha);
        color: var(--color-accent);
      }
    }

    p {
      color: var(--color-text-secondary);
      font-style: italic;
    }
  }
}
</style>