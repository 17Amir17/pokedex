import { getCurrentPokemon } from "../storage/pokemonData.js";
const pokemonImage = document.querySelector("#poke-image");

export function onPokemonImageMouseIn(event) {
  const pokemon = getCurrentPokemon();
  if (!pokemon) return;
  pokemonImage.src = pokemon.backImage;
}

export function onPokemonImageMouseOut(event) {
  const pokemon = getCurrentPokemon();
  if (!pokemon) return;
  pokemonImage.src = pokemon.frontImage;
}
