<template>
  <header v-if="theme.nav.show !== false">
    <nav>
      <ul>
        <li id="title">
          <a href="/" @click="setActive('/')">
            {{ site.title }}
          </a>
        </li>
        <li v-for="(navItem, index) in navigation" :key="index">
          <a
            :href="navItem.link"
            :class="{ active: isActive(navItem.link) }"
            @click="setActive(navItem.link)"
          >
            {{ navItem.text }}
          </a>
        </li>
        <li v-if="theme.nav.rss">
          <a
            target="_blank"
            :href="theme.nav.rss"
            aria-label="Link to the RSS Feed"
          >
            <RSSFeed />
          </a>
        </li>
        <li v-if="theme.nav.git">
          <a
            target="_blank"
            :href="theme.nav.git"
            aria-label="Link to the source code"
          >
            <SourceCode />
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useData } from "vitepress";
import SourceCode from "../icons/SourceCode.vue";
import RSSFeed from "../icons/RSSFeed.vue";

const { site, theme } = useData();

const currentPath = ref("/");
const isActive = (route: string) => currentPath.value === route;
const setActive = (route: string) => {
  currentPath.value = route;
};

onMounted(() => {
  if (typeof window !== "undefined") {
    currentPath.value = window.location.pathname;
  }
});

const navigation = theme.value.nav.links;
</script>
