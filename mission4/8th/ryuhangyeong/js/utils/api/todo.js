import request from './request.js'

const END_POINT = 'https://todo-api.roto.codes'

export const getTodoList = ({ username }) => request(`${END_POINT}/${username}`)

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

export const toggleTodoCompleted = ({ username, _id }) =>
  request(`${END_POINT}/${username}/${_id}/toggle`, {
    method: 'PUT',
  })
