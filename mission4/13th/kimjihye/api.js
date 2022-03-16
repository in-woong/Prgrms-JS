export const getTodo = async () => {
  const result = await fetch('https://todo-api.roto.codes/kimjihye')
  return await result.json()
}

export const postTodo = async (content) => {
  await fetch('https://todo-api.roto.codes/kimjihye', {
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
  await fetch(`https://todo-api.roto.codes/kimjihye/${id}`, {
    method: 'DELETE',
  })
}

export const deleteAll = async () => {
  await fetch('https://todo-api.roto.codes/kimjihye/all', {
    method: 'DELETE',
  })
}

export const toggle = async (id) => {
  await fetch(`https://todo-api.roto.codes/kimjihye/${id}/toggle`, {
    method: 'PUT',
  })
}
