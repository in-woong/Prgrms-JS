import { todoValidate } from '../utils/Validator.js'
import ErrorMessage from '../utils/ErrorMessage.js'

function TodoList({ $target, state, onToggleTodo, onDeleteTodo }) {
  if (!new.target) {
    throw new Error(ErrorMessage.SET_NEW_ERROR)
  }

  todoValidate(state.todos)

  this.$target = $target
  this.$todoListUl = document.createElement('ul')
  this.$todoListUl.classList.add('todoUl')
  this.$target.appendChild(this.$todoListUl)

  this.onToggleTodo = onToggleTodo
  this.onDeleteTodo = onDeleteTodo

  this.state = state

  this.todoClickHandler = (e) => {
    const { classList } = e.target

    if (classList.contains('toggle')) {
      this.onToggleTodo(e.target.closest('li').id)
    }

    if (classList.contains('remove')) {
      this.onDeleteTodo(e.target.closest('li').id)
    }
  }

  this.onDrag = (e) => {
    e.dataTransfer.setData('text', e.target.id)
  }
  this.allowDrop = (e) => {
    e.preventDefault();
  }
  this.drop = (e) => {
    e.preventDefault();

    const dropElementId = e.dataTransfer.getData("text");
    const dragStartElementSectionId = document.getElementById(dropElementId).closest('section').id;
    const droppedElementSectionId = e.target.closest('section').id;
    if(dragStartElementSectionId !== droppedElementSectionId){
      this.onToggleTodo(dropElementId)
    }
  }

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    const htmlString =
      this.state.todos.length < 1
        ? `<li>할 일을 입력하세요!</li>`
        : this.state.todos
            .map(
              (todo) => `<li id=${todo._id} class="complete_${todo.isCompleted}" draggable="true">
              <p class="toggle">${todo.content}</p>
              <span class="remove">X</span>
              </li>`
            )
            .join('')
    this.$todoListUl.innerHTML = htmlString
  }

  this.render()

  this.$todoListUl.addEventListener('click', this.todoClickHandler)
  this.$todoListUl.addEventListener('dragstart', this.onDrag);
  this.$todoListUl.addEventListener('dragover', this.allowDrop);
  this.$todoListUl.addEventListener('drop', this.drop);
}

export default TodoList
