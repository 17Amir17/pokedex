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
  pokeType.innerHTML = getPokemonTypesString(pokemon.type);
}

const getPokemonTypeHtml = (type) => {
  return `<span class = "type ${type}" data-type = "${type}">${cap(
    type
  )}</span>`;
};

const getPokemonTypesString = (types) => {
  let typeString = "";
  types.forEach((type) => {
    typeString += getPokemonTypeHtml(type.type.name) + "\n";
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
