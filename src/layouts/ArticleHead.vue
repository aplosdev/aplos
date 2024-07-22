<template>
  <div id="article-head">
    <div id="banner-container">
      <img
        v-if="frontmatter.banner"
        id="banner"
        :src="frontmatter.banner + '#full'"
        alt="Banner"
      />
    </div>
    <div :id="frontmatter.banner ? 'banner-margin' : ''">
      <small v-if="frontmatter.update">
        Last updated on
        {{
          new Date(frontmatter.update).toLocaleDateString(
            theme.locale || "en-US",
            {
              day: "2-digit",
              month: "long",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            },
          )
        }}
      </small>
      <h1>{{ frontmatter.title }}</h1>
      <small>
        {{
          new Date(frontmatter.date).toLocaleDateString(
            theme.locale || "en-US",
            {
              day: "2-digit",
              month: "long",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            },
          )
        }}
        <span v-if="frontmatter.author">
          &middot; {{ frontmatter.author.length > 1 ? "Authors:" : "Author:" }}
          <template v-for="(author, index) in frontmatter.author" :key="index">
            {{ author
            }}<span v-if="index !== frontmatter.author.length - 1">, </span>
          </template>
        </span>
        <span> &middot; {{ readingTime }} minutes to read </span>
        <span class="tags">
          &middot;
          <span v-for="(tag, index) in frontmatter.tags" :key="index">{{
            tag
          }}</span>
        </span>
      </small>
      <br />
      <p v-if="frontmatter.description" id="description">
        {{ frontmatter.description }}
      </p>
      <hr />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useData } from "vitepress";
import { computed, onMounted, ref } from "vue";

const { frontmatter, theme } = useData();

const contentRef = ref<HTMLElement | null>(null);
const readingTime = ref<string>("");

onMounted(() => {
  contentRef.value = document.getElementById("content");
  if (contentRef.value) {
    const words = contentRef.value.innerText.trim().split(/\s+/).length;
    const wordsPerMinute = 200; // Average reading speed
    const time = Math.ceil(words / wordsPerMinute);
    readingTime.value = time.toString();
  }
});
</script>

<style lang="scss">
#article-head {
  padding-top: 2.0938rem;

  #banner-container {
    $mask: linear-gradient(black, transparent);
    -webkit-mask-image: $mask;
    -webkit-user-select: none;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    mask-image: $mask;
    width: 100vw;
    height: 50vw;
    max-height: 45vh;
    user-select: none;

    #banner {
      position: fixed;
      top: 0;
      left: 0;
      transition: none;
      margin: 0;
      object-fit: cover;
    }
  }

  #banner-margin {
    margin-top: 15vh;
  }

  h1 {
    margin-top: 0;
    margin-bottom: 0;
  }

  .tags {
    span {
      transition: all 0.3s ease;
      cursor: default;
      margin-right: 5px;
      border-radius: 20px;
      background-color: var(--color-background-second);
      padding: 0.15rem 0.45rem;
      color: var(--color-text-secondary);
      font-size: 12px;

      &:hover {
        transform: scale(1.05);
        background-color: var(--color-accent-alpha);
        color: var(--color-accent);
      }
    }
  }

  #description {
    color: var(--color-text-secondary);
    font-style: italic;
  }
}
</style>
