let timer = null

export const debounce = (callback, debounceSeconds) => {
  if(timer !== null){
    clearTimeout(timer)
  } 
  timer = setTimeout(callback, debounceSeconds)
}
