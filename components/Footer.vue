<script setup lang="ts">
import { useData } from "vitepress";
const { theme } = useData();
</script>

<template>
  <footer>
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
      <a href="https://aplos.gxbs.me">Aplós</a>
    </small>
  </footer>
</template>
