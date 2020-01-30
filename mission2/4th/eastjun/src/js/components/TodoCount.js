const TodoCount = (() => {
  let _totalCount = 0
  let _completedCount = 0
  const $input = document.getElementById('todo-input')

  const _render = (totalCount, completedCount) => {
    document.querySelector('#todo-count .count').innerHTML = totalCount
    document.querySelector('#completed-count .count').innerHTML = completedCount
  }

  const update = (totalCount, completedCount) => {
    _setState(totalCount, completedCount)
    _render(totalCount, completedCount)
  }

  const _setState = (totalCount, completedCount) => {
    _totalCount = totalCount
    _completedCount = completedCount
  }

  const _initEventLisetner = () => {
    $input.addEventListener('updateTodoItem', (event) => {
      update(event.detail.totalCount, event.detail.completedCount)
    })
  }

  const init = () => {
    _initEventLisetner()
  }

  return {
    init,
    update,
  }
})()

export default TodoCount
