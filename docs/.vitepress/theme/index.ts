import type { Theme } from "vitepress";
import Aplos from "aplos/Layout.vue";
import "./custom.scss";
import "aplos/plain";

export default {
  Layout: Aplos,
} satisfies Theme;