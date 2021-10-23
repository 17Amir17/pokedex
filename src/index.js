import { loadEventListeners } from './listeners/listeners.js';
import { initThree } from './threejs/handleScreen.js';
import { getPokemonCollection } from './networking/pokemonApi.js';
import {
  getCurrentUser,
  setCurrentCollection,
  setCurrentUser,
} from './storage/pokemonData.js';
import { loadPokemon } from './dom/pokemonCarousel.js';
function showPikachu() {
  document.querySelector('#poke-input').value = 'pikachu';
  $('#search').click();
}

setCurrentUser(getCurrentUser(''));
setCurrentCollection(await getPokemonCollection());
loadEventListeners();
initThree();
showPikachu();
loadPokemon();
