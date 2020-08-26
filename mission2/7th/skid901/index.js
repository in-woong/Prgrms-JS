try {
  new TodoApp('todo-list')
  new TodoApp('doing-list')
  new TodoApp('done-list')
} catch (e) {
  console.log(`An error has occurred. : ${e}`)
}
