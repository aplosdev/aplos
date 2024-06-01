<script setup lang="ts">
import { useData, Content } from "vitepress";

import NotFound from "./layouts/NotFound.vue";
import HelpfulLayout from "./layouts/Helpful.vue";
import ArticleHead from "./layouts/ArticleHead.vue";
import ArticleFooter from "./layouts/ArticleFooter.vue";

import SiteFooter from "./components/Footer.vue";
import Navigation from "./components/Navigation.vue";

const { site, frontmatter, page } = useData();
</script>

<template>
	<Navigation />
	<main id="content-main">
		<div v-if="frontmatter.home">
			<h1>{{ site.title }}</h1>
		</div>
		<div v-if="frontmatter.layout === 'article'">
			<ArticleHead />
		</div>
		<NotFound v-if="page.isNotFound" />
		<div v-else :class="frontmatter.pageClass">
			<Content />
		</div>
		<HelpfulLayout v-if="frontmatter.layout == 'helpful'" />
		<div v-if="frontmatter.layout == 'article'">
			<ArticleFooter />
		</div>
	</main>
	<SiteFooter />
</template>
