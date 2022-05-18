import { BASE_URL, FETCH_ERROR } from '../constant/index.js';

const fetchImages = async (keyword) => {
  try {
    const response = await fetch(BASE_URL + keyword);
    if (response.ok) return response.json();
  } catch (error) {
    throw new Error(FETCH_ERROR);
  }
};

export default fetchImages;
