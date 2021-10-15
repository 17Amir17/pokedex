import { getPokeomByNameOrId } from "../networking/pokemonApi.js";
export function onSearchClick(event) {
  const searchInput = document.querySelector("#poke-input").value;
  getPokeomByNameOrId(searchInput).then(gotPokemon, failedToGetPokemon);
}

function gotPokemon(request) {
  const pokemonDetails = request.data;
  console.log(pokemonDetails);
}

function failedToGetPokemon(error) {
  console.log(error);
}
