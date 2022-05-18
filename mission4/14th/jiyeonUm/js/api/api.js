const MISSION4_API_URL = 'https://todo-api.roto.codes/jiyeonUm';
const MISSION4_API_USER = 'https://todo-api.roto.codes';

export async function addTodoAPI({ addTodoData, addTodo }) {
  if (addTodoData) {
    try {
      await fetch(MISSION4_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(addTodoData),
      })
        .then((x) => x.json())
        .then((data) => {
          addTodo(data);
        });
    } catch (error) {
      return new Error('요청을 확인해주세요');
    }
  } else {
    return new Error('데이터를 확인해주세요.');
  }
}
export async function loadTodoListAPI({ loadTodo }) {
  try {
    await fetch(MISSION4_API_URL)
      .then((response) => response.json())
      .then((data) => {
        loadTodo(data);
      });
  } catch (error) {
    return new Error('다시 확인해주세요.');
  }
}

export async function updateTodoListAPI({ id, updateTodo }) {
  try {
    await fetch(MISSION4_API_URL + `/${id}/toggle`, { method: 'PUT' })
      .then((response) => response.json())
      .then((data) => {
        updateTodo(data);
      });
  } catch (error) {
    return new Error('다시 확인해주세요.');
  }
}

export async function deleteTodoAPI({ id, deleteTodo }) {
  try {
    await fetch(MISSION4_API_URL + `/${id}`, { method: 'DELETE' })
      .then((response) => response.json())
      .then((data) => {
        deleteTodo(data);
      });
  } catch (error) {
    return new Error('다시 확인해주세요.');
  }
}
export async function deleteTodoListAPI({ deleteTodoList }) {
  try {
    await fetch(MISSION4_API_URL + `/all`, { method: 'DELETE' })
      .then((response) => response.json())
      .then((data) => {
        deleteTodoList(data);
      });
  } catch (error) {
    return new Error('다시 확인해주세요.');
  }
}

export async function loadUserListAPI({ userList }) {
  try {
    await fetch(MISSION4_API_USER + '/users')
      .then((response) => response.json())
      .then((data) => {
        userList(data);
      });
  } catch (error) {
    return new Error('다시 확인해주세요.');
  }
}

export async function loadUserAPI({ userId, loadUser }) {
  try {
    await fetch(MISSION4_API_USER + `/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        loadUser(data);
      });
  } catch (error) {
    return new Error('다시 확인해주세요.');
  }
}
