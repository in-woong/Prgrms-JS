const TODO_API_URL = 'https://todo-api.roto.codes';

export const getTodoList = async (userName) => {
  const res = await fetch( `${TODO_API_URL}/${userName}`, {
    method: 'GET',
  })
  return await res.json();
}

export const addTodoItem = async (userName, itemContent) => {
  await fetch(`${TODO_API_URL}/${userName}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content: itemContent,
    }),
  })
}

export const removeTodoItem = async (userName, id) => {
  await fetch(`${TODO_API_URL}/${userName}/${id}`, {
    method: 'DELETE',
  })
}

export const toggleTodo = async (userName, id) => {
  await fetch(`${TODO_API_URL}/${userName}/${id}/toggle`,{
    method: 'put',
  })
}
