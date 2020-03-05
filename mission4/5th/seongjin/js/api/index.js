import { BASE_URL } from "./config.js";

export const getTodoApi = async username => {
  const res = await fetch(`${BASE_URL}/${username}?delay=1000`);
  return await res.json();
};

export const addTodoApi = async (username, todo) => {
  await fetch(`${BASE_URL}/${username}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      content: todo
    })
  });
};

export const removeTodoApi = async (username, _id) => {
  await fetch(`${BASE_URL}/${username}/${_id}`, {
    method: "DELETE"
  });
};

export const toggleTodoApi = async (username, _id) => {
  await fetch(`${BASE_URL}/${username}/${_id}/toggle`, {
    method: "PUT"
  });
};

export const getUsersTodoApi = async () => {
  const users = await fetch(`${BASE_URL}/users?delay=1000`);
  return await users.json();
};
