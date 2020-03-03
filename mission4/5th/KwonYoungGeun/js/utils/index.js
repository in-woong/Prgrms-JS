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

// 같은 리스트에 드랍했는지 판단하는 함수
export const isDropToSameListContainer = ($source, $target) => {
  return $source.id === $target.id
}

// 아이템 위에 드랍했는지 판단하는 함수
export const isDropToItem = ($source, $target) => {
  return $source.className === $target.className
}
