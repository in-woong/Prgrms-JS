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

export async function jjalbotApi(value) {
  try {
    const data = await fetch(`https://jjalbot.com/api/jjals?text=${value}`)
    // if (data === null) {
    //   alert('존재 하지 않은 데이터 입니다.')
    //   return
    // }
    return data.json()
  } catch (e) {
    console.log(e)
  }
}
