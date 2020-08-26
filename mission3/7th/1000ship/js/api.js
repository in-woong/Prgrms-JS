export default {
  search: async (term) => {
    const res = await fetch(`https://jjalbot.com/api/jjals?text=${term}`)
    const result = await res.json()
    return result
  },
}
