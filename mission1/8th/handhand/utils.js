
function checkValidation(todos) {
  if (!todos || !Array.isArray(todos)) {
    throw new Error('인자가 배열 형태가 아닙니다!');
  }

  todos.forEach(todo => {
    if (!todo.hasOwnProperty('text') || !todo.text) {
      throw new Error('데이터 형식이 올바르지 않습니다!');
    }
  })
}

export { checkValidation };
