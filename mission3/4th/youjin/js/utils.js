export const searchData = async (url, text) => {
  try {
    const dataResponse = await fetch(`${url}jjals?text=${text}`)
    return await dataResponse.json()
  } catch(error) {
    throw new Error(error)
  }
}

export const debounce = (callback, time) => {
  let timer = null

  if(timer)
      clearTimeout(timer)
      
  timer = setTimeout(() => {
    callback()
  }, time)
}