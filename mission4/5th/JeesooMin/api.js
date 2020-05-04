const TODO_URL = 'https://todo-api.roto.codes'

const fetchTodoList = async userName => {
  const response = await fetch(`${TODO_URL}/${userName}?delay=3000`)
  if (!response.ok) {
    throw new Error('[api] API를 확인해주세요.')
  }
  return await response.json()
}

const addNewTodoItem = async (userName, content) => {
  if (typeof content !== 'string') {
    throw new Error('[api] API parameter를 확인해주세요.')
  }

  const response = await fetch(`${TODO_URL}/${userName}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content,
    }),
  })

  if (!response.ok) {
    throw new Error('[api] API를 확인해주세요.')
  }
}

const deleteTodoItem = async (userName, todoId) => {
  if (typeof todoId !== 'string') {
    throw new Error('[api] API parameter를 확인해주세요.')
  }

  const response = await fetch(`${TODO_URL}/${userName}/${todoId}`, {
    method: 'DELETE',
  })

  if (!response.ok) {
    throw new Error('[api] API를 확인해주세요.')
  }
}

const toggleTodoItem = async (userName, todoId) => {
  if (typeof todoId !== 'string') {
    throw new Error('[api] API parameter를 확인해주세요.')
  }

  const response = await fetch(`${TODO_URL}/${userName}/${todoId}/toggle`, {
    method: 'PUT',
  })

  if (!response.ok) {
    throw new Error('[api] API를 확인해주세요.')
  }
}

const fetchUserDataList = async () => {
  const response = await fetch(`${TODO_URL}/users`)
  if (!response.ok) {
    throw new Error('[api] API를 확인해주세요.')
  }
  return await response.json()
}

const api = {
  fetchTodoList,
  addNewTodoItem,
  deleteTodoItem,
  toggleTodoItem,
  fetchUserDataList,
}
export default api
