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
    const response = await fetch(`${BASE_URL}/roto`)
    const result = await response.json()
    return result
  } catch (error) {
    console.error(error)
  }
}
