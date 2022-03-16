export default function TodoList(todoList, data, update) {
  if (!new.target) throw new Error('인스턴스 생성시 new를 붙혀주세요.')
  this.todos = data
  this.$todoList = todoList

  this.render = function () {
    const template = `<ul>${this.todos
      .map((todo, index) =>
        todo.isCompleted === true
          ? `<li data-id=${index}><s>${todo.text}</s></li>`
          : `<li data-id=${index}>${todo.text}<button class="todo-complete">완료</button></li>`
      )
      .join('')}</ul>
      `
    this.$todoList.innerHTML = template
  }

  this.$todoList.addEventListener('click', (e) => {
    const index = e.target.closest('li').dataset.id
    if (e.target.classList.contains('todo-complete')) {
      this.todos[index].isCompleted = true
    }
    update()
    this.render()
  })

  this.render()
}
