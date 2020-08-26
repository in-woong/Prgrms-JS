const TODO_URL = 'https://todo-api.roto.codes';

export async function loadAllUsers() {
  const data = await fetch(`${TODO_URL}/users`);
  return await data.json();
}

export async function loadUserTodoList(username) {
  const data = await fetch(`${TODO_URL}/${username}`);
  return await data.json();
}

export async function addUserTodo(username, todo) {
  await fetch(`${TODO_URL}/${username}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content: todo,
    }),
  });
}

export async function deleteUserTodo(username, todoId) {
  await fetch(`${TODO_URL}/${username}/${todoId}`, {
    method: 'DELETE',
  });
}

export async function toggleUserTodo(username, todoId) {
  await fetch(`${TODO_URL}/${username}/${todoId}/toggle`, {
    method: 'PUT',
  });
}
