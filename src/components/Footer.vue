<script setup lang="ts">
import { useData } from "vitepress";
const { theme } = useData();
</script>

<template>
  <footer id="footer">
    <nav
      v-if="
        theme.footer.links ||
        theme.footer.madeby.show ||
        theme.footer.sourcecode?.show
      "
    >
      <ul>
        <li v-for="link in theme.footer.links" :key="link.url || link.link">
          <a :href="link.url || link.link">{{ link.text }}</a>
        </li>
        <li v-if="theme.footer.sourcecode?.show">
          <a :href="theme.footer.sourcecode.link">Source Code</a>
        </li>
        <li v-if="theme.footer.madeby.show">
          <a :href="theme.footer.madeby.link"
            >Made with ❤️ by
            <b id="author">{{ theme.footer.madeby.name }}</b></a
          >
        </li>
      </ul>
    </nav>
    <p
      v-if="!theme.footer.custom?.copyright"
      id="copyright"
      :title="'Last Updated At: ' + new Date().toLocaleString()"
    >
      &copy; <b>{{ theme.author }}</b
      >, <span v-if="theme.footer.startYear">{{ theme.footer.startYear }}-</span
      >{{ new Date().getFullYear() }}
    </p>
    <p v-else>
      {{ theme.footer.custom?.copyright }}
    </p>
    <p v-if="theme.footer.copyleft?.show" id="copyleft">
      &#127279; Licensed under the
      <a :href="theme.footer.copyleft.info">{{
        theme.footer.copyleft.license
      }}</a>
    </p>
    <small v-if="theme.footer.poweredBy" id="powered">
      Powered by <a href="https://vitepress.dev/">VitePress</a> and
      <a href="https://aplos.gxbs.dev">Aplós</a>
    </small>
    <small v-if="theme.footer.message">{{ theme.footer.message }}</small>
  </footer>
</template>

<style lang="scss">
#footer {
  position: relative;
  right: 0;
  bottom: 0;
  margin: 0 0.625rem 0.625rem 0.625rem;
  margin-right: auto;
  margin-left: auto;
  border-top: 0.0625rem solid var(--color-border);
  padding: 1.25rem;
  max-width: 100%;
  max-width: var(--content-width);
  text-align: center;

  nav {
    margin: 0 auto 1rem;
    border: 0.4px solid var(--color-border);
    border-radius: 2.5rem;
    background-color: var(--color-header);
    padding: 0.6625rem 2.5625rem;
    width: fit-content;
    max-width: min(var(--content-width) / 1.5, 100%);

    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 0.7rem;
      margin: 0;
      padding: 0;
      list-style: none;
      width: min(var(--content-width) / 1.5, 100%);

      li {
        display: flex;
        line-height: normal;
        list-style: none;

        a {
          transition: var(--transition);
          background-color: transparent !important;
          border-radius: 999rem;
          color: var(--color-text-secondary);
          font-weight: 600;
          letter-spacing: -0.015rem;
          text-decoration: none;

          &:hover {
            color: var(--color-accent);
          }

          &:active {
            transform: scale(0.95);
          }
        }
      }
    }
  }

  a {
    color: var(--color-accent);
    font-weight: 700;
    text-decoration: underline 0.0875rem;

    &:not(li) {
      transition: var(--transition);
      margin: 0;
      border-radius: var(--rounded-xs);
      background-color: var(--color-background-second);
      padding: 0.18rem 0.3rem 0.1875rem 0.3rem;
      color: var(--color-accent);

      &:hover {
        background-color: var(--color-accent);
        color: var(--color-background);
      }
    }
  }

  p {
    margin: 0;

    &:first-child {
      margin-top: 0.625rem;
    }
  }

  #copyright,
  #copyleft,
  #powered {
    font-weight: 500;

    b {
      font-weight: 700;
    }
  }

  #powered {
    color: var(--color-text-secondary);
    font-weight: 500;
  }

  small {
    display: block;
    margin-top: 0.625rem;
  }

  #author {
    font-weight: 900;
  }
}
</style>
