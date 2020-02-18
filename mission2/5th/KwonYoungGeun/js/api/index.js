const fetchTodos = () => {
  try {
    const todos = localStorage.getItem('todos')
    if (!todos) {
      localStorage.setItem('todos', JSON.stringify([]))
      return []
    }
  } catch (e) {
    console.error(e)
  }

  return JSON.parse(todos)
}

const postTodo = data => {
  try {
    localStorage.setItem('todos', JSON.stringify(data))
  } catch (e) {
    console.error(e)
  }
}

export { fetchTodos, postTodo }
