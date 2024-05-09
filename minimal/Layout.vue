<script setup lang="ts">
import { useData } from "vitepress";
import { Content } from "vitepress";
import NotFound from "../components/404View.vue";
import SiteFooter from "../components/Footer.vue";
import Navigation from "../components/Navigation.vue";
import HelpfulLayout from "../components/HelpfulLayout.vue";

const { site, frontmatter, page } = useData();
</script>

<template>
  <Navigation />
  <main id="content-main">
    <div v-if="frontmatter.home">
      <h1>{{ site.title }}</h1>
    </div>
    <NotFound v-if="page.isNotFound" />
    <div v-else :class="frontmatter.pageClass">
      <Content />
    </div>
    <HelpfulLayout
      v-if="frontmatter.layout == 'helpful' || frontmatter.layout == 'simple'"
    />
  </main>
  <SiteFooter />
</template>
