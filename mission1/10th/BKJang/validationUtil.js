// undefined나 null 체크
const isNotNull = todos => {
  if (!todos) {
    throw new Error('TodoList 항목이 없습니다.');
  }
}

// 배열 체크
const isArray = todos => {
  if (!Array.isArray(todos)) {
    throw new Error('TodoList가 배열이 아닙니다.');
  }
}

// TodoList의 각 항목 데이터가 올바른지 체크
const isCorrectData = todos => {
  const isFalsyData = todos.some(todo => {
    return typeof todo.text !== 'string' || typeof todo.isCompleted !== 'boolean'
  });

  if (isFalsyData) {
    throw new Error('잘못된 데이터입니다.');
  }
}

// new 키워드 체크
export const checkUseNewKeyword = context => {
  if (!context) {
    throw new Error('인스턴스 생성시 new 키워드를 사용해주세요.');
  }
}

export const checkDataValidation = (todos, context) => {
  isNotNull(todos);
  isArray(todos);
  isCorrectData(todos);
}
