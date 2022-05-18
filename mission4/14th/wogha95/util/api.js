import { FETCH_USERS_ERROR
  , FETCH_TODO_ERROR
  , ADD_TODO_ERROR
  , DELETE_TODO_ERROR
  , REMOVE_ALL_ERROR
  , TOGGLE_TODO_ERROR } from './Error.js';

const API_PATH = 'https://todo-api.roto.codes';

export async function fetchUsersAPI() {
  try {
    const url = `${API_PATH}/users`;
    const response = await fetch(url);
    if(response.ok) return response.json();
    else throw new Error(FETCH_USERS_ERROR);
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function fetchTodoAPI(username) {
  try {
    const url = `${API_PATH}/${username}?delay=500`;
    const response = await fetch(url);
    if(response.ok) return response.json();
    else throw new Error(FETCH_TODO_ERROR);
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function addTodoAPI(username, newTodo) {
  try {
    const url = `${API_PATH}/${username}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTodo)
    });
    if(response.ok) return true;
    else throw new Error(ADD_TODO_ERROR);
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function deleteTodoAPI(username, todo_id) {
  try {
    const url = `${API_PATH}/${username}/${todo_id}`;
    const response = await fetch(url, {
      method: 'DELETE'
    });
    if(response.ok) return true;
    else throw new Error(DELETE_TODO_ERROR);
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function removeAllAPI(username) {
  try {
    const url = `${API_PATH}/${username}/all`;
    const response = await fetch(url, {
      method: 'DELETE'
    });
    if(response.ok) return true;
    else throw new Error(REMOVE_ALL_ERROR);
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function toggleTodoAPI(username, todo_id) {
  try {
    const url = `${API_PATH}/${username}/${todo_id}/toggle`;
    const response = await fetch(url, {
      method: 'PUT'
    });
    if(response.ok) return true;
    else throw new Error(TOGGLE_TODO_ERROR);
  } catch (error) {
    console.log(error);
    return false;
  }
}
