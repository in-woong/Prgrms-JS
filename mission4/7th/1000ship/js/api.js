const DELAY = 100

const api = {
  getTodoList: async (username) => {
    const res = await fetch(`https://todo-api.roto.codes/${username}?delay=${DELAY}`, {
      method: 'GET',
    })
    return await res.json()
  },
  toggleTodoItem: async (username, id) => {
    await fetch(`https://todo-api.roto.codes/${username}/${id}/toggle?delay=${DELAY}`, {
      method: 'PUT',
    })
  },
  removeTodoItem: async (username, id) => {
    await fetch(`https://todo-api.roto.codes/${username}/${id}?delay=${DELAY}`, {
      method: 'DELETE',
    })
  },
  addTodoItem: async (username, content) => {
    await fetch(`https://todo-api.roto.codes/${username}?delay=${DELAY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content,
      }),
    })
  },
  getUserList: async () => {
    const data = await fetch(`https://todo-api.roto.codes/users?delay=${DELAY}`)
    return await data.json()
  }
}

export function TodoApi (username) {
  this.username = username
  this.getTodoList = async () => api.getTodoList(this.username)
  this.toggleTodoItem = async (id) => api.toggleTodoItem(this.username, id)
  this.removeTodoItem = async (id) => api.removeTodoItem(this.username, id)
  this.addTodoItem = async (content) => api.addTodoItem(this.username, content)
  this.changeUsername = (username) => this.username = username
}

export default api