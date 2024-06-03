<script setup lang="ts">
import { useData, Content } from "vitepress";

import SiteFooter from "../components/Footer.vue";
import Navigation from "../components/Navigation.vue";

import NotFound from "../layouts/NotFound.vue";
import HelpfulLayout from "../layouts/Helpful.vue";

const { site, frontmatter, page, theme } = useData();
</script>

<template>
  <div :class="{ plain: theme.type === 'plain' }">
    <Navigation />
    <main
      id="content-main"
      :class="{
        numeric: frontmatter.style === 'numeric' || theme.style === 'numeric',
      }"
    >
      <div v-if="frontmatter.home">
        <h1>{{ site.title }}</h1>
      </div>
      <NotFound v-if="page.isNotFound" />
      <div v-else :class="frontmatter.pageClass">
        <Content />
      </div>
      <HelpfulLayout v-if="frontmatter.layout == 'helpful'" />
    </main>
    <SiteFooter />
  </div>
</template>
