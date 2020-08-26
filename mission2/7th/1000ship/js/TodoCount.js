export default function TodoCount(app, $countEl) {
  this.app = app
  this.$countEl = $countEl

  this.render = function() {
    this.$countEl.innerHTML = `${this.app.todos.length} ${this.app.todos.length === 1 ? 'item' : 'items'}`
  }
}
