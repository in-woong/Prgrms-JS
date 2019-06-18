const getJjals = async (keyword) => {
  if (keyword === undefined || keyword === null) {
    throw new Error('invalid keyword');
  }
  if (typeof keyword !== 'string') {
    throw new Error('invalid type of keyword');
  }
  const trimmedKeyword = keyword.trim();
  if (trimmedKeyword.length < 1) {
    return [];
  }
  try {
    const res = await fetch(`https://jjalbot.com/api/jjals?text=${trimmedKeyword}`);
    return res.status === 200 ? await res.json() : [];
  } catch(e) {
    throw new Error('failed to fetch Jjals from server');
  }
}
