import axios from "axios";

const API_URL = "http://localhost:3001/api/products";

export async function fetchLinen() {
  try {
    const responce = await axios.get(`${API_URL}`);

    if (responce.status !== 200) {
      throw new Error("There is now result for your query");
    }
    console.log(responce.data);
    return responce.data;
  } catch (error) {
    throw new Error("There is no result for your query");
  }
}
