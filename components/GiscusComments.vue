<template>
	<div id="giscusContainer"></div>
</template>

<script setup lang="ts">
import { useData } from "vitepress";
import { onMounted } from "vue";

const { theme } = useData();

onMounted(() => {
	const script = document.createElement("script");
	script.src = "https://giscus.app/client.js";
	script.async = true;
	script.setAttribute("data-repo", theme.value.articles.giscus.repo);
	script.setAttribute("data-repo-id", theme.value.articles.giscus.repoid);
	script.setAttribute(
		"data-category",
		theme.value.articles.giscus.category || "Posts Comments",
	);
	script.setAttribute(
		"data-category-id",
		theme.value.articles.giscus.categoryid,
	);
	script.setAttribute(
		"data-mapping",
		theme.value.articles.giscus.mapping || "title",
	);
	script.setAttribute("data-strict", "0");
	script.setAttribute("data-reactions-enabled", "1");
	script.setAttribute("data-emit-metadata", "0");
	script.setAttribute("data-input-position", "bottom");
	script.setAttribute(
		"data-theme",
		theme.value.articles.giscus.theme || "preferred_color_scheme",
	);
	script.setAttribute("data-lang", "en");
	script.setAttribute("crossorigin", "anonymous");

	document.getElementById("giscusContainer")?.appendChild(script);
});
</script>
