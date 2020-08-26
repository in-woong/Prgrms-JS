const localStorageKey = 'todoData'

const setLocalStorageData = (todoListData) => {
  localStorage.setItem(localStorageKey, JSON.stringify(todoListData))
}

const getLocalStorageData = () => {
  const todo = localStorage.getItem(localStorageKey)
  return JSON.parse(todo) || []
}
