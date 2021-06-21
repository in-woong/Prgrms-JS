
import { baseURL } from "./index.js";
const getUserList = async () => {
  const response = await fetch(`${baseURL}/users`);
  return response.json();
}
export {
  getUserList
};


