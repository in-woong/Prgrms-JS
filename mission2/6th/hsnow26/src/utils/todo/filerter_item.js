import {todoListErrorMessage} from '../../error.js'

function isUndefinedOrNull(todo){
  return todo === null || todo === undefined
}

function isNotExistTextProperty(todo){
  return todo.some(element => !('text' in element))
}

function checkTodoListDataType(todoList){
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

function checkTodoListInstance(todoList, TodoList){
  if(!(todoList instanceof TodoList)){
    throw new Error(todoListErrorMessage['not_object'])
  }
}

export function isCorrectTodoList(todoList, TodoList){
  try {
    checkTodoListInstance(todoList, TodoList) // 올바른 파라메터 체크
    checkTodoListDataType(todoList) // new 키워드 유무 체크
  }catch (e){
    console.error(e)
    return false
  }
  return true
}

export function getCreateTodo(text){
  return {text: text, isCompleted: false}
}