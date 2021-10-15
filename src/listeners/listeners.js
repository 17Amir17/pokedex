import { onSearchClick } from "./search.js";
import { onPokemonImageLoad } from "./pokemonImageLoad.js";
import {
  onPokemonImageMouseIn,
  onPokemonImageMouseOut,
} from "./pokemonImageHover.js";
import { onPoketypeClick } from "./poketypeClick.js";

const pokemonImage = document.querySelector("#poke-image");
const poketype = document.querySelector(".poketype");
export function loadEventListeners() {
  search.addEventListener("click", onSearchClick);
  pokemonImage.addEventListener("load", onPokemonImageLoad);
  pokemonImage.addEventListener("mouseover", onPokemonImageMouseIn);
  pokemonImage.addEventListener("mouseout", onPokemonImageMouseOut);
  poketype.addEventListener("click", onPoketypeClick);
}
