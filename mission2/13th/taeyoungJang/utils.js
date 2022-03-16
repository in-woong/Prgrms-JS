export function isValidTarget(element) {
  if (!element || !(element instanceof HTMLElement)) {
    throw new Error(
      '에러! target 인자값이 존재하지 않거나 DOM에 존재하지 않는 요소입니다.'
    );
  }
}

export function isValidConstructor(cons) {
  if (!(this instanceof cons)) {
    throw new Error(
      '에러! 해당 함수는 생성자 함수입니다. new 키워드와 함께 호출해주세요.'
    );
  }
}

export function isValidParameter(params) {
  if (params == null || params == undefined) {
    throw new Error('에러! 인자값은 null 또는 undefined일 수 없습니다.');
  }
  if (!Array.isArray(params)) {
    throw new Error('에러! 인자값은 배열 형태의 객체여야 합니다.');
  }
  // 데이터 형태 검증
  const isCorrectShape = params.find(
    (item) =>
      typeof item['text'] !== 'string' ||
      typeof item['isCompleted'] !== 'boolean'
  );
  if (isCorrectShape) {
    throw new Error(
      '에러! 인자값의 데이터 형태가 올바르지 않습니다. [{ text: (string), isCompleted: (boolean) },]와 같은 형태로 만들어 주세요.'
    );
  }
}
