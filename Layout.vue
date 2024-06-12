<script setup lang="ts">
import { useData, Content } from "vitepress";

import NotFound from "./src/layouts/NotFound.vue";
import HelpfulLayout from "./src/layouts/Helpful.vue";
import ArticleHead from "./src/layouts/ArticleHead.vue";
import ArticleFooter from "./src/layouts/ArticleFooter.vue";

import SiteFooter from "./src/components/Footer.vue";
import Navigation from "./src/components/Navigation.vue";

const { site, frontmatter, page, theme } = useData();
</script>

<template>
  <Navigation />
  <main
    id="content-main"
    :class="{
      numeric: frontmatter.style === 'numeric' || theme.style === 'numeric',
      'icon-links': theme.links === 'icons',
    }"
  >
    <div v-if="frontmatter.home">
      <h1>{{ site.title }}</h1>
    </div>
    <div
      v-if="
        frontmatter.layout === 'article' &&
          (!theme.minimal || frontmatter.layout !== 'article')
      "
    >
      <ArticleHead />
    </div>
    <NotFound v-if="page.isNotFound" />
    <div
      v-else
      :class="frontmatter.pageClass"
    >
      <Content />
    </div>
    <HelpfulLayout v-if="frontmatter.layout == 'helpful'" />
    <div
      v-if="
        frontmatter.layout === 'article' &&
          (!theme.minimal || frontmatter.layout !== 'article')
      "
    >
      <ArticleFooter />
    </div>
  </main>
  <SiteFooter />
</template>
