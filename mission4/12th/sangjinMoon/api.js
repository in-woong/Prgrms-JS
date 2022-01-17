export const getTodo = async () => {
  const result = await fetch('https://todo-api.roto.codes/MoonSangJin')
  return await result.json()
}

export const postTodo = async (content) => {
  await fetch('https://todo-api.roto.codes/MoonSangJin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content: `${content}`,
    }),
  })
}

export const deleteTodo = async (id) => {
  await fetch(`https://todo-api.roto.codes/MoonSangJin/${id}`, {
    method: 'DELETE',
  })
}

export const deleteAll = async () => {
  await fetch('https://todo-api.roto.codes/MoonSangJin/all', {
    method: 'DELETE',
  })
}

export const toggle = async (id) => {
  await fetch(`https://todo-api.roto.codes/MoonSangJin/${id}/toggle`, {
    method: 'PUT',
  })
}
