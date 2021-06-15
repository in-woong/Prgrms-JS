import {
  getDataFromSessionStorage,
  setDataToSessionStorage,
} from '../storage/sessionStorage.js';

const BASE_URL = 'https://jjalbot.com/api/jjals';

export default async function getImage(searchTerm) {
  const cachedResult = getDataFromSessionStorage(searchTerm);
  if (cachedResult) return cachedResult;

  try {
    const res = await fetch(`${BASE_URL}?text=${searchTerm}`);
    if (!res.ok) throw new Error(`${res.status}`);

    const data = await res.json();
    if (data) setDataToSessionStorage(searchTerm, data);

    return data;
  } catch (e) {
    // generic 'Error'
    if (e.name === 'Error') {
      const statusCode = parseInt(e.message);

      if (statusCode >= 500) throw new Error('Server Error');
      else if (statusCode >= 400) throw new Error('Client Error');
      else throw new Error(`Status Code: ${statusCode}`);
    }
    // others
    else throw e;
  }
}
