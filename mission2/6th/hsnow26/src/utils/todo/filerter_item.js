import {todoListErrorMessage} from '../../error.js'

const isUndefinedOrNull = (todo) => {
  return todo === null || todo === undefined
}

const isNotExistTextProperty = (todo) => {
  return todo.some(element => !('text' in element))
}

// new 키워드 유무 체크
const checkTodoListDataType = (todoList) => {
  if(isUndefinedOrNull(todoList.todo)){
    throw new Error(todoListErrorMessage['null_or_undefined'])
  }

  if(!Array.isArray(todoList.todo)){
    throw new Error(todoListErrorMessage['not_array'])
  }

  if(isNotExistTextProperty(todoList.todo)){
    throw new Error(todoListErrorMessage['not_exist_test_property'])
  }
}

const isTodoTextEmpty = (text) => {
  return text.replace(/\s/gi, "") === ""
}

// 올바른 파라메터 체크
const checkCorrectInstance = (todoList, constructor) => {
  if(!(todoList instanceof constructor)){
    throw new Error(todoListErrorMessage['not_object'])
  }
}

const getTodoListHTMLText = (element, index) =>
  (element.isCompleted)
  ? `<div class='todo' data-todo-id = ${index}>
      <s>
        <span class='todo-text'>${element.text}</span>
      </s> 
      <span class='todo-close'>&times;</span>
      </div>`
  : `<div class='todo' data-todo-id = ${index}>
      <span class='todo-text'>${element.text}</span>
      <span class='todo-close'>&times;</span>
    </div>`

export function isCorrectTodoList(todoList, TodoList){
  try {
    checkCorrectInstance(todoList, TodoList) 
    checkTodoListDataType(todoList)
  }catch (e){
    console.error(e)
    return false
  }
  return true
}

export function isCorrectTodoInput(todoInput, TodoInput){
  try {
    checkCorrectInstance(todoInput, TodoInput)
  }catch (e){
    console.error(e)
    return false
  }
  return true
}

export function getCreateTodo(text){
  return {text: text, isCompleted: false}
}

export function getTodoElement(element){
  return element.getAttribute("data-todo-id") ? element : element.parentNode
}

export function createTodoInnerHTML(todo){
  const todoHTMLText = todo.map((element, index) => {
    return getTodoListHTMLText(element, index)
  }).join('')
  return todoHTMLText
}

export function addTodoEvent(target, addTodo){
  const todoText = target.value
  target.value = ''

  //빈 값 or 공백은 추가 x
  if(isTodoTextEmpty(todoText)){
      return
  }
  console.log('TodoInput todoText', todoText)

  addTodo(todoText)
}

