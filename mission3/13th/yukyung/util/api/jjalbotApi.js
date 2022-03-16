import api from './api.js'

const jjalbotApi = {
  onSearch: async (query) => {
    try {
      const res = await api.get(`?text=${query}`)
      return res
    } catch (err) {
      alert(`${err.status}: ${err.message}`)
    }
  },
}

export default jjalbotApi
