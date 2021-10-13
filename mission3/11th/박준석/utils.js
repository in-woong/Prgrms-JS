export const $ = (ele, dom = document) => dom.querySelector(ele)

export const communicateWithAPI = async (url, tail) => {
  const receivedData = await fetch(`${url}${tail}`)
  if (receivedData.ok) {
    return await receivedData.json()
  } else {
    throw new Error('Received Data is unsuitable!')
  }
}

export const createDebounceFunction = (callback, wait) => {
  let timer = 0
  return (argument) => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      callback(argument)
      clearTimeout(timer)
    }, wait)
  }
}
