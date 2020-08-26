import { JJALBOT_URL } from '../utils/constant.js';

export const fetchJJals = async (keyword) => {
  try {
    const response = await fetch(`${JJALBOT_URL}?text=${keyword}`);
    if (response.ok) {
      return await response.json();
    }
    throw new Error(`HTTP ERROR : ${response.status}`);
  } catch (err) {
    console.error(err);
  }
};

export const getJJalResults = (jjalsTotalInfo) => {
  return jjalsTotalInfo.map((jjal) => {
    return {
      id: jjal.shortId,
      title: jjal.title,
      imageUrl: jjal.imageUrl,
    };
  });
};
