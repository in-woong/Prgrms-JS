// list의 존재 유무와 데이터 형식 및 타입 검사
function checkDataFormat(todoList) {
  if (!todoList || !Array.isArray(todoList)) {
    throw new Error('invalid data format!');
  }
  if (
    todoList.length &&
    !todoList.some((todo) => todo.hasOwnProperty('text'))
  ) {
    throw new Error('text property all undefined!');
  }
}

// error UI 구현
function renderErrorNotification(errorMessage, elementId) {
  console.error(errorMessage);
  document.querySelector(
    `#${elementId} .content`
  ).innerHTML = `리스트 정보를 다시 확인해주세요 :)`;
}

export { checkDataFormat, renderErrorNotification };
