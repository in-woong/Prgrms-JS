export const debounce = (targetFunction, debounceTime) => {
  // 디바운스를 걸 대상 함수와 디바운스 시간을 받아 디바운싱이 적용된 새로운 함수를 반환
  let timeoutId = null
  return (...args) => {
    const functionToBeCalledLater = () => {
      clearTimeout(timeoutId)
      timeoutId = null
      return targetFunction(...args)
    }
    if (timeoutId) {
      return
    }
    timeoutId = setTimeout(functionToBeCalledLater, debounceTime)
  }
}
