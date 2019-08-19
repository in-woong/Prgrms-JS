export default (function() {
  const createTodo = ({ prevTodoList, newTodoText }) => {
    return [...prevTodoList, { text: newTodoText, isCompleted: false }]
  }
  const deleteTodo = ({ prevTodoList, selectedTodoId }) => {
    return prevTodoList.filter((item, index) => index !== selectedTodoId)
  }
  const toggleTodo = ({ prevTodoList, selectedTodoId }) => {
    const prevTodoIem = prevTodoList[selectedTodoId]
    const newTodoItem = {
      ...prevTodoIem,
      isCompleted: !prevTodoIem.isCompleted,
    }

    return [
      ...prevTodoList.slice(0, selectedTodoId),
      newTodoItem,
      ...prevTodoList.slice(selectedTodoId + 1),
    ]
  }

  return {
    createTodo,
    deleteTodo,
    toggleTodo,
  }
})()
