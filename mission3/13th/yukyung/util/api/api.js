const BASE_URL = 'https://jjalbot.com'

const api = {
  get: async (url) => {
    try {
      const res = await fetch(`${BASE_URL}/api/jjals${url ? url : ''}`)
      if (!res || !res.ok) {
        throw { message: '서버 에러', status: res.status }
      }

      return res.json()
    } catch (err) {
      throw {
        message: err.message,
        status: err.status,
      }
    }
  },
}

export default api
