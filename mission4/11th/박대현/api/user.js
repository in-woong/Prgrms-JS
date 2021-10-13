
import { baseURL } from "./index.js";
const getUserList = async () => {
  const response = await fetch(`${baseURL}/users?delay=2000`);
  return response.json();
}
export {
  getUserList
};


