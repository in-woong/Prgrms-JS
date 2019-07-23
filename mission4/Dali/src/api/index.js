import HttpError from '../utils/HTTPError.js';
import request from './request.js';

const baseUrl = 'http://todo-api.roto.codes';

const addBaseUrl = url => `${baseUrl}/${url}`;

const makeUpdateToggleUrl = (username, id) => addBaseUrl(`${username}/${id}/toggle`);

const makeDeleteTodoUrl = (username, id) => addBaseUrl(`${username}/${id}/`);

const makeGetUsersTodoUrl = () => addBaseUrl('users');

async function fetchData({
  username,
  beforeRequest,
  finishRequest,
}) {
  return request({
    url: addBaseUrl(username),
    beforeRequest,
    finishRequest,
  });
}

async function toggleTodoComplete(username, id) {
  return request({
    url: makeUpdateToggleUrl(username, id),
    options: {
      method: 'PUT',
    },
  });
}

async function deleteTodo(username, id) {
  return request({
    url: makeDeleteTodoUrl(username, id),
    options: { method: 'DELETE' },
  });
}

async function addTodo(username, todoText) {
  return request({
    url: addBaseUrl(username),
    options: {
      method: 'POST',
      body: JSON.stringify({
        content: todoText,
      }),
    },
  });
}

async function getUsersTodo() {
  return request({ url: makeGetUsersTodoUrl() });
}


export default {
  fetchData,
  toggleTodoComplete,
  deleteTodo,
  addTodo,
  getUsersTodo,
};
