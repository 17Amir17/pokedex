const grid = document.querySelector("#pokemon-grid");
const pokeImage = grid.querySelector("#poke-image");
const pokeName = grid.querySelector(".pokename");
const pokeHeight = grid.querySelector(".pokeheight");
const pokeWeight = grid.querySelector(".pokeweight");
const pokeType = grid.querySelector(".poketype");

export function displayPokemon(pokemon) {
  pokeImage.src = pokemon.frontImage;
  pokeName.innerText = cap(pokemon.name);
  pokeHeight.innerText = pokemon.height;
  pokeWeight.innerText = pokemon.weight;
  pokeType.innerText = getPokemonTypesString(pokemon.type);
}

const getPokemonTypesString = (types) => {
  let typeString = "";
  types.forEach((type) => {
    typeString += cap(type.type.name) + " ";
  });
  return typeString;
};

function cap(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function showGrid() {
  grid.style.opacity = 1;
}

export function hideGrid() {
  grid.style.opacity = 0;
}
