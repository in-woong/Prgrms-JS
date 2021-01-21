/**
 * new 키워드를 사용하여 생성되었는지 확인
 */
export const checkNewKeyword = (newTargetConstructor) => {
  if (!newTargetConstructor) {
    throw new Error('new 키워드가 없음')
  }
}

/**
 * 입력받은 아이디를 가진 HTML 엘리먼트가 존재하는지 확인
 * @param {String} elementId
 * @returns {Element} elementId를 아이디로 가진 엘리먼트
 */
export const checkValidElementId = (elementId) => {
  const $element = document.getElementById(elementId)

  if (!$element) {
    throw new Error('유효하지 않은 엘리먼트 아이디')
  }

  return $element
}

/**
 * 배열 state 내 모든 요소가 callback을 통과하는지 확인
 * @param {Array} state
 * @param {Function} callback
 */
export const checkArrayStateTypes = (state, callback) => {
  if (state.length > 0 && !state.some(callback)) {
    throw new Error('올바르지 않은 데이터 형식')
  }
}

/**
 * 입력받은 state가 배열 인지 확인
 * @param {Array} state
 */
export const isArrayState = (state) => {
  if (!Array.isArray(state)) throw new Error('올바르지 않은 데이터 타입')
}
