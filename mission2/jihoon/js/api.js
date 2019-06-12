const getJjals = async (keyword) => {
  if (keyword.length < 1) {
    return [];
  }
  const res = await fetch(`https://jjalbot.com/api/jjals?text=${keyword}`);
  return res.status === 200 ? await res.json() : [];
}
