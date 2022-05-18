import api from './api.js'

const USERNAME = 'cozy60'

const todoApi = {
  fetchTodo: async () => {
    try {
      const res = await api.get(`/${USERNAME}`)

      let isLoading = true
      if (res) {
        isLoading = false
      }

      return { data: res, isLoading }
    } catch (e) {
      alert(`${e.status}: ${e.message}`)
    }
  },
  completedTodo: async (id) => {
    try {
      return await api.put(`/${USERNAME}/${id}/toggle`)
    } catch (e) {
      alert(`${e.status}: ${e.message}`)
    }
  },
  removeTodo: async (id) => {
    try {
      return await api.delete(`/${USERNAME}/${id}`)
    } catch (e) {
      alert(`${e.status}: ${e.message}`)
    }
  },
  addTodo: async (todoText) => {
    try {
      return await api.post(`/${USERNAME}`, todoText)
    } catch (e) {
      alert(`${e.status}: ${e.message}`)
    }
  },
}

export default todoApi;
