<template>
	<div class="blog-posts">
		<noscript>
			<small>To use the filter you need JavaScript to be enabled.</small>
		</noscript>
		<div class="filter-tags">
			<button @click="filterPosts('')" id="all-tags">All</button>
			<button
				v-for="tag in uniqueTags"
				:key="tag"
				@click="filterPosts(tag)"
			>
				<span class="hashtag">#</span>{{ tag }}
			</button>
		</div>
		<div class="post-container">
			<article
				v-for="post in filteredPosts"
				:key="post.title"
				class="post"
			>
				<h3>
					<a
						:href="`posts/${post.title
							.toLowerCase()
							.replace(/\s+/g, '-')}.html`"
						>{{ post.title }}</a
					>
				</h3>
				<p class="date">{{ post.date }}</p>
				<p>{{ post.description }}</p>
				<div class="tags">
					<span v-if="typeof post.tags === 'string'" :key="post.tags"
						>#{{ post.tags }}</span
					>
					<span v-else v-for="tag in post.tags" :key="tag"
						>#{{ tag }}</span
					>
				</div>
			</article>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { data as posts } from "../../../../../../pages/.vitepress/theme/posts.data";

const selectedTag = ref(null);

const allTags = computed(() => {
	return posts.reduce((tags, post) => {
		return tags.concat(Array.isArray(post.tags) ? post.tags : [post.tags]);
	}, []);
});

const uniqueTags = computed(() => {
	const tags = [...new Set(allTags.value)];
	return tags.filter((tag) => tag !== "");
});

const filteredPosts = computed(() => {
	return selectedTag.value === null
		? posts
		: posts.filter((post) =>
				Array.isArray(post.tags)
					? post.tags.includes(selectedTag.value)
					: post.tags === selectedTag.value
		  );
});

function filterPosts(tag: string) {
	selectedTag.value = tag === "" ? null : tag;
}
</script>

<style lang="scss">
.blog-posts {
	margin: 0 auto;
}

.post-container {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
	gap: 15px;

	@media screen and (max-width: 600px) {
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	}

	.post {
		background-color: var(--color-background-second);
		padding: 20px;
		border-radius: 8px;
		transition: transform 0.3s ease;

		&:first-child {
			background-color: var(--color-background-mute);
		}

		h3 {
			margin: 0 !important;
			text-decoration: underline var(--color-accent) 1px solid;
			font-weight: 900;
			font-size: 24px;
		}

		p {
			margin: 0;
			color: var(--color-text);
      text-decoration: none;
			font-weight: 500;
		}

		.date {
			margin: 5px 0;
			font-size: 0.9rem;
			color: var(--color-text-secondary);
			font-weight: 600;
			font-feature-settings: "zero", "tnum", "cv03", "cv02";
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
		margin-right: 10px;
		margin-bottom: 3px;
		background-color: var(--color-background-second);
		border-radius: 20px;
		padding: 0.25rem 0.75rem;
		font-size: 0.8rem;
		cursor: pointer;
		transition: all 0.3s ease;

		&:hover {
			color: var(--color-accent);
			background-color: var(--color-accent-alpha);
		}

		&:active {
			transform: scale(0.8);
		}
	}
}

.tags {
	text-align: right;
	margin-top: 10px;

	span {
		font-weight: 500;
		margin-right: 5px;
		color: var(--color-text-accent);
		background-color: var(--color-background);
		padding: 0.15rem 0.45rem;
		border-radius: 20px;
		font-size: 12px;
	}
}
</style>
