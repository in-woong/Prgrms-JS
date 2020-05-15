import {todoListErrorMessage} from '../../error.js'

const isUndefinedOrNull = (todo) => {
  return todo === null || todo === undefined
}

const isInvalidTodoProperty = (todo) => {
  return todo.some(element => !('text' in element) || !('isCompleted' in element))
}

// new 키워드 유무 체크
const checkTodoListDataType = (todoList) => {
  if(isUndefinedOrNull(todoList.todo)){
    throw new Error(todoListErrorMessage['null_or_undefined'])
  }

  if(!Array.isArray(todoList.todo)){
    throw new Error(todoListErrorMessage['not_array'])
  }

  if(isInvalidTodoProperty(todoList.todo)){
    throw new Error(todoListErrorMessage['not_exist_test_property'])
  }
}

//공백 제거
const isTodoTextEmpty = (text) => {
  // return text.replace(/\s/gi, "") === ""
  return text.trim()
}

// 올바른 파라메터 체크
const checkCorrectInstance = (todoList, constructor) => {
  if(!(todoList instanceof constructor)){
    throw new Error(todoListErrorMessage['not_object'])
  }
}

const getTodoListHTMLText = (element, index) => {
  return `
          <div class='todo' data-todo-id = ${index}>
            ${(element.isCompleted) ? `<s><span class='todo-text'>${element.text}</span></s>` : `<span class='todo-text'>${element.text}</span>`}
            <span class='todo-close'>&times;</span>
          </div>
         `
}

export function isCorrectTodoList(thisObject, constructor){
  try {
    checkCorrectInstance(thisObject, constructor) 
    checkTodoListDataType(thisObject)
  }catch (e){
    console.error(e)
    return false
  }
  return true
}

export function isCorrectTodoInputOrTodoCount(thisObject, constructor){
  try {
    checkCorrectInstance(thisObject, constructor)
  }catch (e){
    console.error(e)
    return false
  }
  return true
}

export function getTodo(text){
  return {text: text, isCompleted: false}
}

//todo class 리턴
export function getTodoElement(element){
  return element.getAttribute("data-todo-id") ? element : element.parentNode
}

export function createTodoInnerHTML(todo){
  const todoHTMLText = todo.map((element, index) => {
    return getTodoListHTMLText(element, index)
  }).join('')
  return todoHTMLText
}

export function createTodoCountInnerHTML(todo){
  const todoCompletedCount = todo.filter( e => e.isCompleted === true).length
  return `<p>할 일 : ${todo.length}, 완료 : ${todoCompletedCount}</p>`
}

export function addTodoEvent(target, onAddTodo){
  const todoText = target.value
  target.value = ''

  //빈 값 or 공백은 추가 x
  if(isTodoTextEmpty(todoText)){
      return
  }

  onAddTodo(todoText)
}

