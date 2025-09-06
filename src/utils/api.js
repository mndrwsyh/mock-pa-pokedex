import axios from "axios";

const API_URL = "http://localhost:5125/";

/* 
    INSTRUCTION: 
    - Create a function to fetch pokemons from the API. 
    
    - API call may include query parameters for search and type.
*/

/* INSTRUCTION: Create a function to fetch types from the API. */

export async function fetchPokemons(search, type) {
  const response = await axios.get(
    API_URL +
      "pokemons?search=" +
      (search === "" ? "" : search) +
      (type === "All" ? "" : "&type=" + type)
  );
  return response.data;
}

export async function fetchTypes(types) {
  const response = await axios.get(API_URL + "types");
  return response.data;
}
