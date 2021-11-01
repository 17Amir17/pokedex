import {
  setCurrentUser,
  setCurrentCollection,
} from '../storage/pokemonData.js';
import { getPokemonCollection } from '../networking/pokemonApi.js';
import { loadPokemon } from '../dom/pokemonCarousel.js';
export async function onUsernameClick(event) {
  const user = document.querySelector('#username-input').value;
  if (user === '' || user.includes('/') || user.includes('.')) {
    alert('Bad user (user cannot contain spaces or . / etc..');
    return;
  }
  setCurrentUser(user);
  setCurrentCollection(await getPokemonCollection());
  loadPokemon();
}
