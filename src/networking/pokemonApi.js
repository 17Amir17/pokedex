const baseURL = 'https://pokeapi.co/api/v2/';
const pokemonHeader = 'pokemon/';
const typeHeader = 'type/';
const customBaseURL = 'http://localHost:8080/';
let customAPIHeader = { username: 'amir' };
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
        params: { name: pokemon },
        headers: customAPIHeader,
      });
    }
    const types = [];
    response.data.types.forEach((type) => {
      types.push(type.type.name);
    });
    response.data.types = types;
    console.log(response.data.types);
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
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function catchPokemon(id, pokemonObj) {
  try {
    const response = await axios.put(
      `${customBaseURL}pokemon/catch/${id}`,
      {
        pokemon: pokemonObj,
      },
      { headers: customAPIHeader }
    );
    return response.data;
  } catch (error) {
    alert('Pokemon already exists 403');
    return false;
  }
}

export async function releasePokemon(id) {
  try {
    const response = await axios.delete(
      `${customBaseURL}pokemon/release/${id}`,
      { headers: customAPIHeader }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    alert('Pokemon does not exists 403');
    return false;
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

export async function getPokemonId(name) {
  try {
    const idResponse = await axios.get(baseURL + pokemonHeader + name);
    return idResponse.data.id;
  } catch (error) {
    throw error;
  }
}

export function updateUsername(name) {
  customAPIHeader.username = name;
}
