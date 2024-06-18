<template>
  <oom-comments cache="20" :src="frontmatter.post">
    No comments found.
  </oom-comments>
</template>

<script setup lang="ts">
import { useData } from "vitepress";
import { onMounted } from "vue";
import Comments from "../scripts/activitypub.mts";

const { frontmatter } = useData();

onMounted(() => {
  customElements.define("oom-comments", Comments);
});
</script>

<style lang="scss">
oom-comments {
  display: block;
  padding: 2em;

  a:hover {
    transform: none;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;

    ul {
      margin-left: 4rem;
    }
  }

  li {
    margin: 2rem 0;
  }

  article {
    max-width: 37.5rem;
  }

  .comment-avatar {
    float: left;
    width: 3.125rem;
    height: 3.125rem;
    margin: 0;
    margin-right: 0.875rem;
    border-radius: 0.375rem;

    &:hover {
      transform: rotate(10deg) scale(1.1);
    }
  }

  .comment-user {
    position: relative;
    display: block;
    color: var(--color-text);
    text-decoration: none;

    &:hover {
      .comment-username {
        text-decoration: underline var(--color-accent);
      }
    }
  }

  .comment-author {
    position: absolute;
    top: 2.1875rem;
    left: 2.1875rem;
    width: 1.25rem;
    height: 1.25rem;
    color: var(--color-accent);
    background: var(--color-background);
    border-radius: 50%;
  }

  .comment-username {
    margin-right: 0.5em;
  }

  .comment-useraddress {
    color: var(--color-text-secondary);
    font-size: small;
    font-style: normal;
  }

  .comment-time {
    font-size: small;
  }

  .comment-address {
    display: block;
    margin-top: 0.25em;
    color: currentColor;
    text-decoration: none;

    &:hover {
      text-decoration: underline var(--color-accent);
    }
  }

  .comment-body {
    margin-top: 0.5em;
    margin-left: 4rem;
    line-height: 1.5;

    p {
      margin: 0.5em 0;
    }
  }

  .comment-counts {
    display: flex;
    font-size: small;
    column-gap: 1em;

    span {
      display: flex;
      align-items: center;
      color: var(--color-accent);
      column-gap: 0.3em;
    }
  }
}
</style>
