export default (function() {
  const createTodo = todoList => {}
  const deleteTodo = (todoList, todoIndex) => {
    return todoList.filter((item, index) => index !== todoIndex)
  }
  const toggleTodo = (todoList, todoIndex) => {
    const prevTodoIem = todoList[todoIndex]
    const newTodoItem = {
      ...prevTodoIem,
      isCompleted: !prevTodoIem.isCompleted,
    }

    return [
      ...todoList.slice(0, todoIndex),
      newTodoItem,
      ...todoList.slice(todoIndex + 1),
    ]
  }

  return {
    createTodo,
    deleteTodo,
    toggleTodo,
  }
})()
