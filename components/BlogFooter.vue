<template>
  <section id="blog-footer">
    <hr />
    <h2>Comments</h2>
    <p>
      If you have any questions or comments about this post, please feel free to
      leave a comment below.
    </p>

    <noscript
      ><small
        >Heads Up! You <i>need</i> JavaScript to view/write comments or to react
        to the post. So you can't do anything unless you turn on
        JavaScript.</small
      ></noscript
    >
    <div id="giscusContainer"></div>
    <br />
    <hr />
    <p class="dialog-buttons" v-if="frontmatter.prev || frontmatter.next">
      <a
        :href="`${frontmatter.prev.toLowerCase().replace(/\s+/g, '-')}.html`"
        target="_self"
        v-if="frontmatter.prev"
      >
        <span><small>← Previous</small></span>
        <br /><span>{{ frontmatter.prev }}</span>
      </a>
      <a
        :href="`${frontmatter.next.toLowerCase().replace(/\s+/g, '-')}.html`"
        target="_self"
        v-if="frontmatter.next"
      >
        <span><small>Next →</small></span>
        <br /><span>{{ frontmatter.next }}</span>
      </a>
    </p>
  </section>
</template>

<script setup lang="ts">
import { useData } from "vitepress";
import { onMounted } from "vue";

const { theme, frontmatter } = useData();

onMounted(() => {
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
  script.setAttribute("data-theme", "preferred_color_scheme");
  script.setAttribute("data-lang", "en");
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
    color: var(--color-accent);
    margin: 0 0.2rem;
    text-align: center;
    text-decoration: none;
    background-color: transparent;
    transition: all 0.3s ease;

    &:first-child {
      border-radius: 10px;
      text-align: left;
    }

    &:last-child {
      border-radius: 10px;
      text-align: right;
    }

    &:hover {
      transform: translateY(-5px);
    }

    &:active {
      transform: scale(0.95);
    }

    span {
      font-size: 1em;
      margin-bottom: 0 !important;
    }
  }
}
</style>
