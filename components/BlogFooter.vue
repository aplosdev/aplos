<template>
  <section id="blog-footer">
    <hr />
    <h2>Comments</h2>
    <p>
      If you have any questions or comments about this post, please feel free to
      leave a comment below.
    </p>
    <div id="giscusContainer"></div>
    <a href="/blog/">
      <span>← Go back to the blog's home</span>
    </a>
  </section>
</template>

<script setup lang="ts">
import { useData } from "vitepress";
import { onMounted } from "vue";

const { theme } = useData();

onMounted(() => {
  const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Load GitHub Comments script dynamically
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
  
  // Apply different theme attributes based on color mode
  script.setAttribute("data-theme", isDarkMode ? "transparent_dark" : "light");
  
  script.setAttribute("data-lang", "en");
  script.setAttribute("data-loading", "lazy");
  script.setAttribute("crossorigin", "anonymous");

  // Append the script to the document
  document.getElementById("giscusContainer")?.appendChild(script);
});
</script>

<style lang="scss">
#blog-footer {
  margin-top: 50px;

  a {
    display: block;
    padding: 20px;
    border-radius: 10px;
    color: var(--color-text-secondary);
    width: 100%;
    text-align: center;
    text-decoration: none;
    transition: all 0.3s ease;
    margin-top: 30px;

    &:hover {
      transform: translateY(-5px);
      background-color: var(--color-background-second);
    }

    &:active {
      transform: scale(0.95);
    }

    span {
      font-size: 1em;
      font-weight: 800;
      margin-bottom: 0 !important;
    }
  }
}
</style>
