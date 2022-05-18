const API_END_POINT = 'https://todo-api.roto.codes';

export const MY_NAME = 'sungwoonMoon';

const request = async (url, option) => {
  try {
    const res = await fetch(url, option);
    if (res.ok) {
      return await res.json();
    }
    throw new Error('API REQUEST ERROR');
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const getTodos = async (userName, delay = 0) => {
  return await request(`${API_END_POINT}/${userName}?delay=${delay}`);
};

export const addTodo = async (userName, content) => {
  return await request(`${API_END_POINT}/${userName}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content,
    }),
  });
};

export const toggleTodo = async (userName, id) => {
  return await request(`${API_END_POINT}/${userName}/${id}/toggle`, {
    method: 'PUT',
  });
};

export const deleteTodo = async (userName, id) => {
  return await request(`${API_END_POINT}/${userName}/${id}`, {
    method: 'DELETE',
  });
};

export const deleteAllTodos = async (userName) => {
  return await request(`${API_END_POINT}/${userName}/all`, {
    method: 'DELETE',
  });
};

export const getUsers = async (delay = 0) => {
  return await request(`${API_END_POINT}/users?delay=${delay}`);
};
