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
}
oom-comments ul {
	margin: 0;
	padding: 0;
	list-style: none;
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
	float: left;
	margin: 0;
	margin-right: 14px;
	border-radius: 6px;
	width: 50px;
	height: 50px;

	&:hover {
		transform: rotate(10deg) scale(1.1);
	}
}
oom-comments .comment-user {
	display: block;
	position: relative;
	color: var(--color-text);
	text-decoration: none;
}
oom-comments .comment-author {
	position: absolute;
	top: 35px;
	left: 35px;
	border-radius: 50%;
	background: var(--color-background);
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
	font-style: normal;
	font-size: small;
}
oom-comments .comment-time {
	font-size: small;
}
oom-comments .comment-address {
	display: block;
	margin-top: 0.25em;
	color: currentColor;
	text-decoration: none;
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
	column-gap: 0.3em;
	align-items: center;
	color: var(--color-accent);
}
</style>
