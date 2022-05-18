export default function TodoList({
    $target,
    initialState,
    onTodoClick,
    onRemove,
}); {
    const $todoList = document.createElement('div')
    $target.appendChild($todoList)

    this.onTodoClick = onTodoClick
    this.onRemove = onRemove

    this.state = initialState

    this.render = function () {
        $todoList.innerHTML = `<ul>${this.state
          .map(
            ({ content, isCompleted, _id }) =>
              `<li class="TodoList__item" data-index="${_id}">${
                isCompleted ? `<s>${content}</s>` : content
              } <button>x</button></li>`
          )
          .join('')}</ul>`
      }

      this.setState = function (nextState) {
          this.state = nextState
          this.render();
      }

      this.render()

      $todoList.addEventListener('click', (e) => {
          const $li = e.target.closest('.TodoList__item')

          const {index} = $li.dataset
          e.target.nodeName === 'BUTTON' ? onRemove(index) : onTodoClick(index)
      });
}