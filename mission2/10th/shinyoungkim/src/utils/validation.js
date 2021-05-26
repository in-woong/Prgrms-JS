/**
 * new keyword로 생성되었는지 확인
 */
export const checkNewKeyword = (newTarget) =>  {
  if (!newTarget) throw Error ('Must be called with new')
}

/**
 * 입력받은 state가 배열의 여부
 * @param {state} state
 */
export const checkArrayType = (state) =>  {
  if (!Array.isArray(state)) throw Error ('Data is not Array')
}

/**
 * target의 데이터가 이상할 경우
 * @param {Element} 
*/
export const checkTarget = (target) => {
  if(!target) throw Error ('Check your data')
}

/**
 * 입력받은 state의 값이 data가 string인지 boolean 값 인지에 확인
 * @param {object} 
 */
export const checkTypes = (state) => {
  if (!(typeof state.text === 'string') && !(typeof state.isCompleted === 'boolean')) {
    throw new Error('Check type error')
  }
}

/**
 * 입력받은 state의 값에 text, isCompleted property value에 확인
 * @param {object} 
 */
export const checkProperty = (state) => {
  if(!state.hasOwnProperty('text') || !state.hasOwnProperty('isCompleted')) {
    throw new Error('Check your data property')
  }
}

/**
 * 입력받은 text 값이 빈값이 있는지 여부
 * @param {string} 
 */
export const checkInputValue = (text) => {
  if(text === '') {
    alert('Please enter your todo-item')
    throw new Error('Please enter your todo-item')
  }
}
