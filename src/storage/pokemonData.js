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
  currentCollection = collection;
}
