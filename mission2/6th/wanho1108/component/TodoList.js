export default function TodoList({ data, onToggle, onRemove }) {
  if (!(this instanceof TodoList)) {
    throw new Error('new 연산자를 사용해주세요.')
  }

  function getTodoId(element) {
    let $element = element

    while ($element !== null) {
      if ($element.tagName === 'LI' && $element.dataset.id) {
        return parseInt($element.dataset.id, 10)
      }

      $element = $element.parentElement
    }
  }

  this.$element = document.createElement('ul')

  let todos = data

  this.render = () => {
    this.$element.innerHTML = todos
      .map(({ id, text, isCompleted }) => {
        return `<li data-id="${id}">
            ${isCompleted ? `<s>${text}</s>` : text}
            <button type="button">삭제</button>
          </li>`
      })
      .join('')
  }

  this.setState = (nextData) => {
    todos = nextData
    this.render()
  }

  this.$element.addEventListener('click', (e) => {
    const { target: $target } = e
    const id = getTodoId($target)

    if ($target.tagName === 'BUTTON') {
      onRemove(id)
      return
    }

    onToggle(id)
  })
}
