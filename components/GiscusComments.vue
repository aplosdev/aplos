<template>
  <div id="giscusContainer"></div>
</template>

<script setup lang="ts">
import { useData } from "vitepress";
import { onMounted } from "vue";

const { theme } = useData();

onMounted(() => {
  if (typeof document === "undefined") {
    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.async = true;
    script.setAttribute("data-repo", theme.value.blog.data.repo);
    script.setAttribute("data-repo-id", theme.value.blog.data.repoid);
    script.setAttribute("data-category", "Blog Comments");
    script.setAttribute("data-category-id", theme.value.blog.data.categoryid);
    script.setAttribute("data-mapping", "title");
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "bottom");
    script.setAttribute("data-theme", "preferred_color_scheme");
    script.setAttribute("data-lang", "en");
    script.setAttribute("crossorigin", "anonymous");

    document.getElementById("giscusContainer")?.appendChild(script);
  }
});
</script>
