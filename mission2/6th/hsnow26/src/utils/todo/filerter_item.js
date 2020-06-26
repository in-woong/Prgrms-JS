import {todoListErrorMessage} from '../../error.js'

const isUndefinedOrNull = todo => todo === null || todo === undefined

const isInvalidTodoProperty = todo => todo.some(element => !('text' in element) || !('isCompleted' in element))

// new 키워드 유무 체크
const checkTodoListDataType = (todoList) => {
  if(isUndefinedOrNull(todoList.todos)){
    throw new Error(todoListErrorMessage['null_or_undefined'])
  }

  if(!Array.isArray(todoList.todos)){
    throw new Error(todoListErrorMessage['not_array'])
  }

  if(isInvalidTodoProperty(todoList.todos)){
    throw new Error(todoListErrorMessage['not_exist_test_property'])
  }
}

//공백 제거
const isTodoTextEmpty = text => text.replace(/\s/gi, "") === ""

// 올바른 파라메터 체크
const checkCorrectInstance = (todoList, constructor) => {
  if(!(todoList instanceof constructor)){
    throw new Error(todoListErrorMessage['not_object'])
  }
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

export const createTodo = (text) => ({text: text, isCompleted: false})

//todo class 리턴
export function getTodoElement(element){
  return element.getAttribute("data-todo-id") ? element : element.parentNode
}

export function createTodoInnerHTML(todo){
  const todoHTML = todo.map((element, index) => {
    return `
            <div class='todo' data-todo-id = ${index}>
              ${(element.isCompleted) ? `<s><span class='todo-text'>${element.text}</span></s>` : `<span class='todo-text'>${element.text}</span>`}
              <span class='todo-close'>&times;</span>
            </div>
          `
  }).join('')
  return todoHTML
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

