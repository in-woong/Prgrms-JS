import { 
  BASE_URL, 
  USER_NAME
 }  from '../utils/constants.js'

export const getTodoList = async () => {
  try {
    const res = await fetch(`${BASE_URL}/${USER_NAME}`)
    return await res.json()
  } catch (error) {
    console.log(error)
  }
}

export const postTodoList = async (todoText) => {
  try {
    await fetch(`${BASE_URL}/${USER_NAME}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            content: todoText,
          }),
        })
  } catch (error) {
    console.log(error)
  }
}

export const toggleTodoList = async (id) => {
  try {
    await fetch(`${BASE_URL}/${USER_NAME}/${id}/toggle`, {
        method: 'PUT'
    })
  } catch (error) {
    console.log(error)
  }
}

export const deleteTodoList = async (id) => {
  try {
    await fetch(`${BASE_URL}/${USER_NAME}/${id}`, {
        method: 'DELETE'
      })
  } catch (error) {
    console.log(error)
  }
}
