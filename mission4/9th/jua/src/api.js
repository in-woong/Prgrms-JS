const END_POINT = 'https://todo-api.roto.codes';
const DELAY = 3000;

const request = async (url, option) => {
  try {
    const res = await (fetch(`${END_POINT}/${url}`, option));
    if (res.ok) {
      return await res.json();
    }
    return null;
  } catch (e) {
    throw new Error(`${END_POINT}/${url} api에 문제가 있음`);
  }
};

export const loadTodoList = (user) => request(`${user}?delay=${DELAY}`);

export const addTodo = (user, todoInput) => request(user, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    content: todoInput,
  }),
});

export const deleteTodo = (user, _id) => request(`${user}/${_id}`, {
  method: 'DELETE',
});

export const deleteAllTodo = (user) => request(`${user}/all`, {
  method: 'DELETE',
});

export const toggleTodo = (user, _id) => request(`${user}/${_id}/toggle`, {
  method: 'PUT',
});

export const loadUsers = () => request('users');
