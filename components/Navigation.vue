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

<style lang="scss">
header {
  nav {
    background-color: none;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    overflow: hidden;
    position: fixed;
    top: 3rem;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 2.5rem;
    background-color: var(--color-header);
    border: 0.4px solid var(--color-border);
    z-index: 9999;
    padding: 0.0625rem 1.5625rem;
    text-align: center;

    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: space-between;

      li {
        display: inline-block;

        a {
          display: block;
          text-align: center;
          color: var(--color-text-secondary);
          text-decoration: none;
          font-weight: 600;
          font-size: 14px;
          letter-spacing: -0.015rem;
          margin: 0 0.3125rem;
          transform: scale(1);
          transition: color 0.7s ease, transform 100ms ease;

          &:hover {
            color: var(--color-accent);
          }

          &:active {
            color: var(--color-accent);
            transform: scale(0.9);
          }

          &.active {
            color: var(--color-accent);
          }
        }
      }
    }
  }

  #title {
    margin-right: 2.1875rem;
    position: relative;

    * {
      font-size: 16px;
      letter-spacing: -0.0325rem;
      font-weight: 800;
      color: var(--color-text);
      margin: 0.5rem 0.3125rem 0.5rem 0.3125rem;
      transform: scale(1);
      transition: transform 100ms ease text-decoration 0.4s ease;

      &:hover {
        text-decoration: underline 0.075rem solid var(--color-accent);
      }

      &:active {
        transform: scale(0.9);
      }
    }

    &::after {
      content: "";
      position: absolute;
      height: 110%;
      margin: 0;
      width: 0.0625rem;
      background-color: var(--color-border);
      top: 0;
      right: -1.25rem;
    }
  }

  .fa-brands {
    font-size: 15px;
  }
}
</style>

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
