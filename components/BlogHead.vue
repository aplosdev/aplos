<template>
    <div id="blog-head">
        <h1>{{ frontmatter.title }}</h1>
        <small>
            {{ formatDate(frontmatter.date) }} &middot;
            <span class="tags">
                <span v-for="(tag, index) in frontmatter.tags" :key="index">#{{ tag }}</span>
            </span>
        </small>
        <br>
        <p>{{ frontmatter.description }}</p>
        <hr />
    </div>
</template>

<script setup lang="ts">
import { useData } from 'vitepress';

const { frontmatter } = useData();

const formatDate = (dateString) => {
    const options = { day: '2-digit', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', options);
};
</script>

<style lang="scss">
#blog-head {
    .tags span {
        margin-right: 5px;
        color: var(--color-text-secondary);
        background-color: var(--color-background-second);
        padding: 0.15rem 0.45rem;
        border-radius: 20px;
        font-size: 12px;
    }

    p {
        color: var(--color-text-secondary);
    }
}
</style>
