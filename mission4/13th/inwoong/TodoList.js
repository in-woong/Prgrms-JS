export default function TodoList({
  $target,
  initialState,
  onToggleCompleted,
  onDelete,
  isCompleted,
  handleDragStart,
  handleDragEnd
}) {
  console.log(isCompleted)
  this.state = initialState
  this.$target = $target
  const $todoList = document.createElement('div')

  const $isCompleted = document.createElement('h2')
  $isCompleted.innerText = isCompleted ? 'Completed' : 'Incompleted'

  const $list = document.createElement('ul')

  $list.setAttribute("style","min-height:100px")

  $list.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
      if (e.target.className === 'deleteBtn') {
        onDelete(e.target.dataset.id)
      } else {
        onToggleCompleted(e.target.dataset.id)
      }
    }
  })

  $list.addEventListener('dragstart', (e) => {
    e.dataTransfer.dropEffect = 'move'
    handleDragStart(e.target.dataset.id, isCompleted,e)
  })
  $list.addEventListener('dragover', (e) => {
    e.preventDefault()
    e.dataTransfer.dropEffect="move"

  })
  $list.addEventListener('drop', (e) => {
    e.preventDefault()
    handleDragEnd(isCompleted,e)
  })

  $todoList.append($isCompleted, $list)
  this.$target.appendChild($todoList)

  this.render = (isLaoding) => {
    $list.innerHTML = !isLaoding
      ? this.state
          .map((item) =>
            item.isCompleted === isCompleted
              ? `<li style="cursor:pointer" draggable="true" data-id=${item._id} data-completed=${item.isCompleted}>
                  ${item.content}
                  <button class="checkBtn" data-id=${item._id} >
                    ✅
                  </button>
                  <button class="deleteBtn" data-id=${item._id}>
                    ❎
                  </button>
                </li>`
              : ''
          )
          .join('')
      : 'IsLoading'
  }
  this.setState = (newData, isLoading = false) => {
    console.log('List SetState', newData)
    this.state = newData
    this.render(isLoading)
  }
  this.render()
}
