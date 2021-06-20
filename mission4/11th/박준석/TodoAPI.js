export const TodoAPI = {
  getTodo: async (username, delay) => {
    const userTodoList = await fetch(`https://todo-api.roto.codes/${username}?delay=${delay}`)
    if (userTodoList.ok) {
      return await userTodoList.json()
    } else {
      throw new Error('전달받은 데이터에 문제가 있습니다.')
    }
  },
  addTodo: async (username, inputValue) => {
    const todoText = inputValue.trim()
    if (todoText.length === 0) {
      throw new Error('공백은 입력할 수 없습니다.')
    } else {
      await fetch(`https://todo-api.roto.codes/${username}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: todoText,
        }),
      })
    }
  },
  checkTodo: async (username, todoID) => {
    await fetch(`https://todo-api.roto.codes/${username}/${todoID}/toggle`, {
      method: 'PUT',
    })
  },
  removeTodo: async (username, todoID) => {
    await fetch(`https://todo-api.roto.codes/${username}/${todoID}`, {
      method: 'DELETE',
    })
  },
  removeAllTodo: async (username) => {
    await fetch(`https://todo-api.roto.codes/${username}/all`, {
      method: 'DELETE',
    })
  },
  getUserList: async () => {
    const userList = await fetch(`https://todo-api.roto.codes/users`)
    if (userList.ok) {
      return await userList.json()
    } else {
      throw new Error('전달받은 데이터에 문제가 있습니다.')
    }
  },
}
