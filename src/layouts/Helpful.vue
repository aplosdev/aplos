<template>
  <section id="helpful-layout">
    <p class="dialog-buttons">
      <a href="#top" target="_top">↑ Go to top</a>
      <template v-if="theme.nav.git || frontmatter.footlink">
        <a
          v-if="theme.nav.git && !frontmatter.footlink"
          class="extra-link"
          :href="theme.nav.git + '/issues/new'"
          >File an issue</a
        >
        <a v-else class="extra-link" :href="frontmatter.footlink.url">{{
          frontmatter.footlink.text
        }}</a>
      </template>
    </p>
  </section>
</template>

<script setup lang="ts">
import { useData } from "vitepress";

const { theme, frontmatter } = useData();
</script>

<style lang="scss">
#helpful-layout {
  margin-top: 3rem;
}

.dialog-buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  margin-top: 2rem;

  a {
    transition: all 0.3s ease;
    cursor: pointer;
    border-radius: 0.5rem;
    background-color: var(--color-background-second);
    padding: 0.5rem 1rem;
    color: var(--color-accent);
    text-decoration: none;

    &:hover {
      background-color: var(--color-background-mute);
    }

    &::after {
      display: none;
    }
  }
}

.extra-link {
  background-color: transparent !important;
  color: var(--color-accent) !important;

  &:hover {
    background-color: var(--color-accent) !important;
    color: var(--color-background) !important;
  }
}
</style>
