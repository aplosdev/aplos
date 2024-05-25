<script setup lang="ts">
import { useData, Content } from "vitepress";

import NotFound from "./layouts/NotFound.vue";
import HelpfulLayout from "./layouts/Helpful.vue";
import ArticleHead from "./layouts/ArticleHead.vue";
import ArticleList from "./layouts/ArticleList.vue";
import ArticleFooter from "./layouts/ArticleFooter.vue";

import SiteFooter from "./components/Footer.vue";
import Navigation from "./components/Navigation.vue";

const { site, frontmatter, page } = useData();
</script>

<template>
  <Navigation />
  <main id="content-main">
    <div v-if="frontmatter.home">
      <h1>{{ site.title }}</h1>
    </div>
    <div
      v-if="frontmatter.layout === 'article' || frontmatter.layout === 'blog'"
    >
      <ArticleHead />
    </div>
    <NotFound v-if="page.isNotFound" />
    <div v-else :class="frontmatter.pageClass">
      <Content />
    </div>
    <ArticleList
      v-if="
        frontmatter.layout == 'article-list' ||
        frontmatter.layout == 'blog-list'
      "
    />
    <HelpfulLayout
      v-if="frontmatter.layout == 'helpful' || frontmatter.layout == 'simple'"
    />
    <div v-if="frontmatter.layout == 'article' || frontmatter.layout == 'blog'">
      <ArticleFooter />
    </div>
  </main>
  <SiteFooter />
</template>
