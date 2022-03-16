import api from './api.js'

const userApi = {
  fetchUsers: async (userName) => {
    try {
      return await api.get('/users')
    } catch (e) {
      alert(`${e.status}: ${e.message}`)
    }
  },
  userTodoList: async (userName) => {
    try {
      return await api.get(`/${userName}`)
    } catch (e) {
      alert(`${e.status}: ${e.message}`)
    }
  },
}

export default userApi
