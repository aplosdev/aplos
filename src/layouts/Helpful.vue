<template>
  <section id="simple-layout">
    <p class="dialog-buttons">
      <a href="#top" target="_top">↑ Go to top</a>
      <a
        v-if="theme.nav.git"
        id="file-an-issue"
        :href="theme.nav.git + '/issues/new'"
        >File an issue</a
      >
    </p>
  </section>
</template>

<script setup lang="ts">
import { useData } from "vitepress";

const { theme } = useData();
</script>

<style lang="scss">
#simple-layout {
  margin-top: 3rem;
}

.dialog-buttons {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  margin-top: 2rem;

  a {
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    text-decoration: none;
    color: var(--color-accent);
    cursor: pointer;
    background-color: var(--color-background-second);
    transition: all 0.3s ease;

    &:hover {
      background-color: var(--color-background-mute);
    }

    &::after {
      display: none;
    }
  }
}

#file-an-issue {
  background-color: transparent;
  color: var(--color-accent);

  &:hover {
    background-color: var(--color-accent);
    color: var(--color-background-second);
  }
}
</style>
