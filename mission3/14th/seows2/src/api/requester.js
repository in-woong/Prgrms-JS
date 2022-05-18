const options = {
  GET: { method: 'GET' },
};
const request = async (url, option) => {
  try {
    const response = await fetch(url, option);
    if (!response.ok) {
      const errorData = await response.json();
      throw errorData;
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw {
      message: error.message,
    };
  }
};

const BASE_URL = 'https://jjalbot.com/api/jjals';

const api = {
  getSearchResult: async (searchKeyword) => {
    try {
      const imageDatas = await request(
        `${BASE_URL}?text=${encodeURIComponent(searchKeyword)}`,
        options.GET
      );
      return {
        isError: false,
        data: imageDatas,
      };
    } catch (error) {
      return {
        isError: true,
        data: error,
      };
    }
  },
};

export default api;
