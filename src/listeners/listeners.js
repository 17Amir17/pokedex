import { onSearchClick } from "./search.js";

export function loadEventListeners() {
  search.addEventListener("click", onSearchClick);
}
