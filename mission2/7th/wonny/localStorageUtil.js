const LOCAL_STORAGE_KEY_TODOS = 'TODOS'

const getTodosFromLocalStorage = () => {
  try {
    const todosString = localStorage.getItem(LOCAL_STORAGE_KEY_TODOS)
    const todos = todosString ? JSON.parse(todosString) : []
    return todos
  } catch (error) {
    throw Error(error)
  }
}

const setTodosToLocalStorage = (todos) => {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY_TODOS, JSON.stringify(todos))
  } catch (error) {
    throw Error(error)
  }
}
