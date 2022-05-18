const API_URL = 'https://todo-api.roto.codes';
export const USER_NAME = 'gyeongwon1275';

const ERROR_MESSAGE = {
  emptyTodo: 'todo 를 입력해주세요',
  invalidId: 'id 가 유효하지 않습니다. ',
};

async function request(endpoint, { body, ...customConfig } = {}) {
  const config = {
    method: 'GET',
    ...customConfig,
    headers: {
      'Content-Type': 'application/json',
      ...customConfig.headers,
    },
  };
  if (body) {
    config.body = JSON.stringify(body);
  }

  const response = await fetch(`${API_URL}/${endpoint}`, config);

  if (!response.ok) {
    const errorMessage = await response.text();

    throw new Error(errorMessage);
  }

  return await response.json();
}

export function getTodo(userName = USER_NAME) {
  try {
    return request(userName);
  } catch (error) {
    alert(error);
  }
}

export function addTodo(userName = USER_NAME, content) {
  try {
    if (!content) throw new Error(ERROR_MESSAGE.emptyTodo);
    return request(userName, { body: { content }, method: 'POST' });
  } catch (error) {
    alert(error);
  }
}

export function deleteTodo(userName = USER_NAME, id) {
  try {
    if (!id) throw new Error(ERROR_MESSAGE.invalidId);
    return request(`${userName}/${id}`, { method: 'DELETE' });
  } catch (error) {
    alert(error);
  }
}

export function deleteAllTodo() {
  try {
    return request(`${USER_NAME}/all`, { method: 'DELETE' });
  } catch (error) {
    alert(error);
  }
}

export function completeTodo(userName = USER_NAME, id) {
  try {
    if (!id) throw new Error(ERROR_MESSAGE.invalidId);
    return request(`${userName}/${id}/toggle`, { method: 'PUT' });
  } catch (error) {
    alert(error);
  }
}

export function getUsers() {
  try {
    return request('users');
  } catch (error) {
    alert(error);
  }
}
