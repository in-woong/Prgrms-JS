export default (function() {
  const createTodo = ({ prevTodoList, newTodoText }) => {
    return [...prevTodoList, { text: newTodoText, isCompleted: false }]
  }
  const deleteTodo = ({ prevTodoList, selectedTodoIndex }) => {
    return prevTodoList.filter((item, index) => index !== selectedTodoIndex)
  }
  const toggleTodo = ({ prevTodoList, selectedTodoIndex }) => {
    const prevTodoIem = prevTodoList[selectedTodoIndex]
    const newTodoItem = {
      ...prevTodoIem,
      isCompleted: !prevTodoIem.isCompleted,
    }

    return [
      ...prevTodoList.slice(0, selectedTodoIndex),
      newTodoItem,
      ...prevTodoList.slice(selectedTodoIndex + 1),
    ]
  }

  return {
    createTodo,
    deleteTodo,
    toggleTodo,
  }
})()
