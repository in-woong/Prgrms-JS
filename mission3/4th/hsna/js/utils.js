export function debounce(targetFunction, debounceTime) {
  let timeoutId = null // 이 timeoutId가 이 함수 내부에서 주기적으로 바뀌기 때문에 let으로 선언합니다.

  // 원래 함수가 어떤 파라미터를 받을지 모르니 rest parameter로 받습니다.
  return (...args) => {
    const functionToBeCalledLater = () => {
      // 함수가 실제로 실행이 되면 타임아웃을 해제하고 timeoutId를 초기화 시킵니다.
      clearTimeout(timeoutId)
      timeoutId = null
      return targetFunction(...args) // 대상 함수가 반환하는 것을 이 함수도 똑같이 반환시키게 합니다.
    }

    // 처음 실행했을땐 null 이므로 건너뛰게 되고, 맨 아래 코드에서 타임아웃을 걸면 timeoutId에 값이 있을 것이므로 타임아웃을 통한 함수 호출을 막습니다. 위의 functionToBeCalledLater 함수가 맨 아래의 타임아웃에 의해 debounceTime 시간만큼 흐른 뒤에 실제로 실행되면 함수 바디에서 타임아웃을 해제하고 timeoutId를 초기화하므로 실제 함수(functionToBeCalledLater) 실행 이후에 다시 첫 사이클로 돌아옵니다.
    if (timeoutId) {
      return
    }

    // debounceTime 뒤에 대상 함수를 실행할 함수를 실행합니다(인셉션 같네요).
    timeoutId = setTimeout(functionToBeCalledLater, debounceTime)
  }
}
