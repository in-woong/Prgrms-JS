const API_BASE_URL = 'https://todo-api.roto.codes/yoonhan';

export async function fetchTodoListData() {
  return await fetch(API_BASE_URL).then((res) => {
    if (!res.ok) {
      return;
    }

    try {
      const data = res.json();
      return data;
    } catch (e) {
      return e;
    }
  });
}

export async function addTodoItem(content) {
  return await fetch(API_BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content,
    }),
  }).then((res) => {
    if (!res.ok) {
      return;
    }

    try {
      const data = res.json();
      return data;
    } catch (e) {
      return e;
    }
  });
}

export async function deleteTodoItem(todoId) {
  return await fetch(`${API_BASE_URL}/${todoId}`, {
    method: 'DELETE',
  }).then((res) => {
    if (!res.ok) {
      return;
    }

    try {
      const data = res.json();
      return data;
    } catch (e) {
      return e;
    }
  });
}

export async function deleteAllTodoItem() {
  return await fetch(`${API_BASE_URL}/all`, {
    method: 'DELETE',
  }).then((res) => {
    if (!res.ok) {
      return;
    }

    try {
      const data = res.json();
      return data;
    } catch (e) {
      return e;
    }
  });
}

export async function toggleTodoItem(todoId) {
  return await fetch(`${API_BASE_URL}/${todoId}/toggle`, {
    method: 'PUT',
  }).then((res) => {
    if (!res.ok) {
      return;
    }

    try {
      const data = res.json();
      return data;
    } catch (e) {
      return e;
    }
  });
}
