<template>
  <main>
    <section id="NotFound">
      <span class="glitch" data-text="404">404</span>
      <h1>Not Found!</h1>
      <p>
        Oops! The page you are looking for has been removed, relocated or never
        existed. Please check the URL or go back to the homepage.
        <span v-if="theme.nav.git"
          >If you believe something should be here, feel free to file an issue
          with the button below.</span
        >
      </p>
    </section>
    <p class="dialog-buttons">
      <a onclick="window.history.go(-1)">← Go Back</a>
      <a
        v-if="theme.nav.git"
        id="file-an-issue"
        :href="theme.nav.git + '/issues/new'"
        >File an issue</a
      >
    </p>
  </main>
</template>

<script setup lang="ts">
import { useData } from "vitepress";

const { theme } = useData();
</script>

<style lang="scss">
#NotFound {
  margin-right: auto;
  margin-bottom: 20px;
  margin-left: auto;
  box-shadow: none;
  border-radius: 10px;
  background-color: transparent;
  padding: 30px 20px;
  width: 100%;
  max-width: calc(var(--content-width) - 30%);
  color: var(--color-text-secondary);
  text-align: center;

  h1 {
    margin-top: 0;
    margin-bottom: 0;
    color: var(--color-accent);
    font-weight: 800;
    font-size: 2em;
  }

  .glitch {
    display: inline-block;
    position: relative;
    animation: notfoundblink 0.8s infinite alternate;
    color: var(--color-text);
    font-weight: 800;
    font-size: 7em;
    line-height: -2px;
    letter-spacing: -12.2px;

    @keyframes notfoundblink {
      from {
        opacity: 1;
      }

      to {
        opacity: 0;
      }
    }

    @media (prefers-reduced-motion: no-preference) {
      &::before,
      &::after {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        content: attr(data-text);
      }

      &::before {
        left: 2px;
        opacity: 0.8;
        animation: glitch 1s infinite linear alternate-reverse;
        text-shadow:
          -3px 0 var(--color-accent),
          0 3px var(--color-accent),
          3px 0 var(--color-accent),
          0 -3px var(--color-accent);
      }

      &::after {
        left: -2px;
        opacity: 0.8;
        animation: glitch 1.5s infinite linear alternate-reverse;
        text-shadow:
          3px 0 var(--color-background-mute),
          0 -3px var(--color-background-mute),
          -3px 0 var(--color-background-mute),
          0 3px var(--color-background-mute);
      }
    }

    @keyframes glitch {
      0% {
        transform: translate(0);
      }

      25% {
        transform: translate(4px, -4px);
      }

      50% {
        transform: translate(-4px, 4px);
      }

      75% {
        transform: translate(4px, 0);
      }

      100% {
        transform: translate(0);
      }
    }
  }
}
</style>
