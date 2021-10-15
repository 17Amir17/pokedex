import { getPokemonsOfType } from "../networking/pokemonApi.js";
export async function onPoketypeClick(event) {
  if (event.target.classList.contains("type")) {
    const type = event.target.dataset.type;
    try {
      const response = await getPokemonsOfType(type);
      const pokemon = response.data.pokemon;
      const pokemonNames = [];
      pokemon.forEach((pkmon) => {
        console.log(pkmon);
        pokemonNames.unshift(pkmon.pokemon.name);
      });
      console.log(pokemonNames);
    } catch (error) {
      alert(error);
    }
  }
}
