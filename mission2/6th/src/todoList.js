import * as utils from '../utils/utils.js'
const validateData = utils.validateData
const updateData = utils.updateData

function TodoList(parentId, data = null) {
  if (!new.target) throw 'TodoList() must be called with new'

  this.data = data === null ? [] : validateData(data)
  this.setState = (newData) => {
    newData && updateData.call(this, newData)
    this.render()
  }

  this.makeNewTodoSection = () => {
    const newTodoSection = document.createElement('div')
    newTodoSection.innerHTML = `
    <label for="newTodo-input"> 새로운 할 일
    </label>
        <input id="newTodo-input" type="text"/>
    <button id='newTodo-btn'>추가</button>
    `
    const newTodoBtn = newTodoSection.querySelector('#newTodo-btn')
    const newTodoInput = newTodoSection.querySelector('#newTodo-input')
    newTodoInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && newTodoInput.value) {
        this.setState([{ text: newTodoInput.value }])
        this.newTodoSection.querySelector('#newTodo-input').focus()
        // newTodoInput 또는 newTodoSection으로 querySelect을 하면, makeNewTodoSection 지역변수이므로
        // this.setState에 의해 newTodoInput, newTodoSection 정보가 날라가 focus가 되지 않는다.
        // so, this.newTodoSection으로 querySelect을 사용.
        // render시 전체를 새로 render하는 것이 아니라, 수정되는 항목만 render되게끔 구성하려면
        // 컴포넌트를 조밀하게 세분화해서 각 항목을 따로 render해줘야 할까..?
      }
    })
    newTodoBtn.addEventListener('click', () => {
      newTodoInput.value && this.setState([{ text: newTodoInput.value }])
      // updateData에서 this사용

      this.newTodoSection.querySelector('#newTodo-input').focus()
    })
    return newTodoSection
  }

  this.makeTodoList = () => {
    const todoList = document.querySelector(parentId)
    todoList.innerHTML = `<h1>투두리스트${parentId.match(
      /\d+/g
    )}</h2><ul>${this.data
      .map((todo, i) =>
        todo.isCompleted
          ? `<li><s>${todo.text}</s></li>`
          : `<li>${todo.text}</li>`
      )
      .join('')}</ul>`
    return todoList
  }

  this.render = () => {
    this.todoList = this.makeTodoList()
    this.newTodoSection = this.makeNewTodoSection()
    this.todoList.append(this.newTodoSection)
  }
}

export default TodoList
