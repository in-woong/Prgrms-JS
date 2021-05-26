export function checkNewKeyword(target) {
  if (!target) {
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
  const invalidArray = data.some((data) => typeof (data.content) !== 'string'
    || typeof (data.isCompleted) !== 'boolean'
    || typeof (data._id) !== 'string');
  if (invalidArray) {
    throw new Error('Invalid data is included');
  }
}

export function checkUserListData(data) {
  if (!Array.isArray(data)) {
    throw new Error('Data is not Array');
  }
  // 데이터 내용이 이상한 경우
  const invalidArray = data.some((data) => typeof (data) !== 'string');
  if (invalidArray) {
    throw new Error('Invalid data is included');
  }
}
