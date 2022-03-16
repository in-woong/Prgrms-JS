const BASE_URL = 'https://jjalbot.com';

export const api = {
  searchJJals: async (value) => {
    try {
      const res = await fetch(`${BASE_URL}/api/jjals?text=${value}`)
      if (res.ok) {
        const data = await res.json();
        return data;
      }
    } catch (e) {
      console.error('fetch 에러!!', e);
    }
  }
}
