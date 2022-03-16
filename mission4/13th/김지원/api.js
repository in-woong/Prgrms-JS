import { API_URL } from './config.js'

const myName = 'naamukim'

export const getData = async () => {
  const res = await fetch(`${API_URL}/${myName}`)
  return await res.json()
}

export const getOtherData = async (otherName) => {
  const res = await fetch(`${API_URL}/${otherName}`)
  return await res.json()
}

export const addData = async (todoText) => {
  await fetch(`${API_URL}/${myName}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content: todoText,
    }),
  })
}

export const toggleData = async (data) => {
  const res = await fetch(
    `https://todo-api.roto.codes/${myName}/${data}/toggle`,
    {
      method: 'PUT',
    }
  )
}

export const removeData = async (data) => {
  await fetch(`https://todo-api.roto.codes/${myName}/${data}`, {
    method: 'DELETE',
  })
}
