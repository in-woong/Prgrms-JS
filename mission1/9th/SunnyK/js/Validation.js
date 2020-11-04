export const isArrayState = (state) => {
  if(!Array.isArray(state)) throw new Error("올바르지 않은 데이터 타입")
}

export const checkTypes = (state, checkCallback) => {
  if (!state.every(checkCallback)) {
    throw new Error("올바르지 않은 데이터 형식")
  }
} 

export const useNewKeyword = (context) => {
  if (context === window) {
    throw new Error('new 키워드가 없음')
  }
}
