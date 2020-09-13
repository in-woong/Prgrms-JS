const responseHandler = async (response) => {
  const SUCCESS_OK = 200;

  if (response.status === SUCCESS_OK) {
    try {
      const result = await response.json();
      return result;
    } catch(e) {
      throw Error(e)
    }
  }
  throw Error(response.status)
}

export default async function get (requestData) {
  const requestHeadersParams = {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
  }

  try {
    const REQUEST_URL = `https://jjalbot.com/api/jjals?text=${requestData}`;

    return await fetch(REQUEST_URL, requestHeadersParams)
    .then(async response => await responseHandler(response))
    .then(async data => data)

  } catch (e) {
    throw Error(e);
  }
}
