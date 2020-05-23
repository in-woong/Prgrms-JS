const BASE_URL = 'https://todo-api.roto.codes'

export const getUsers = async () => {
  try {
    const response = await fetch(`${BASE_URL}/users`)
    const result = await response.json()
    return result
  } catch (error) {
    console.error(error)
  }
}

export const getTodoLists = async () => {
  try {
    const response = await fetch(`${BASE_URL}/suyoung`)
    const result = await response.json()
    return result
  } catch (error) {
    console.error(error)
  }
}

export const postTodoList = async (text) => {
  console.log(text)
  try {
    await fetch(`${BASE_URL}/suyoung`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: text,
      }),
    })
  } catch (error) {
    console.error(error)
  }
}
