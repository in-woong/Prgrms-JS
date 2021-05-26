let timer = null

export const debounce = (callback, debounceSeconds) => {
  // review7 - debounce는 디바운싱된 함수를 반환해야함
  if(timer !== null){
    clearTimeout(timer)
  } 

  timer = setTimeout(callback, debounceSeconds)
  return timer
}
