// list의 존재 유무와 데이터 형식 및 타입 검사
const checkDataFormat = (todoList) => {
  if (!todoList || !Array.isArray(todoList)) {
    throw new Error('invalid data format!')
  }
  if (
    todoList.length &&
    !todoList.some((todo) => todo.hasOwnProperty('content'))
  ) {
    throw new Error('content property all undefined!')
  }
}

// error UI 구현
const renderErrorNotification = (errorMessage, elementDom) => {
  console.error(errorMessage)
  elementDom.innerHTML = `리스트 정보를 다시 확인해주세요 :)`
}

export { checkDataFormat, renderErrorNotification }
