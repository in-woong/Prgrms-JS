/**
 * App component
 * @param listContainerId
 * @constructor
 */
const App = function(listContainerId) {
  this.init(listContainerId)
  this.registerEvent()
}

App.prototype = {
  todos: null,
  todoListContainerId: null,
  todoList: null,
  todoInput: null,
  todoCount: null,
  nTotalCount: null,
  nRemainCount: null,
  $btnDeleteAll: document.getElementById('btn-delete-all'),

  init(listContainerId) {
    window.localStorage.clear() // todo 완료 후 삭제
    // console.log('App init')
    this.setVars(listContainerId)
    this.getData()

    // Declare instance for components render
    this.todoList = new TodoList(this.todos, this.todoListContainerId)
    this.todoInput = new TodoInput()
    this.todoCount = new TodoCount(this.todos)
  },

  setVars(listContainerId) {
    this.todoListContainerId = listContainerId
  },

  registerEvent() {
    this.$btnDeleteAll.addEventListener('removeAll', () => {
      this.deleteAllData()
    })
  },

  getData() {
    this.todos = getLocalStorageData()
  },

  setAddData(textboxValue) {
    this.getData()

    const addTodo = {
      id: Math.floor(Math.random() * 100000000).toString(),
      text: textboxValue,
      isComplete: false,
    }
    this.todos.push(addTodo)

    // Send to App for updateData(storage)
    this.updateData(this.todos)
  },

  updateData(newData) {
    // Update localStorage & setState
    setLocalStorageData(newData)
    this.setComponentState(newData)
  },

  deleteCurrentData(todoId) {
    this.getData()
    const newData = this.todos.filter((todoData) => {
      return todoData.id !== todoId
    })
    this.updateData(newData)
  },

  deleteAllData() {
    const newData = []
    this.updateData(newData)
  },

  setCheckTodoList(todoId) {
    this.getData()
    const _id = todoId.toString()
    const newData = this.todos.map((v) => {
      if (v.id === _id) {
        return {
          ...v,
          isComplete: !v.isComplete,
        }
      }
      return v
    })
    this.updateData(newData)
  },

  setComponentState(updatedData) {
    this.todoList.setState(updatedData)
    this.todoCount.setState(updatedData)
  },

}
