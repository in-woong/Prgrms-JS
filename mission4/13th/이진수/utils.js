const ITEM_KEY = 'todos'

export const checkObjectKey = (data) =>
  data.every(
    (value) =>
      value?.hasOwnProperty('content') && value?.hasOwnProperty('isCompleted')
  )

export const getCompletedCount = (data) =>
  data.filter((value) => value?.isCompleted).length

export const checkDataValidation = (data) =>
  Array.isArray(data) && checkObjectKey(data)

export const getDataFromLocalStorage = () => {
  const todos = window.localStorage.getItem(ITEM_KEY)
  return todos ? JSON.parse(todos) : []
}

export const setDataToLocalStorage = (newData) => {
  try {
    window.localStorage.setItem(ITEM_KEY, JSON.stringify(newData))
  } catch (e) {
    throw new Error(e)
  }
}
