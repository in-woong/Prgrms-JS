const BASE_URL = 'https://todo-api.roto.codes';

const request = async (path, params) => {
  const url = `${BASE_URL}/${path}`;

  const response = await fetch(url, params);

  return response;
};

export const fetchTodos = async (username) => {
  const response = await request(`${username}?delay=2000`);

  if (!response.ok) {
    throw new Error(`${username}의 할 일을 불러올 수 없습니다.`);
  }

  const data = await response.json();

  return data;
};

export const fetchToggleTodo = async ({ username, id }) => {
  const response = await request(`${username}/${id}/toggle`, {
    method: 'PUT',
  });

  if (!response.ok) {
    throw new Error(`${username}의 할 일을 변경할 수 없습니다.`);
  }
};

export const fetchDeleteTodo = async ({ username, id }) => {
  const response = await request(`${username}/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error(`${username}의 할 일을 변경할 수 없습니다.`);
  }
};

export const fetchDeleteTodos = async (username) => {
  const response = await request(`${username}/all`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error(`${username}의 할 일을 삭제할 수 없습니다.`);
  }
};

export const fetchInsertTodo = async ({ username, content }) => {
  const response = await request(username, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ content }),
  });

  if (!response.ok) {
    throw new Error(`${username}의 할 일을 등록할 수 없습니다.`);
  }

  const data = await response.json();

  return data;
};

export const fetchUsers = async () => {
  const response = await request('users');

  if (!response.ok) {
    throw new Error('유저 리스트 정보를 불러올 수 없습니다.');
  }

  const data = await response.json();

  return data;
};
