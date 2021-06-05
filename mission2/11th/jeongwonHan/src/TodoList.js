import { todoValidate } from "../utils/Validation.js"
import ErrorMessage from "../utils/ErrorMessage.js"
import TodoCount from "./TodoCount.js"

function TodoList($app, initialState, onCompleteToggle) {
  if (!new.target) {
    throw new Error(ErrorMessage.SET_NEW_ERROR)
  }

  todoValidate(initialState)

  this.$target = document.createElement("div")
  this.$target.setAttribute("data-component-type", "TodoList")
  $app.appendChild(this.$target)
  this.onCompleteToggle = onCompleteToggle

  this.state = initialState

  this.todoCount = new TodoCount($app, this.state)

  this.todoClickHandler = (e) => {
    if (!e.target.nodeName === "LI") return
    this.onCompleteToggle(Number(e.target.id))
  }

  this.setState = function (nextState) {
    this.state = nextState
    this.render()
    this.todoCount.setState(nextState)
  }

  this.render = function () {
    const htmlString =
      this.state.length < 1
        ? `<li>오늘 할 일을 입력하세요!</li>`
        : this.state
            .map(
              (todo) => `<li id=${todo.id} class="complete_${todo.isCompleted}">${todo.text}</li>`
            )
            .join("")

    this.$target.innerHTML = `<ul class="todoUl">${htmlString}</ul>`
  }

  this.render()
  this.todoCount.render()

  this.$target.addEventListener("click", (e) => {
    this.todoClickHandler(e)
  })
}

export default TodoList
