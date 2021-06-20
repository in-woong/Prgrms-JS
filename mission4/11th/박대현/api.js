const baseURL = 'https://todo-api.roto.codes';
export default {
  getTodoList : async username => {
    const response = await fetch(`${baseURL}/${username}`);
    return await response.json();
  },
  addTodo : async (username, content) => {
    const response = await fetch(`${baseURL}/${username}`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        content
      })
    });
    return await response.json();
  },
  deleteTodo : async (username, todo_id) => {
    const response = await fetch(`${baseURL}/${username}/${todo_id}`,{
      method: 'DELETE'
    });
    return await response.json();
  },
  deleteTodoAll: async username => {
    const response = await fetch(`${baseURL}/${username}/all`,{
      method: 'DELETE'
    });
    return await response.json();
  },
  toggleTodoStatus : async (username, todo_id) => {
    const response = await fetch(`${baseURL}/${username}/${todo_id}/toggle`,{
      method: 'PUT'
    });
    return await response.json();
  },
}