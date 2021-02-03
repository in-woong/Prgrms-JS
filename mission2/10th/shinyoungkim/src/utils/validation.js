/**
 * new keyword로 생성되었는지 확인
 */
export const checkNewKeyword = (newTarget) =>  {
  if (!newTarget) throw Error ('Must be called with new')
}

/**
 * 입력받은 state가 배열인가 확인
 * @param {Array} state
 */
export const checkArrayType = (state) =>  {
  if (!Array.isArray(state)) throw Error ('Data is not Array')
}

/**
 * 입력받은 state의 값이 checkCallback 조건에 맞게 통과하는지 확인
 * @param {Array} state
 * @param {Function} checkCallback
 */

export const checkTypes = (state, checkCallback) => {
  if (!state.every(checkCallback)) {
    throw new Error('Check your state')
  }
}