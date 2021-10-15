const baseURL = "https://pokeapi.co/api/v2/";
const pokemonHeader = "pokemon/";
const typeHeader = "type/";
export async function getPokeomByNameOrId(pokemon) {
  try {
    if (!pokemon) throw "Search Query Empty";
    const response = await axios.get(baseURL + pokemonHeader + pokemon);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function getPokemonsOfType(type) {
  try {
    const response = await axios.get(baseURL + typeHeader + type);
    return response;
  } catch (error) {
    throw error;
  }
}
