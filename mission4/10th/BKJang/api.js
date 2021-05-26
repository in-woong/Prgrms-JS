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
    return requestAPI(`${GET_TODOS_BASE_URL}/${userName}?delay=500`, 'GET');
  } catch (error) {
    console.error('getTodos API ERROR', error);
  }
}

export const addTodo = (userName, params) => {
  try {
    if (!userName || !params || !Object.keys(params).length) throw new Error(ERROR_ADD_TODO);
    return requestAPI(`${GET_TODOS_BASE_URL}/${userName}`, 'POST', params);
  } catch (error) {
    console.error('addTodo API ERROR', error);
  }
}

export const deleteTodo = (userName, todoId) => {
  try {
    if (!userName || !todoId) throw new Error(ERROR_DELETE_TODO);
    return requestAPI(`${GET_TODOS_BASE_URL}/${userName}/${todoId}`, 'DELETE');
  } catch (error) {
    console.error('deleteTodo API ERRO', error);
  }
}

export const deleteTodos = userName => {
  try {
    if (!userName) throw new Error(ERROR_DELETE_TODO);
    return requestAPI(`${GET_TODOS_BASE_URL}/${userName}/all`, 'DELETE');
  } catch (error) {
    console.error('deleteTodos API ERRO', error);
  }
}

export const toggleTodo = (userName, todoId) => {
  try {
    if (!userName || !todoId) throw new Error(ERROR_DELETE_TODO);
    return requestAPI(`${GET_TODOS_BASE_URL}/${userName}/${todoId}/toggle`, 'PUT');
  } catch (error) {
    console.error('toggleTodo API ERROR', error);
  }
}

export const getUsers = () => {
  try {
    return requestAPI(`${GET_TODOS_BASE_URL}/users`, 'GET');
  } catch (error) {
    console.error('getUsers API ERROR', error);
  }
}
