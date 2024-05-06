<template>
  <div id="blog-head">
    <h1>{{ frontmatter.title }}</h1>
    <small>
      {{
        // Blog Post Published Date
        new Date(frontmatter.date).toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "long",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })
      }}
      &middot;
      <span v-if="theme.blog.author">
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
#blog-head {
  .tags span {
    margin-right: 5px;
    color: var(--color-text-secondary);
    background-color: var(--color-background-second);
    padding: 0.15rem 0.45rem;
    border-radius: 20px;
    font-size: 12px;
    transition: all 0.3s ease;
    cursor: default;

    &:hover {
      background-color: var(--color-accent-alpha);
      color: var(--color-accent);
      transform: scale(1.05) !important;
    }
  }

  p {
    color: var(--color-text-secondary);
    font-style: italic;
  }
}
</style>
