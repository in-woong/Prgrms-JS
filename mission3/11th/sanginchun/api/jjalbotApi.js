import {
  getDataFromSessionStorage,
  setDataToSessionStorage,
} from '../storage/sessionStorage.js';

const BASE_URL = 'https://jjalbot.com/api/jjals';

const api = {
  get: async function (searchTerm) {
    const cachedResult = getDataFromSessionStorage(searchTerm);
    if (cachedResult) return cachedResult;

    try {
      const res = await fetch(`${BASE_URL}?text=${searchTerm}`);
      if (!res.ok) throw new Error();

      const data = await res.json();
      if (data) setDataToSessionStorage(searchTerm, data);

      return data;
    } catch (err) {
      throw err;
    }
  },
};

export default api;
