import { formatForModel } from '../dom/stringFormatter.js';
import { updateUsername } from '../networking/pokemonApi.js';
import { hasModel, models } from '../storage/modelData.js';

let currentPokemon;
let currentCollection;
const currentUserLabel = document.querySelector('#current-user');

export function getCurrentPokemon() {
  return currentPokemon;
}

export function setCurrentPokemon(pokemon) {
  currentPokemon = pokemon;
}

export function getCurrentCollection() {
  return currentCollection;
}

export function setCurrentCollection(collection) {
  collection.forEach((pokemon) => {
    const modelName = formatForModel(pokemon.name);
    pokemon.model = hasModel(modelName) ? models[modelName] : false;
  });
  currentCollection = collection;
}

export function setCurrentUser(user) {
  localStorage.setItem('user', user);
  currentUserLabel.textContent = user;
  updateUsername(user);
}

export function getCurrentUser() {
  let user = localStorage.getItem('user');
  if (!user || user === '') return 'amir';
  return user;
}
