const baseURL = 'https://pokeapi.co/api/v2/';
const pokemonHeader = 'pokemon/';
const typeHeader = 'type/';
const customBaseURL = 'https://pokemon-api-cyber4s.herokuapp.com/';
const customAPIHeader = { username: 'amir' };
// AXIOUS API FUNCTIONS
export async function getPokeomByNameOrId(pokemon) {
  try {
    if (!pokemon) throw 'Search Query Empty';
    let response;
    if (Number(pokemon)) {
      response = await axios.get(`${customBaseURL}pokemon/get/${pokemon}`, {
        headers: customAPIHeader,
      });
    } else {
      response = await axios.get(`${customBaseURL}pokemon/query`, {
        params: { query: pokemon },
        headers: customAPIHeader,
      });
    }
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getPokemonCollection() {
  try {
    const response = await axios.get(`${customBaseURL}pokemon/`, {
      headers: customAPIHeader,
    });
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
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
