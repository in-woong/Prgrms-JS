const API_URL = 'https://todo-api.roto.codes/'
const API_ERROR_MESG = 'This API is wrong'
const DELAY_TIME ="15"

export const getUsers = async () => {
  const response = await fetch(`${API_URL}users?delay=${DELAY_TIME}`)
  if (!response.ok) {
    throw Error(API_ERROR_MESG)
  }
  return await response.json()
}

export const getTodo = async (username) => {
  const response = await fetch(`${API_URL}${username}?delay=${DELAY_TIME}`)
  if (!response.ok) {
    throw Error(API_ERROR_MESG)
  }
  return await response.json()
}

export const add = async (username, text) => {
  const todoObj = {
    _id: new Date(),
    content: text,
    isCompleted: true,
  }
  const response = await fetch(`${API_URL}${username}?delay=${DELAY_TIME}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content: text,
    }),
  })
  if (!response.ok) {
    throw Error(API_ERROR_MESG)
  }
}

export const remove = async (username, id) => {
  const response = await fetch(`${API_URL}${username}/${id}?delay=${DELAY_TIME}`, {
    method: 'DELETE',
  })
  if (!response.ok) {
    throw Error(API_ERROR_MESG)
  }
  return response.json()
  
}

export const removeAll = async (username) => {
  const response = await fetch(`${API_URL}${username}/all?delay=${DELAY_TIME}`, {
    method: 'DELETE',
  })
  if (!response.ok) {
    throw Error(API_ERROR_MESG)
  }
  return response.json()
}

export const toggle = async (username, id) => {
  const response = await fetch(`${API_URL}${username}/${id}/toggle?delay=${DELAY_TIME}`, {
    method: 'PUT',
  })
  if (!response.ok) {
    throw Error(API_ERROR_MESG)
  }
  return response.json()
}
