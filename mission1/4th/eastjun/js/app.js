const TodoApp = (() => {
  const todoElementIdsMap = {
    READY: 'todo-list-ready',
    IN_PROGRESS: 'todo-list-in-progress',
    DONE: 'todo-list-done'
  }

  const init = () => {
    const todoList = new TodoList(todoData, todoElementIdsMap.READY)
    const inProgressList = new TodoList(inProgressData, todoElementIdsMap.IN_PROGRESS)
    const doneList = new TodoList(doneData, todoElementIdsMap.DONE)

    todoList.render()
    todoList.setState(replacedTodoData)
    inProgressList.render()
    doneList.render()
  }

  return {
    init
  }
})()

TodoApp.init()
