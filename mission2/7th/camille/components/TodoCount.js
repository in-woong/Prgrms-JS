/**
 * TodoCount component
 * @param todoData
 * @constructor
 */
const TodoCount = function(todoData) {
  this.init(todoData)
}

TodoCount.prototype = {
  todos: null,
  remainText: '0',
  $remainCount: null,
  $totalCount: null,

  setVars(todoData) {
    this.todos = todoData
    this.$remainCount = document.getElementById('tx-remain')
    this.$totalCount = document.getElementById('tx-total')
  },

  init(todoData) {
    this.setVars(todoData)
    this.render()
  },

  render() {
    this.$remainCount.innerHTML = this.remainText
    this.$totalCount.innerHTML = this.todos.length
  },

  setState(nextData) {
    if (!validateData(nextData)) {
      this.todos = nextData
      const newData = nextData.filter((todoData) => {
        return todoData.isComplete === true
      })
      this.remainText = newData.length.toString()
    }
    this.render()
  },

}
