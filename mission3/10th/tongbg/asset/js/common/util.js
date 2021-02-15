const getBackUpTodo = (key, defaultValue) => {
  try {
    const storedValue = window.localStorage.getItem(key)

    return storedValue ? new Set(JSON.parse(storedValue)) : defaultValue
  } catch {
    return defaultValue
  }
}

const setBackUpTodo = (key, value) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value))
  } catch (e) {
    console.log(e.message)
  }
}

const getDOM = (query) => {
  return document.querySelector(query)
}

const focusDOM = (query) => {
  document.querySelector(query).focus()
}

export { getBackUpTodo, setBackUpTodo, getDOM, focusDOM }
