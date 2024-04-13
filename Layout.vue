<script setup lang="ts">
import { useData } from "vitepress";
import { Content } from "vitepress";
import NotFound from "./components/404View.vue";
import SiteFooter from "./components/Footer.vue";
import Navigation from "./components/Navigation.vue";
import BlogHead from "./components/BlogHead.vue";
import BlogFooter from "./components/BlogFooter.vue";
import SimpleLayout from "./components/SimpleLayout.vue";
import BlogList from "./components/BlogList.vue";

const { site, frontmatter, page } = useData();
</script>

<template>
  <Navigation />
  <main>
    <div v-if="frontmatter.home">
      <h1>{{ site.title }}</h1>
    </div>
    <div v-if="frontmatter.layout == 'blog'">
      <BlogHead />
    </div>
    <NotFound v-if="page.isNotFound" />
    <div v-else :class="frontmatter.pageClass">
      <Content />
    </div>
    <BlogList v-if="frontmatter.layout == 'blog-list'" />
    <SimpleLayout v-if="frontmatter.layout == 'simple'" />
    <div v-if="frontmatter.layout == 'blog'">
      <BlogFooter />
    </div>
  </main>
  <SiteFooter />
</template>
