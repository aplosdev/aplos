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
      margin-left: 64px;
    }
  }

  li {
    margin: 32px 0;
  }

  article {
    max-width: 600px;
  }

  .comment-avatar {
    float: left;
    width: 50px;
    height: 50px;
    margin: 0;
    margin-right: 14px;
    border-radius: 6px;

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
    top: 35px;
    left: 35px;
    width: 20px;
    height: 20px;
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
    margin-left: 64px;
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
