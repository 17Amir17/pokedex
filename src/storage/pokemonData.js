import { formatForModel } from '../dom/stringFormatter.js';
import { hasModel, models } from '../storage/modelData.js';

let currentPokemon;
let currentUser;
let currentCollection;

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
