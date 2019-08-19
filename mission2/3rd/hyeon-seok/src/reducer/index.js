const reducer = {
  createTodo: function({ prevTodoList, newTodoText }) {
    return [...prevTodoList, { text: newTodoText, isCompleted: false }]
  },
  deleteTodo: function({ prevTodoList, selectedTodoId }) {
    return prevTodoList.filter((item, index) => index !== selectedTodoId)
  },
  toggleTodo: function({ prevTodoList, selectedTodoId }) {
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
  },
}
export default reducer
