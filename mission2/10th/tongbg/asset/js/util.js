const getBackUpTodo = () => {
  const restoreData = JSON.parse(localStorage.getItem('todoData'))
  return Array.isArray(restoreData) ? restoreData : []
}

const setBackUpTodo = (todoData) => {
  localStorage.setItem('todoData', JSON.stringify(todoData))
}

const getDOM = (query) => {
  return document.querySelector(query)
}

export { getBackUpTodo, setBackUpTodo, getDOM }
