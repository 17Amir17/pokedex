import { onSearchClick } from "./search.js";
import { onPokemonImageLoad } from "./pokemonImageLoad.js";
import {
  onPokemonImageMouseIn,
  onPokemonImageMouseOut,
} from "./pokemonImageHover.js";
import { onPoketypeClick } from "./poketypeClick.js";
import { modalBodyClick } from "./modalBodyClick.js";

const pokemonImage = document.querySelector("#poke-image");
const poketype = document.querySelector(".poketype");
const modalBody = document.querySelector(".modal-body");
export function loadEventListeners() {
  search.addEventListener("click", onSearchClick);
  pokemonImage.addEventListener("load", onPokemonImageLoad);
  pokemonImage.addEventListener("mouseenter", onPokemonImageMouseIn);
  pokemonImage.addEventListener("mouseout", onPokemonImageMouseOut);
  poketype.addEventListener("click", onPoketypeClick);
  poketype.addEventListener("touch", onPoketypeClick);
  modalBody.addEventListener("click", modalBodyClick);
  modalBody.addEventListener("touch", modalBodyClick);
}
