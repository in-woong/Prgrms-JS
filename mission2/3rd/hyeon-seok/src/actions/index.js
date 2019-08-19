import {
  getActionNameByClassName,
  getParentElement,
  getTodoIdByElement,
} from '../util/index.js'
import reducer from '../reducer/index.js'

const ACTION_TYPE = {
  CREATE: 'createTodo',
  DELETE: 'deleteTodo',
  TOGGLE: 'toggleTodo',
}

const createTodo = function(e) {
  e.preventDefault()
  const isEnter = e.key === 'Enter'
  const { value: newTodoText } = e.target

  if (!isEnter || !newTodoText) {
    return
  }

  const dispatch = reducer[ACTION_TYPE.CREATE]
  const newTodoList = dispatch({
    prevTodoList: this.getTodo(),
    newTodoText: newTodoText,
  })
  this.setState({ newData: newTodoList })
}

const updateTodo = function({ target }) {
  const actionName = getActionNameByClassName({
    className: target.className,
  })
  const selectedAction = ACTION_TYPE[actionName]
  const isCreateTodoAction = selectedAction === ACTION_TYPE.CREATE

  if (!selectedAction || isCreateTodoAction) {
    return
  }
  const $todoItem = getParentElement({
    target: target,
    query: '.todo__item',
  })
  const selectedTodoId = getTodoIdByElement({ target: $todoItem })

  const newTodoList = reducer[selectedAction]({
    prevTodoList: this.getTodo(),
    selectedTodoId: selectedTodoId,
  })
  this.setState({ newData: newTodoList })
}

export { ACTION_TYPE, createTodo, updateTodo }
