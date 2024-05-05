<template>
  <oom-comments cache="20" :src="frontmatter.post">
    No comments found.
  </oom-comments>
</template>

<script setup>
import { useData } from "vitepress";
import { onMounted } from "vue";
import Comments from "../scripts/activitypub.ts";

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
}
oom-comments ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
oom-comments li {
  margin: 32px 0;
}
oom-comments article {
  max-width: 600px;
}
oom-comments ul ul {
  margin-left: 64px;
}
oom-comments .comment-avatar {
  width: 50px;
  margin: 0;
  height: 50px;
  border-radius: 6px;
  float: left;
  margin-right: 14px;

  &:hover {
    transform: rotate(10deg) scale(1.1);
  }
}
oom-comments .comment-user {
  color: var(--color-text);
  text-decoration: none;
  display: block;
  position: relative;
}
oom-comments .comment-author {
  position: absolute;
  left: 35px;
  top: 35px;
  background: var(--color-background);
  border-radius: 50%;
  width: 20px;
  height: 20px;
  color: var(--color-accent);
}
oom-comments .comment-user:hover .comment-username {
  text-decoration: underline var(--color-accent);
}
oom-comments .comment-username {
  margin-right: 0.5em;
}
oom-comments .comment-useraddress {
  color: var(--color-text-secondary);
  font-size: small;
  font-style: normal;
}
oom-comments .comment-time {
  font-size: small;
}
oom-comments .comment-address {
  color: currentColor;
  text-decoration: none;
  display: block;
  margin-top: 0.25em;
}
oom-comments .comment-address:hover {
  text-decoration: underline var(--color-accent);
}
oom-comments .comment-body {
  margin-top: 0.5em;
  margin-left: 64px;
  line-height: 1.5;
}
oom-comments .comment-body p {
  margin: 0.5em 0;
}
oom-comments .comment-counts {
  display: flex;
  column-gap: 1em;
  font-size: small;
}
oom-comments .comment-counts > span {
  display: flex;
  align-items: center;
  column-gap: 0.3em;
  color: var(--color-accent);
}
</style>
