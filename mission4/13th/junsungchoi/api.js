const BASE_URL = "https://todo-api.roto.codes";

const callApi = async (callback) => {
  try {
    const res = await callback;

    if (!res.ok) {
      throw new Error("response error!");
    }

    return await res.json();
  } catch {
    console.error("fetch error!", e);
  }
}

export const api = {
  getTodoList: async (username) => await callApi(fetch(`${BASE_URL}/${username}`)),
  addTodo: async (username, content) =>
    await callApi(fetch(`${BASE_URL}/${username}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        content,
      })
    }
  )),
  deleteTodo: async (username, id) =>
    await callApi(fetch(`${BASE_URL}/${username}/${id}`, {
      method: "DELETE",
    })
  ),
  deleteAllTodo: async (username) =>
    await callApi(fetch(`${BASE_URL}/${username}/all`, {
      method: "DELETE",
    })
  ),
  toggleTodo: async (username, id) =>
    await callApi(fetch(`${BASE_URL}/${username}/${id}/toggle`, {
      method: "PUT",
    })
  ),
  getUsers: async () => await callApi(fetch(`${BASE_URL}/users`)),
}
