<template>
  <small>From newest to oldest ↓</small>
  <div class="plguins-list">
    <noscript>
      <small>To use the filter you need JavaScript to be enabled.</small>
    </noscript>
    <div class="filter-tags">
      <button @click="filterplugins('')" id="all-tags">All</button>
      <button v-for="tag in uniqueTags" :key="tag" @click="filterplugins(tag)">
        {{ tag }}
      </button>
    </div>
    <div class="plugin-container">
      <article
        v-for="plugin in filteredplugins"
        :key="plugin.title"
        class="plugin"
        :style="plugin.banner ? `background-image: url(${plugin.banner})` : ''"
      >
        <h3>
          <a
            :href="`posts/${plugin.title
              .toLowerCase()
              .replace(/\s+/g, '-')}.html`"
            >{{ plugin.title }}</a
          >
        </h3>
        <p v-if="plugin.description">{{ plugin.description }}</p>
        <div class="tags" v-if="plugin.tags">
          <span v-if="typeof plugin.tags === 'string'" :key="plugin.tags"
            >#{{ plugin.tags }}</span
          >
          <span v-else v-for="tag in plugin.tags" :key="tag">{{ tag }}</span>
        </div>
        <p class="date">
          {{ plugin.date }}
          <span v-if="plugin.author">
            &middot;
            {{ plugin.author.length > 1 ? "Authors:" : "Author:" }}
            <template v-for="(author, index) in plugin.author" :key="index">
              {{ author
              }}<span v-if="index !== plugin.author.length - 1">, </span>
            </template>
          </span>
        </p>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
import { data as plugins } from "./boosts.data";
import { computed, ref } from "vue";

const selectedTag = ref(null);

const allTags = computed(() => {
  return plugins.reduce((tags, plugin) => {
    return tags.concat(
      Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
    );
  }, []);
});

const uniqueTags = computed(() => {
  const tags = [...new Set(allTags.value)];
  return tags.filter((tag) => tag !== "");
});

const filteredplugins = computed(() => {
  return selectedTag.value === null
    ? plugins
    : plugins.filter((plugin) =>
        Array.isArray(plugin.tags)
          ? plugin.tags.includes(selectedTag.value)
          : plugin.tags === selectedTag.value,
      );
});

function filterplugins(tag: string) {
  selectedTag.value = tag === "" ? null : tag;
}
</script>

<style lang="scss">
.plugins-list {
  margin: 0 auto;
}

.plugin-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  gap: 15px;
  margin: 0 2.5rem;

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }

  @media screen and (max-width: 650px) {
    margin: 0;
  }

  article {
    position: relative;
    transition: transform 0.3s ease;
    border-radius: 1.3rem;
    background-size: cover;
    background-color: var(--color-background-second);
    padding: 12.5rem 2.5rem 2rem 2.5rem;
    color: white !important;

    &::before {
      position: absolute;
      bottom: 0;
      left: 0;
      border-radius: 0 0 1.3rem 1.3rem;
      background: linear-gradient(transparent, rgba(29, 27, 27, 0.7));
      width: 100%;
      height: 85%;
      pointer-events: none;
      content: "";
    }

    h3,
    p,
    .date {
      position: relative;
    }

    &:first-child {
      background-color: var(--color-background-mute);
    }

    h3 {
      margin: 0;
      margin-bottom: 0.625rem;
      color: white;
      font-size: 24px;

      a {
        color: white;
        font-weight: 700;
        letter-spacing: normal;
        text-decoration: none;

        &::after {
          font-size: large;
        }
      }

      .tags span {
        background-color: #5b4f001d;

        @media (prefers-color-scheme: dark) {
          background-color: #ffff001c;
        }
      }
    }

    p {
      margin: 0;
      color: white;
      font-weight: 400;
      text-decoration: none;
    }

    .date {
      font-feature-settings: "zero", "tnum", "cv03", "cv02";
      margin: 5px 0;
      color: white;
      font-weight: 600;
      font-size: 0.9rem;
      text-align: right;
    }

    .tags {
      display: flex;
      position: absolute;
      top: 1rem;
      right: 2rem;
      flex-wrap: wrap;
      gap: 0.3125rem;
      margin-top: 0.625rem;
      text-align: right;

      span {
        -webkit-backdrop-filter: blur(0.625rem);
        backdrop-filter: blur(0.625rem);
        margin-bottom: 5px;
        box-shadow: var(--base-shadow);
        border: 1px solid var(--color-accent);
        border-radius: 20px;
        background-color: var(--color-background-second);
        padding: 0.15rem 0.45rem;
        color: var(--color-accent);
        font-weight: 500;
        font-size: 12px;
      }

      .archive {
        border: 0;
        background-color: #e1cadf;
        color: #6a0dad;

        @media (prefers-color-scheme: dark) {
          background-color: #6a0dad;
          color: #e1cadf;
        }
      }

      .draft {
        border: 0;
        background-color: #f0e68c;
        color: #8b7500;

        @media (prefers-color-scheme: dark) {
          background-color: #8b7500;
          color: #f0e68c;
        }
      }

      .featured {
        border: 0;
        background-color: #ffcccb;
        color: #8b0000;

        @media (prefers-color-scheme: dark) {
          background-color: #8b0000;
          color: #ffcccb;
        }
      }
    }
  }
}

.filter-tags {
  margin-bottom: 20px;

  #all-tags {
    background-color: var(--color-accent-alpha);
    color: var(--color-accent);
  }

  button {
    transition: all 0.3s ease;
    cursor: pointer;
    margin-right: 0.625rem;
    margin-bottom: 3px;
    border-radius: 20px;
    background-color: var(--color-background-second);
    padding: 0.25rem 0.75rem;
    font-size: 0.8rem;

    &:hover {
      background-color: var(--color-accent-alpha);
      color: var(--color-accent);
    }

    &:active {
      transform: scale(0.8);
    }
  }
}
</style>
