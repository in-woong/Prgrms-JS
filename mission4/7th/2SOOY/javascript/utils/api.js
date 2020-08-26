const TODO_URL = 'https://todo-api.roto.codes';
const isResponseSuccess = (status) => !!(status >= 200 && status < 300);

// 유저 todo 조회
export const getTodoList = async (userName) => {
  const response = await fetch(`${TODO_URL}/${userName}`);
  if (isResponseSuccess(response.status)) {
    const todoResult = await response.json();
    return todoResult;
  }
  throw new Error(`[GET_TODOS] HTTP status : ${response.status}`);
};

// 유저 목록 조회
export const getUsers = async () => {
  const response = await fetch(`${TODO_URL}/Users`);
  if (isResponseSuccess(response.status)) {
    const userList = response.json();
    return userList;
  }
  throw new Error(`[GET_USERS] HTTP status : ${response.status}`);
};

// 유저 todo 추가
export const addTodo = async (userName, content) => {
  const option = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content,
    }),
  };

  const response = await fetch(`${TODO_URL}/${userName}`, option);
  if (!isResponseSuccess(response.status)) {
    throw new Error(`[ADD_TODO] HTTP status : ${status}`);
  }
};

// 유저 todo 제거
export const removeTodo = async (userName, todoId) => {
  const option = {
    method: 'DELETE',
  };

  const response = await fetch(`${TODO_URL}/${userName}/${todoId}`, option);
  if (!isResponseSuccess(response.status)) {
    throw new Error(`[REMOVE_TODO] HTTP status : ${status}`);
  }
};

// 유저 todo 상태 토글
export const toggleTodo = async (userName, todoId) => {
  const option = {
    method: 'PUT',
  };

  const response = await fetch(
    `${TODO_URL}/${userName}/${todoId}/toggle`,
    option
  );
  if (!isResponseSuccess(response.status)) {
    throw new Error(`[TOGGLE_TODO] HTTP status : ${response.status}`);
  }
};
