import { loadPokemon } from '../dom/pokemonCarousel.js';
import {
  catchPokemon,
  getPokemonId,
  releasePokemon,
  getPokemonCollection,
} from '../networking/pokemonApi.js';
import { getCurrentPokemon } from '../storage/pokemonData.js';
import { setCurrentCollection } from '../storage/pokemonData.js';

export async function onCatchClick(event) {
  const pokemon = getCurrentPokemon();
  const pokemonId = await getPokemonId(pokemon.name);
  const response = await catchPokemon(pokemonId, pokemon);
  if (response) {
    alert('Caught!');
    loadCollection();
  }
}

export async function onReleaseClick(event) {
  const response = await releasePokemon(
    await getPokemonId(getCurrentPokemon().name)
  );
  if (response) {
    alert('Released!');
    loadCollection();
  }
}

async function loadCollection() {
  setCurrentCollection(await getPokemonCollection());
  loadPokemon();
}
