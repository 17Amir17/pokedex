import { getPokemonsOfType } from "../networking/pokemonApi.js";
import { handleModal } from "../dom/updateTypeModal.js";

export async function onPoketypeClick(event) {
  if (event.target.classList.contains("type")) {
    const type = event.target.dataset.type;
    try {
      const response = await getPokemonsOfType(type);
      const pokemon = response.pokemon;
      const pokemonNames = [];
      pokemon.forEach((pkmon) => {
        pokemonNames.unshift(pkmon.pokemon.name);
      });
      handleModal(type, pokemonNames);
    } catch (error) {
      alert(error);
    }
  }
}
