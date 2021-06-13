const BASE_URL = 'https://jjalbot.com/api/jjals';

const api = {
  get: async function (searchTerm) {
    try {
      const URL = `${BASE_URL}?text=${searchTerm}`;

      const res = await fetch(URL);
      if (!res.ok) throw new Error();

      const data = await res.json();

      return data;
    } catch (err) {
      throw err;
    }
  },
};

export default api;
