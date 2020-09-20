import request from './request.js'

const END_POINT = 'https://todo-api.roto.codes'

export const getTodoList = ({ username }) => request(`${END_POINT}/${username}`)
export const getTodoListDelay = ({ username, delay }) =>
  request(`${END_POINT}/${username}/?delay=${delay}`)

export const createTodo = ({ username, content }) =>
  request(`${END_POINT}/${username}`, {
    method: 'POST',
    body: JSON.stringify({
      content,
    }),
  })

export const removeTodo = ({ username, _id }) =>
  request(`${END_POINT}/${username}/${_id}`, {
    method: 'DELETE',
  })

export const toggleCompletedTodo = ({ username, _id }) =>
  request(`${END_POINT}/${username}/${_id}/toggle`, {
    method: 'PUT',
  })

export const getUserList = () => request(`${END_POINT}/users`)
