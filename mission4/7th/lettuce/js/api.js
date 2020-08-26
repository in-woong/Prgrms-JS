const API_URL = 'https://todo-api.roto.codes';
const FETCH_DELAY = 3000;

export async function fetchTodoListFromServer(userName) {
  const res = await fetch(`${API_URL}/${userName}?delay=${FETCH_DELAY}`);
  return await res.json();
}

export async function addTodoToServer(userName, contentText) {
  await fetch(`${API_URL}/${userName}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ content: contentText }),
  });
}

export async function deleteTodoById(userName, todoId) {
  await fetch(`${API_URL}/${userName}/${todoId}`, { method: 'DELETE' });
}

export async function toggleTodoById(userName, todoId) {
  await fetch(`${API_URL}/${userName}/${todoId}/toggle`, { method: 'PUT' });
}

export async function fetchUsersFromServer() {
  const res = await fetch(`${API_URL}/users`);
  return await res.json();
}
