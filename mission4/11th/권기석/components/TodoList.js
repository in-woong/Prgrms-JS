export default function TodoList({ $trello, initialState, onRemove, onClick }) {
  this.state = initialState
  this.$todoList = document.createElement('ul')
  this.$todoList.className = 'todoList'
  // this.onRemove = onRemove 이런 식으로 선언 한뒤, addEventListener에서 this.onRemove()가 제대로 동작이 안되는 이유 찾아보기
  // this.onClick = onClick
  $trello.appendChild(this.$todoList)

  this.$todoList.addEventListener('click', function (e) {
    const id = e.target.closest('li').dataset.id

    if (e.target.className === 'remove-button') {
      e.stopPropagation()
      onRemove(id)
    } else {
      onClick(id)
    }
  })

  this.$todoList.addEventListener('dragover', (e) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
  })

  this.$todoList.addEventListener('drop', (e) => {
    e.preventDefault()
    const targetId = e.dataTransfer.getData('id')
    const startBoundary = document.getElementById(targetId).parentNode
    const droppedBoundary = e.target.closest('ul')
    if (startBoundary !== droppedBoundary) {
      onClick(targetId)
    }
  })

  this.setState = function (nextData) {
    this.state = nextData
    this.render()
  }

  this.render = function () {
    if (this.state.isLoading) {
      this.$todoList.innerHTML = `현재 데이터를 불러오고 있습니다... logging...`
    } else {
      const htmlString = this.state.todos
        .map(function (todo) {
          const contentHTML = todo.isCompleted ? `<strike>${todo.content}</strike>` : `${todo.content}`
          return `<li id=${todo._id} draggable="true" data-id="${todo._id}">${contentHTML} <button class="remove-button">Remove</button></li>`
        })
        .join('')

      this.$todoList.innerHTML = htmlString
    }
  }

  this.render()
}
