const getTodosCount = ({ todos }) => {
  return todos.length
}

const getCompletedTodosCount = ({ todos }) => {
  return todos.filter(({ isCompleted }) => isCompleted).length
}

export { getTodosCount, getCompletedTodosCount }
