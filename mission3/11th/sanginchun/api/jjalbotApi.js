const BASE_URL = 'https://jjalbot.com/api/jjals';

const api = {
  get: async function (searchTerm) {
    try {
      const cachedResult = JSON.parse(sessionStorage.getItem(searchTerm));

      if (cachedResult) return cachedResult;
    } catch (err) {
      console.error(err);
    }

    try {
      const URL = `${BASE_URL}?text=${searchTerm}`;

      const res = await fetch(URL);
      if (!res.ok) throw new Error();

      const data = await res.json();
      try {
        if (data) sessionStorage.setItem(searchTerm, JSON.stringify(data));
      } catch (err) {
        console.error(err);
      }

      return data;
    } catch (err) {
      throw err;
    }
  },
};

export default api;
