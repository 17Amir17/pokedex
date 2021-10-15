const baseURL = "https://pokeapi.co/api/v2/pokemon/";
export async function getPokeomByNameOrId(pokemon) {
  try {
    if (!pokemon) throw "Search Query Empty";
    const response = await axios.get(baseURL + pokemon);
    return response;
  } catch (error) {
    throw error;
  }
}
