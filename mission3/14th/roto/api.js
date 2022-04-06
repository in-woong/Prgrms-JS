const API_END_POINT = 'https://jjalbot.com';

export const request = async (url, options) => {
  /*return fetch(url, options).then((res) => {
    if (res.ok) {
      return res.json();
    }

    throw new Error('API 호출 실패');
  });*/

  try {
    const res = await fetch(url, options);

    if (res.ok) {
      return await res.json();
    }

    throw new Error('API 호출 실패!!');
  } catch (e) {
    alert(e.message);
  }
};

export const fetchJjal = async (keyword) => {
  return await request(`${API_END_POINT}/api/jjals?text=${keyword}`);
};
