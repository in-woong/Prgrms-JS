export default {
  search: async (term) => {
    const res = fetch(`https://jjalbot.com/api/jjals?text=${term}`)
    const result = res.json()
    return result
  },
}
