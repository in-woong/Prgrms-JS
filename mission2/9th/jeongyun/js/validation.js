export const useNewKeyword = (context) => {
  if (context === window) {
    throw new Error('not called with new');
  }
}

export const useArrayState = (state) => {
  if(!Array.isArray(state)) {
    throw new Error('TypeError: state is not iterable');
  }
}

export const checkTarget = ($target) => {
  if (!$target) {
    throw new Error('target이 올바르지 않습니다.')
  }
}

export const checkTypes = (state, checkCallback) => {
  console.log(state)
  if (!state.every(checkCallback)) {
    throw new Error('state가 올바르지 않습니다.')
  }
}
