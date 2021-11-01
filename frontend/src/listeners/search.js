import { getPokeomByNameOrId } from '../networking/pokemonApi.js';
import { displayPokemon, hideGrid, showGrid } from '../dom/pokemonGrid.js';
import { showLoader, hideloader } from '../dom/loader.js';
import { setCurrentPokemon } from '../storage/pokemonData.js';
import { formatSearchString, formatForModel } from '../dom/stringFormatter.js';
import { hasModel, models } from '../storage/modelData.js';

export function onSearchClick(event) {
  hideGrid();
  showLoader();
  const searchInput = formatSearchString(
    document.querySelector('#poke-input').value
  );
  getPokeomByNameOrId(searchInput).then(gotPokemon, failedToGetPokemon);
}

function gotPokemon(response) {
  const pokemonDetails = response;
  //reformat response
  const pokemonData = {
    name: pokemonDetails.name,
    height: pokemonDetails.height,
    weight: pokemonDetails.weight,
    type: pokemonDetails.types,
    frontImage: pokemonDetails.front_pic,
    backImage: pokemonDetails.back_pic,
    abilities: pokemonDetails.abilities,
  };
  const modelName = formatForModel(pokemonData.name);
  pokemonData.model = hasModel(modelName) ? models[modelName] : false;
  setCurrentPokemon(pokemonData);
  displayPokemon(pokemonData);
}

function failedToGetPokemon(error) {
  alert(error);
  hideloader();
}
