const fetchTodos = () => {
  try {
    const todos = localStorage.getItem('todos')

    if (!todos) {
      localStorage.setItem('todos', JSON.stringify([]))
      return []
    }

    return JSON.parse(todos)
  } catch (e) {
    console.error(e)
  }
}

const postTodo = data => {
  try {
    localStorage.setItem('todos', JSON.stringify(data))
  } catch (e) {
    console.error(e)
  }
}

export { fetchTodos, postTodo }
