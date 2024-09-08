<template>
  <header>
    <a href="#content-main" class="skip-to-content">Skip to main content</a>
    <nav v-if="theme.nav.show !== false" :class="{ hidden: !showNavbar }">
      <ul>
        <li id="title">
          <a href="/" @click="setActive('/')">
            {{ theme.nav.title || site.title }}
          </a>
        </li>
        <li v-for="link in theme.nav.links" :key="link.url || link.link">
          <a
            :href="link.url || link.link"
            :class="{ active: isActive(link.url || link.link) }"
            @click="setActive(link.url || link.link)"
          >
            {{ link.text }}
          </a>
        </li>
        <li v-if="theme.nav.rss">
          <a
            target="_blank"
            :href="theme.nav.rss"
            aria-label="Link to the RSS Feed"
            alt="Link to the RSS Feed"
            title="Link to the RSS Feed"
            download
          >
            <RSSFeed />
          </a>
        </li>
        <li v-if="theme.nav.git">
          <a
            target="_blank"
            :href="theme.nav.git"
            aria-label="Link to the source code of the website"
            alt="Link to the source code of the website"
            title="Link to the source code of the website"
          >
            <SourceCode />
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss">
@mixin blurredBackground {
  -webkit-backdrop-filter: saturate(180%) blur(0.625rem);
  backdrop-filter: saturate(180%) blur(0.625rem);
}

header {
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;

  .skip-to-content {
    clip: rect(1px, 1px, 1px, 1px);
    word-wrap: normal !important;
    -webkit-clip-path: inset(50%);
    position: absolute;
    z-index: 999;
    clip-path: inset(50%);
    margin: -1px;
    border: 0;
    padding: 0;
    width: 1px;
    height: 1px;
    overflow: hidden;

    &:focus {
      clip: auto !important;
      -webkit-clip-path: none;
      position: static;
      clip-path: none;
      margin: 0;
      width: auto;
      height: auto;
      overflow: visible;
    }
  }

  nav {
    --margin-top: 1.5rem;
    @include blurredBackground;
    position: fixed;
    z-index: 9999;
    margin-top: var(--margin-top);
    border: 0.4px solid var(--color-border);
    border-radius: 2.5rem;
    background-color: none;
    background-color: var(--color-header);
    padding: 0.0625rem 1.5625rem;
    max-width: 90%;
    text-align: center;
    transition:
      background-color 0.4s ease,
      transform 0.5s ease;

    &.hidden {
      transform: translate3d(0, calc((100% + var(--margin-top)) * -1), 0);
    }

    &:hover {
      background-color: var(--color-header-hover);
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 0.7rem;
      margin: 0;
      padding: 0;
      list-style: none;

      li {
        display: inline-block;

        &#title {
          position: relative;
          margin-inline-end: 1.8rem;

          * {
            transform: scale(1);
            transition: transform 100ms ease text-decoration 0.4s ease;
            margin: 0.5rem 0.3125rem 0.5rem 0.3125rem;
            color: var(--color-text);
            font-weight: 800;
            font-size: 16px;
            letter-spacing: -0.0325rem;

            &:hover {
              color: var(--color-accent);
            }

            &:active {
              transform: scale(0.9);
            }
          }

          &::after {
            position: absolute;
            top: 0;
            right: -1.25rem;
            margin: 0;
            background-color: var(--color-border);
            width: 0.0625rem;
            height: 100%;
            content: "";
          }

          .active {
            color: var(--color-accent) !important;
          }
        }

        a {
          display: block;
          transform: scale(1);
          transition:
            color 0.7s ease,
            transform 100ms ease;
          color: var(--color-text-secondary);
          font-weight: 600;
          font-size: 14px;
          letter-spacing: -0.015rem;
          text-align: center;
          text-decoration: none;

          &:hover {
            color: var(--color-accent);
          }

          &:active {
            transform: scale(0.9);
            color: var(--color-accent);
          }

          &.active {
            color: var(--color-accent);
          }
        }
      }
    }
  }
}
</style>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { useData } from "vitepress";
import SourceCode from ".././icons/SourceCode.vue";
import RSSFeed from ".././icons/RSSFeed.vue";

const { site, theme } = useData();

const currentPath = ref("/");
const showNavbar = ref(true);
const lastScrollY = ref(0);

const isActive = (route: string) => currentPath.value === route;

const setActive = (route: string) => {
  currentPath.value = route;
};

const handleScroll = () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY.value) {
    setTimeout(() => {
      showNavbar.value = false;
    }, 300);
  } else {
    setTimeout(() => {
      showNavbar.value = true;
    }, 400);
  }

  lastScrollY.value = currentScrollY;
};

onMounted(() => {
  if (typeof window !== "undefined") {
    currentPath.value = window.location.pathname;
    window.addEventListener("scroll", handleScroll);
  }
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
