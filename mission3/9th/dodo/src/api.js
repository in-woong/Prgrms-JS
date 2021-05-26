export const fetchBySearchKeyword = async (keyword) => {
  return fetch(`https://jjalbot.com/api/jjals?text=${keyword}`)
}
