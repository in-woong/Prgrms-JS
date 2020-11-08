export function checkNewKeyword(context) {
  if (context === window) {
    throw new Error('new operator must be called');
  }
}

export function checkTarget($target) {
  if (!$target) {
    throw new Error('DOM is not valid');
  }
}

export function checkTodoListData(data) {
  if (!Array.isArray(data)) {
    throw new Error('Data is not Array');
  }
  // 데이터 내용이 이상한 경우
  const invalidArray = data.some((data) => typeof (data.text) !== 'string' || typeof (data.isCompleted) !== 'boolean');
  if (invalidArray) {
    throw new Error('Invalid data is included');
  }
}
