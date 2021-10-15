import { onSearchClick } from "./search.js";
import { onPokemonImageLoad } from "./pokemonImageLoad.js";
import {
  onPokemonImageMouseIn,
  onPokemonImageMouseOut,
} from "./pokemonImageHover.js";

const pokemonImage = document.querySelector("#poke-image");
export function loadEventListeners() {
  search.addEventListener("click", onSearchClick);
  pokemonImage.addEventListener("load", onPokemonImageLoad);
  pokemonImage.addEventListener("mouseover", onPokemonImageMouseIn);
  pokemonImage.addEventListener("mouseout", onPokemonImageMouseOut);
}
