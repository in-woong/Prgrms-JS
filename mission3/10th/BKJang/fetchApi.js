import { GET_JJALS_API_URI } from './constants.js';

const requestAPI = async (baseURI, params = {}) => {
  try {
    const queryStr = Object.keys(params).reduce((acc, cur) => {
      acc += `${cur}=${params[cur]}`;

      return acc;
    }, '');
    const requestURI = `${baseURI}?${queryStr}`;
    const responseData = await fetch(requestURI);
    return responseData.json();
  } catch (error) {
    console.error('requestAPI', error);
  }
}

export const fetchJjalsList = searchText => {
  if (!searchText) return [];
  return requestAPI(GET_JJALS_API_URI, { text: searchText });
}
