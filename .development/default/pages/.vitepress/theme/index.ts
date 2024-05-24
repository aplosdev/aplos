import type { Theme } from "vitepress";
import "../../../../../minimal";
import Aplos from "../../../../../minimal/Layout.vue";
import "./custom.scss";

export default {
  Layout: Aplos,
} satisfies Theme;