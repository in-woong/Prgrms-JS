const fetchJjals = async (keyword) => {
  const url = `https://jjalbot.com/api/jjals?text=${keyword}`;

  const response = await fetch(url);
  const data = await response.json();

  return data;
};

export default fetchJjals;
