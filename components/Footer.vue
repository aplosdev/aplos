<script setup lang="ts">
import { useData } from "vitepress";
const { theme } = useData();
</script>

<template>
  <footer id="footer">
    <a
      style="margin: 16px; display: block"
      v-if="theme.footer.sourcecode?.show"
      :href="theme.footer.sourcecode.link"
      ><mark>Source Code</mark></a
    >
    <p v-if="theme.footer.madeby.show">
      Made with ❤️ by
      <a :href="theme.footer.madeby.link" id="author"
        ><mark>{{ theme.footer.madeby.name }}</mark></a
      >
    </p>
    <p
      id="copyright"
      v-if="theme.footer.copyright"
      :title="'Last Updated At: ' + new Date().toLocaleString()"
    >
      &copy; <b>{{ theme.author }}</b
      >, <span v-if="theme.footer.startYear">{{ theme.footer.startYear }}-</span
      >{{ new Date().getFullYear() }}.
    </p>
    <p id="copyleft" v-if="theme.footer.copyleft?.show">
      &#127279; Licensed under the
      <a :href="theme.footer.copyleft.info">{{
        theme.footer.copyleft.license
      }}</a
      >.
    </p>
    <small id="powered" v-if="theme.footer.poweredBy">
      Powered by <a href="https://vitepress.dev/">VitePress</a> and
      <a href="https://aplos.gxbs.me" title="v1.5.0 (prerelease)">Aplós</a>
    </small>
  </footer>
</template>

<style lang="scss">
#footer {
  position: relative;
  bottom: 0;
  max-width: 100%;
  right: 0;
  padding: 20px;
  margin: 0 10px 10px 10px;
  border-top: 1px solid var(--color-border);
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  max-width: var(--content-width);

  a {
    text-decoration: underline 1.4px;
    color: var(--color-accent);
    font-weight: 700;
  }

  p {
    margin: 0;

    &:first-child {
      margin-top: 10px;
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
    margin-top: 0.625rem;
  }

  #author {
    font-weight: 900;
  }
}
</style>
