<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useData } from "vitepress";
const currentYear = ref<string>("");

const { theme } = useData();

onMounted(() => {
  const now = new Date();
  const options = { year: "numeric", timeZone: "Europe/Chisinau" };
  currentYear.value = now.toLocaleDateString(
    undefined,
    options as Intl.DateTimeFormatOptions
  );
});
</script>

<template>
  <footer>
    <p v-if="theme.footer.madeby.show">
      Made with ❤️ by
      <a :href="theme.footer.madeby.link" id="author"
        ><mark>{{ theme.footer.madeby.name }}</mark></a
      >
    </p>
    <p id="copyright" v-if="theme.footer.copyright">
      &copy; {{ theme.author }},
      <span v-if="theme.footer.startYear">{{ theme.footer.startYear }}-</span
      >{{ currentYear }}.
    </p>
    <p id="copyleft" v-if="theme.footer.copyleft?.show">
      &#127279; Licensed under the
      <a :href="theme.footer.copyleft.info">{{
        theme.footer.copyleft.license
      }}</a
      >.
    </p>
    <p id="powered" v-if="theme.footer.poweredBy">
      Powered by <a href="https://vitepress.dev/">VitePress</a> and
      <a href="https://aplos.gxbs.me">Aplós</a>
    </p>
  </footer>
</template>
