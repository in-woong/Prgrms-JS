const getBackUpTodo = () => {
  let restoreData = []

  try {
    restoreData = JSON.parse(localStorage.getItem('todoData'))
  } catch (e) {
    //  raiseEexcetion(ERROR_MSG.JSON_PARSE_ERROR)
    restoreData = Array.isArray(restoreData) ? restoreData : []
    setBackUpTodo(restoreData)
  }

  return restoreData
}

const setBackUpTodo = (todoData) => {
  localStorage.setItem('todoData', JSON.stringify(todoData))
}

const getDOM = (query) => {
  return document.querySelector(query)
}

export { getBackUpTodo, setBackUpTodo, getDOM }
