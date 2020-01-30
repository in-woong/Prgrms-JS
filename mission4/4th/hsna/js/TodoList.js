export default function TodoList(params) {
  const $target = params.$target
  const onClick = params.onClick
  const onRemove = params.onRemove
  let data = params.data || []

  $target.addEventListener('click', e => {
    const { id } = e.target.closest('li').dataset

    if (e.target.className === 'remove-button') {
      e.stopPropagation()
      onRemove(id)
    } else {
      onClick(id)
    }
  })

  this.setState = nextData => {
    data = nextData
    this.render()
  }

  this.render = () => {
    const htmlString = data.map(todo => {
      const contentHTML = todo.isCompleted
        ? `<strike>${todo.content}</strike>`
        : `${todo.content}`

      return `<li data-id="${todo._id}">${contentHTML} <button class="remove-button">Remove</button></li>`
    })

    $target.innerHTML = `<ul>${htmlString.join('')}</ul>`
  }

  this.render()
}
