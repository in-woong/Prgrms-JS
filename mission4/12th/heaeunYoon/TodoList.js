export default function TodoList({
  $app,
  initialState,
  userName,
  onTodoClick,
  onDeleteButtonClick,
}) {
  this.state = {
    todos: initialState,
    userName,
  }

  this.$todoListWrap = document.createElement('div')

  $app.appendChild(this.$todoListWrap)

  this.setState = (nextState) => {
    this.state = nextState

    this.render()
  }

  this.setEvent = () => {
    this.$todoListWrap.addEventListener('click', (e) => {
      const $li = e.target.closest('li')
      const $deleteButton = e.target.closest('button')

      const todoId = $li?.id

      if ($deleteButton) {
        onDeleteButtonClick({ deletedId: todoId })
        return
      }

      if ($li) {
        onTodoClick({ clickedId: todoId })
        return
      }
    })

    this.$todoListWrap.addEventListener('dragstart', (e) => {
      const $todo = e.target.closest('li')
      const completeState = e.target.closest('ul').dataset.completeState

      if ($todo) {
        $todo.classList.add('dragging')

        e.dataTransfer.setData('application/todo-id', $todo.id)
        e.dataTransfer.setData(
          'application/dropzone-complete-state',
          completeState
        )

        e.dataTransfer.dropEffect = 'move'
      }
    })

    this.$todoListWrap.addEventListener('dragend', (e) => {
      const todo = e.target.closest('li')

      todo.classList.remove('dragging')
    })

    this.$todoListWrap.addEventListener('dragover', (e) => {
      e.preventDefault()

      e.dataTransfer.dropEffect = 'move'
    })

    this.$todoListWrap.addEventListener('drop', (e) => {
      e.preventDefault()

      const todoId = e.dataTransfer.getData('application/todo-id')
      const completeState = e.dataTransfer.getData(
        'application/dropzone-complete-state'
      )

      const currentCompleteState = e.target.dataset.completeState

      if (completeState !== currentCompleteState) {
        onTodoClick({ clickedId: todoId })
      }
    })
  }

  this.render = async () => {
    const { todos, userName } = this.state

    const completedTodos = this.state.todos.filter(
      ({ isCompleted }) => isCompleted
    )

    const noCompletedTodos = this.state.todos.filter(
      ({ isCompleted }) => !isCompleted
    )

    const completedTodosHtmlString =
      todos.length === 0
        ? '할일 목록이 비어있습니다'
        : completedTodos
            .map(
              ({ _id, content, isCompleted }) =>
                `<li id="${_id}" draggable="true">
                  ${
                    isCompleted
                      ? `<s>${content}</s>`
                      : `<span>${content}</span>`
                  }
                  <button>삭제</button>
                </li>`
            )
            .join('')

    const noCompletedTodosHtmlString =
      todos.length === 0
        ? '할일 목록이 비어있습니다'
        : noCompletedTodos
            .map(
              ({ _id, content, isCompleted }) =>
                `<li id="${_id}" draggable="true">
                  ${
                    isCompleted
                      ? `<s>${content}</s>`
                      : `<span>${content}</span>`
                  }
                  <button>삭제</button>
                </li>`
            )
            .join('')

    this.$todoListWrap.innerHTML = userName
      ? `
      <h2>${userName}</h2>
      <article class="todo-wrap">
        <section>
          <h3>미완료</h3>
          <ul data-complete-state="false">${noCompletedTodosHtmlString}</ul>
        </section>
        <section>
          <h3>완료</h3>
          <ul data-complete-state="true">${completedTodosHtmlString}</ul>
        </section>
      </article>
    `
      : '<p>아래의 유저 리스트에서 유저 이름을 선택해주세요</p>'
  }

  this.render()
  this.setEvent()
}
