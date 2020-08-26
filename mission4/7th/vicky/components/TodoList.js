function TodoList(elementDom, onToggle) {
  if (!(this instanceof TodoList)) {
    throw new Error('error: TodoList must be called with new!')
  }

  this.render = () => {
    this.elementDom = elementDom
    this.listDom = this.elementDom.querySelector('.todoList')
    this.onToggle = onToggle

    if (!this.todoList.length) {
      this.listDom.innerHTML = '목록을 추가해주세요 :)'
      return
    }

    const createDropZone = document.createElement('div')
    createDropZone.className = 'dragBox'
    createDropZone.innerHTML = `
      <div id="inComplete" class="dropbox" ondrop="drop_handler(event)" ondragover="dragover_handler(event)"></div>
      <div id="complete" class="dropbox" ondrop="drop_handler(event)" ondragover="dragover_handler(event)"></div>`
    this.listDom.appendChild(createDropZone)

    const inCompletedHtmlString = this.todoList
      .filter((todo) => todo.isCompleted === false)
      .map(
        (todo) =>
          `<p class="list" id="${todo._id}" draggable="true" ondragstart="dragstart_handler(event)">
            ${todo.content}
            <button type="text" name="deleteList"></button>
          </p>`
      )
      .join('')

    const completedHtmlString = this.todoList
      .filter((todo) => todo.isCompleted === true)
      .map(
        (todo) =>
          `<p class="list" id="${todo._id}" draggable="true" ondragstart="dragstart_handler(event)">
            ${todo.content}
            <button type="text" name="deleteList"></button>
          </p>`
      )
      .join('')

    this.elementDom.querySelector('#inComplete').innerHTML =
      `<h2>inCompleted</h2>` + inCompletedHtmlString
    this.elementDom.querySelector('#complete').innerHTML =
      `<h2>completed</h2>` + completedHtmlString
  }

  this.setState = (todoList) => {
    this.todoList = todoList
    this.render()
  }

  // FIXME: window 객체 선언 말고 다른 방법은 없을까?
  window.dragstart_handler = (ev) => {
    ev.dataTransfer.setData('text/plain', ev.target.id)
    ev.dataTransfer.dropEffect = 'move'
  }

  window.dragover_handler = (ev) => {
    ev.preventDefault()
    if (ev.target.tagName !== 'DIV') {
      return
    }
    ev.dataTransfer.dropEffect = 'move'
  }

  window.drop_handler = (ev) => {
    ev.preventDefault()
    if (ev.target.tagName === 'DIV') {
      const data = ev.dataTransfer.getData('text/plain')
      ev.target.appendChild(document.getElementById(data))
      this.onToggle(data)
    }
  }
}

export default TodoList
