import { formatName, cap } from './stringFormatter.js';
import { load } from '../threejs/handleScreen.js';
import { showScreen, hideScreen } from '../threejs/handleScreen.js';

const grid = document.querySelector('#pokemon-grid');
const pokeImage = grid.querySelector('#poke-image');
const pokeName = grid.querySelector('.pokename');
const pokeHeight = grid.querySelector('.pokeheight');
const pokeWeight = grid.querySelector('.pokeweight');
const pokeType = grid.querySelector('.poketype');

export function displayPokemon(pokemon) {
  handleImageOrModel(pokemon);
  pokeName.innerText = formatName(pokemon.name);
  pokeHeight.innerText = pokemon.height;
  pokeWeight.innerText = pokemon.weight;
  pokeType.innerHTML = getPokemonTypesString(pokemon.type);
}

const getPokemonTypeHtml = (type) => {
  return `<span class = "type ${type}" data-type = "${type}">${cap(
    type
  )}</span>`;
};

const getPokemonTypesString = (types) => {
  let typeString = '';
  types.forEach((type) => {
    typeString += getPokemonTypeHtml(type) + '\n';
  });
  return typeString;
};

export function showGrid() {
  grid.style.opacity = 1;
}

export function hideGrid() {
  grid.style.opacity = 0;
}

function handleImageOrModel(pokemon) {
  //If I have model use model
  if (pokemon.model) {
    showScreen();
    hideImage();
    load(pokemon.model);
  } else {
    hideScreen();
    showImage();
    pokeImage.src = pokemon.frontImage;
  }
}

function hideImage() {
  pokeImage.hidden = true;
  pokeImage.style.position = 'absolute';
}

function showImage() {
  pokeImage.hidden = false;
  pokeImage.style.position = 'initial';
}
