const fetchTodos = () => {
  const output = localStorage.getItem('todos')
  if (!output) {
    localStorage.setItem('todos', JSON.stringify([]))
    return []
  }

  const todos = JSON.parse(output)
  return todos
}

const postTodo = data => {
  localStorage.setItem('todos', JSON.stringify(data))
}
