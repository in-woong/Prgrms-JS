function TodoInput(elementId, onAdd, onRemoveAll) {
  if (this.constructor !== TodoInput) {
    throw new Error('TodoInput should be called by new keyword')
  }

  if (!elementId || typeof elementId !== 'string') {
    throw new Error('elementId is undefined or not string type')
  }

  let todoInputElemId = `${elementId}-input`
  let todoAddButtonElemId = `${elementId}-add-button`
  let todoRemoveAllButtonElemId = `${elementId}-remove-all-button`

  let $todoInput = null
  const addTodo = (todoText) => onAdd(todoText)

  const removeAllTodo = () => onRemoveAll()

  const initInputValue = () => {
    $todoInput.value = ''
    $todoInput.focus()
  }

  const createHtml = () => {
    document.getElementById(elementId).innerHTML = `
      <input type="text" id=${todoInputElemId}>
      <button id=${todoAddButtonElemId}>추가</button> 
      <button id=${todoRemoveAllButtonElemId}>모두 삭제</button> 
    `
  }

  const createEventHandler = () => {
    $todoInput = document.getElementById(todoInputElemId)

    $todoInput.addEventListener('keydown', (event) => {
      if (event.code === 'Enter') {
        addTodo($todoInput.value)
        initInputValue()
      }
    })

    const $target = document.getElementById(elementId)

    $target.addEventListener('click', (event) => {
      const eventTarget = event.target

      switch (eventTarget.id) {
        case todoAddButtonElemId:
          addTodo($todoInput.value)
          initInputValue()
          break

        case todoRemoveAllButtonElemId:
          const removeAllEvent = new CustomEvent('removeAll', { bubbles: true })
          eventTarget.dispatchEvent(removeAllEvent)
          break
      }
    })

    $target.addEventListener('removeAll', () => removeAllTodo())
  }

  this.render = () => {
    createHtml()
    createEventHandler()
  }
}
