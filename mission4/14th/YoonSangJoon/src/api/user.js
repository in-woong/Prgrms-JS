import { request, requestWithoutJson, HTTP_METHOD } from '../utils/index.js';
import { BASE_URL, errorMessages } from '../constant/index.js';

const { LOAD_USER_LIST_ERROR } = errorMessages;

const userAPI = {
  async getUsers() {
    try {
      return request(`${BASE_URL}users`);
    } catch (error) {
      throw new Error(LOAD_USER_LIST_ERROR);
    }
  },
};

export default userAPI;
