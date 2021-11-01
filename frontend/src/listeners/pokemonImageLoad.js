import { showGrid } from "../dom/pokemonGrid.js";
import { hideloader } from "../dom/loader.js";

export function onPokemonImageLoad(event) {
  showGrid();
  hideloader();
}
