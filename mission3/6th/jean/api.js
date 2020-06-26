export const fetchApi = async (keyword) => {

  const res = await fetch(`https://jjalbot.com/api/jjals?text=${keyword}`)
  const result = await res.json()

  return result
}
