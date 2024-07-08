<template>
  <div id="article-head">
    <small v-if="frontmatter.update">
      Last updated on
      {{
        new Date(frontmatter.update).toLocaleDateString(
          theme.locale || "en-US",
          {
            day: "2-digit",
            month: "long",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          },
        )
      }}
    </small>
    <h1>{{ frontmatter.title }}</h1>
    <small>
      {{
        new Date(frontmatter.date).toLocaleDateString(theme.locale || "en-US", {
          day: "2-digit",
          month: "long",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })
      }}
      <span v-if="frontmatter.author">
        &middot; {{ frontmatter.author.length > 1 ? "Authors:" : "Author:" }}
        <template v-for="(author, index) in frontmatter.author" :key="index">
          {{ author
          }}<span v-if="index !== frontmatter.author.length - 1">, </span>
        </template>
      </span>
      <span class="tags">
        &middot;
        <span v-for="(tag, index) in frontmatter.tags" :key="index">{{
          tag
        }}</span>
      </span>
    </small>
    <br />
    <p v-if="frontmatter.description" id="description">
      {{ frontmatter.description }}
    </p>
    <hr />
  </div>
</template>

<script setup lang="ts">
import { useData } from "vitepress";
const { frontmatter, theme } = useData();
</script>

<style lang="scss">
#article-head {
  padding-top: 2.0938rem;

  h1 {
    margin-top: 0;
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
  }

  #description {
    color: var(--color-text-secondary);
    font-style: italic;
  }
}
</style>
