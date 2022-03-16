const ITEM_KEY = 'todos'

export const checkObjectKey = (data) =>
  data.every(
    (value) =>
      value?.hasOwnProperty('text') && value?.hasOwnProperty('isCompleted')
  )

export const getCompletedCount = (data) =>
  data.filter((value) => value?.isCompleted).length

export const setSelectedIdToCompleted = (state, id) => {
  if (state[id].isCompleted) return state
  const newData = [...state]
  newData[id].isCompleted = true
  return newData
}

export const setSelectedIdDelete = (state, id) => {
  const newData = state?.filter((_, index) => index?.toString() !== id) || []
  return newData
}

export const checkDataValidation = (data) =>
  Array.isArray(data) && checkObjectKey(data)

export const getDataFromLocalStorage = () => {
  const todos = window.localStorage.getItem(ITEM_KEY)
  return JSON.parse(todos)
}

export const setDataToLocalStorage = (newData) => {
  try {
    window.localStorage.setItem(ITEM_KEY, JSON.stringify(newData))
  } catch (e) {
    throw new Error(e)
  }
}
