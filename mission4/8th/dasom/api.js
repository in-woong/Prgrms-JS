const ENP_POINT = 'https://todo-api.roto.codes/:dasom';

const saveTodos = async (url, newData) => {
    await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            content: newData
        })
    })
}

const getTodos = async (url) => {
  const res = await fetch(url)
  return await res.json();
}

const deleteTodos = async (url, id) => {
    await fetch(`${url}/${id}`, {
    method: 'DELETE',
  })
}

const toggleTodos = async (url, id) => {
    await fetch(`${url}/${id}/toggle`, {
        method: 'PUT'
    })
}
 

export const getTodo = () => getTodos(ENP_POINT);
export const saveTodo = (newData) => saveTodos(ENP_POINT, newData);
export const deleteTodo = (id) => deleteTodos(ENP_POINT, id);
export const toggleTodo = (id) => toggleTodos(ENP_POINT, id);