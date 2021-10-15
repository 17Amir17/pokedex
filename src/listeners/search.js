import { getPokeomByNameOrId } from "../networking/pokemonApi.js";
import { displayPokemon, hideGrid, showGrid } from "../dom/pokemonGrid.js";
import { showLoader, hideloader } from "../dom/loader.js";
import { setCurrentPokemon } from "../storage/pokemonData.js";
import { formatSearchString } from "../dom/stringFormatter.js";

export function onSearchClick(event) {
  hideGrid();
  showLoader();
  const searchInput = formatSearchString(
    document.querySelector("#poke-input").value
  );
  getPokeomByNameOrId(searchInput).then(gotPokemon, failedToGetPokemon);
}

function gotPokemon(request) {
  const pokemonDetails = request.data;
  const pokemonData = {
    name: pokemonDetails.name,
    height: pokemonDetails.height,
    weight: pokemonDetails.weight,
    type: pokemonDetails.types,
    frontImage: pokemonDetails.sprites.front_default,
    backImage: pokemonDetails.sprites.back_default,
  };
  setCurrentPokemon(pokemonData);
  hideloader();
  displayPokemon(pokemonData);
}

function failedToGetPokemon(error) {
  alert(error);
  hideloader();
}
