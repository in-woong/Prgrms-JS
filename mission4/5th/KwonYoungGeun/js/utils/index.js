export const $ = target => {
  return document.querySelector(target)
}

export const insertItemToArray = (arr, index, newItem) => {
  return [...arr.slice(0, index), newItem, ...arr.slice(index)]
}

export const findIndex = (arr, id) => {
  return arr.findIndex(item => item._id === id)
}

export const swapArrayElements = (arr, indexA, indexB) => {
  ;[arr[indexA], arr[indexB]] = [arr[indexB], arr[indexA]]
  return arr
}
