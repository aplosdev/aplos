<template>
  <oom-comments cache="20" :src="frontmatter.post">
    No comments found.
  </oom-comments>
</template>

<script setup type="module">
import { useData } from "vitepress";
import Comments from "@oom/mastodon-comments/src/comments.js";

const { frontmatter } = useData();

customElements.define("oom-comments", Comments);
</script>

<style lang="scss">
oom-comments {
  display: block;
  padding: 2em;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    margin: 32px 0;
  }

  article {
    max-width: 600px;
  }

  ul ul {
    margin-left: 64px;
  }

  .comment-avatar {
    width: 50px;
    height: 50px;
    border-radius: 6px;
    float: left;
    margin-right: 14px;

    &:hover {
      transform: rotate(10deg) scale(1.1);
    }
  }

  .comment-user {
    color: var(--color-text);
    text-decoration: none;
    display: block;
    position: relative;

    .comment-author {
      position: absolute;
      left: 35px;
      top: 35px;
      background: var(--background-color);
      border-radius: 50%;
      width: 20px;
      height: 20px;
      color: var(--color-accent);
    }

    &:hover {
      .comment-username {
        text-decoration: underline;
      }
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
      color: currentColor;
      text-decoration: none;
      display: block;
      margin-top: 0.25em;

      &:hover {
        text-decoration: underline;
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
      column-gap: 1em;
      font-size: small;

      > span {
        display: flex;
        align-items: center;
        column-gap: 0.3em;
        color: var(--color-text-secondary);
      }
    }
  }
}
</style>
