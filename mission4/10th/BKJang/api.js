import {
  ERROR_GET_TODOS,
  ERROR_ADD_TODO,
  ERROR_DELETE_TODO,
  ERROR_TOGGLE_TODO,
  GET_TODOS_BASE_URL,
} from './constants.js';

const makeOptions = (method, params = {}) => (
  {
    method,
    headers: {
      "content-type": 'application/json',
    },
    ...(['POST', 'PUT', 'PATCH', 'DELETE'].includes(method) && {
      body: JSON.stringify(params)
    })
  }
)

const requestAPI = async (requestURI, method, params = {}) => {
  try {
    const options = makeOptions(method, params);
    const responseData = await fetch(requestURI, options);
    return responseData.json();
  } catch (error) {
    console.error('requestAPI', error);
  }
}

export const getTodos = userName => {
  try {
    if (!userName) throw new Error(ERROR_GET_TODOS);
    return requestAPI(`${GET_TODOS_BASE_URL}/${userName}`, 'GET');
  } catch (error) {
    console.error('API ERROR', error);
  }
}

export const addTodo = (userName, params) => {
  if (!userName || !params || !Object.keys(params).length) throw new Error(ERROR_ADD_TODO);
  return requestAPI(`${GET_TODOS_BASE_URL}/${userName}`, 'POST', params);
}

export const deleteTodo = (userName, todoId) => {
  if (!userName || !todoId) throw new Error(ERROR_DELETE_TODO);
  return requestAPI(`${GET_TODOS_BASE_URL}/${userName}/${todoId}`, 'DELETE');
}

export const deleteTodos = userName => {
  if (!userName) throw new Error(ERROR_DELETE_TODO);
  return requestAPI(`${GET_TODOS_BASE_URL}/${userName}/all`, 'DELETE');
}

export const toggleTodo = (userName, todoId) => {
  if (!userName || !todoId) throw new Error(ERROR_DELETE_TODO);
  return requestAPI(`${GET_TODOS_BASE_URL}/${userName}/${todoId}/toggle`, 'PUT');
}
