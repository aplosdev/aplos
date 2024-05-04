<template>
  <section id="blog-footer">
    <hr />
    <h2>Comments</h2>
    <p>
      If you have any questions or comments about this post, please feel free to
      leave a comment
      <span
        style="display: inline-block"
        v-if="frontmatter.comments === 'giscus'"
        >below</span
      ><span
        style="display: inline-block"
        v-if="frontmatter.comments === 'activitypub'"
        >on
        <a :href="frontmatter.post" style="display: inline-block"
          >this post</a
        ></span
      >.
    </p>

    <noscript
      ><small
        >Heads Up! You <i>need</i> JavaScript to view/write comments or to react
        to the post. So you can't do anything unless you turn on
        JavaScript.</small
      ></noscript
    >
    <MastodonComments
      v-if="frontmatter.comments === 'activitypub'"
    ></MastodonComments>
    <Giscus v-if="frontmatter.comments === 'giscus'"></Giscus>
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
import Giscus from "./GiscusComments.vue";
import MastodonComments from "./MastodonComments.vue";

const { frontmatter } = useData();
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
