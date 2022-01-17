import { END_POINT } from './constants.js';

export const request = async (url, options) => {
  const response = await fetch(`${url}`, {...options});

  return response;
};

export const fetchAddTodo = async (userName, todo) => {
  const response = await request(`${END_POINT}/${userName}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      content: `${todo}`
    })
  })

  return response;
};

export const fetchDeleteTodo = async (userName, todoId) => {
  const response = await request(`${END_POINT}/${userName}/${todoId}`, {
    method: 'DELETE'
  });

  return response;
}

export const fetchToggleTodo = async (userName, todoId) => {
  const response = await request(`${END_POINT}/${userName}/${todoId}/toggle`, {
    method: 'PUT',
  });

  return response;
}

export const fetchDeleteAllTodos = async (userName) => {
  const response = await request(`${END_POINT}/${userName}/all`, {
    method: 'DELETE',
  });

  return response;
}

export const fetchGetUsers = async () => {
  const response = await request(`${END_POINT}/users`);

  return response;
}

export const fetchGetUserTodos = async (userName) => {
  const response = await request(`${END_POINT}/${userName}`)

  return response;
}
