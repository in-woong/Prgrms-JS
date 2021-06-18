export const getTodo = async (username) => {
  const userTodoList = await fetch(`http://todo-api.roto.codes/${username}`)
  if (userTodoList.ok) {
    return await userTodoList.json()
  } else {
    throw new Error('전달받은 데이터에 문제가 있습니다.')
  }
}

export const addTodo = async (username, inputValue) => {
  const todoText = inputValue.trim()
  if (todoText.length === 0) {
    throw new Error('공백은 입력할 수 없습니다.')
  } else {
    await fetch(`http://todo-api.roto.codes/${username}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: todoText,
      }),
    })
  }
}

export const checkTodo = async (username, todoID) => {
    await fetch(`http://todo-api.roto.codes/${username}/${todoID}/toggle`, {
      method: 'PUT',
    })
}

export const removeTodo = async (username, todoID) => {
    await fetch(`http://todo-api.roto.codes/${username}/${todoID}`, {
      method: 'DELETE',
    })
}
