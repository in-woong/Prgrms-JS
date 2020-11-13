export const useNewKeyword = (context) => {
    if (context === window) {
      throw new Error('new 키워드가 없음')
    }
  }
  
  export const useArrayState = (state) => {
    if (!Array.isArray(state)) {
      throw new Error('잘못된 state 입니다!')
    }
  }
  
  export const checkTarget = ($target) => {
    if (!$target) {
      throw new Error('target이 올바르지 않습니다.')
    }
  }
  
  export const checkTypes = (state, checkCallback) => {
    if (!state.every(checkCallback)) {
      throw new Error('state가 맞지 않습니다.')
    }
  }

  