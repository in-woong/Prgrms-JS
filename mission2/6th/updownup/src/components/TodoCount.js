function TodoCount(props) {
  let todos = props.data
  let $target = props.$target
  let todoCompletedCount = 0
  
  $target.insertAdjacentHTML('afterend', `<section>
    <span id="todo-list-count">전체 todo 갯수 : ${todos.length} / 완료 갯수 : ${todoCompletedCount}</span>
  </section>`)

  this.render = () => {
    const $todoListCount = document.querySelector('#todo-list-count')
    todoCompletedCount = todos.filter(todo => todo.isCompleted).length
    $todoListCount.innerHTML = `전체 todo 갯수 : ${todos.length} / 완료 갯수 : ${todoCompletedCount}`
   }

   this.setState = (nextData) => {
    todos = nextData
    this.render()
  }
}

export default TodoCount