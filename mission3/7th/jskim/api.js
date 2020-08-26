export const getImages = async (searchText) => {
  const res = await fetch(`https://jjalbot.com/api/jjals?text=${searchText}`)
  return res.json()
}
