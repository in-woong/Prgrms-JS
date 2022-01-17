const FETCH_URL = 'https://jjalbot.com/api/jjals'

export const request = {
  async get(keyword) {
    return await fetch(`${FETCH_URL}?text=${keyword}`)
  }
}
