import axios from "axios";

const instance = axios.create({
  baseURL: "https://amazon-clone12515.openode.io", //THE API URL {CLOUD FUNCTION}
});

export default instance;
