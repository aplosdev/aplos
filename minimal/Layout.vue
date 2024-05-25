<script setup lang="ts">
import { useData, Content } from "vitepress";

import SiteFooter from "../components/Footer.vue";
import Navigation from "../components/Navigation.vue";

import NotFound from "../layouts/NotFound.vue";
import HelpfulLayout from "../layouts/Helpful.vue";

const { site, frontmatter, page } = useData();
</script>

<template>
	<Navigation />
	<main id="content-main">
		<div v-if="frontmatter.home">
			<h1>{{ site.title }}</h1>
		</div>
		<NotFound v-if="page.isNotFound" />
		<div v-else :class="frontmatter.pageClass">
			<Content />
		</div>
		<HelpfulLayout
			v-if="
				frontmatter.layout == 'helpful'
			"
		/>
	</main>
	<SiteFooter />
</template>
