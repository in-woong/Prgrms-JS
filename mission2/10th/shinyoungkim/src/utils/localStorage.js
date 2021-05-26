// getItem 데이터를 불러오는 것 
export const getItem = ( key, initialState ) => {
  try {
    const storedValue = window.localStorage.getItem(key)
    return storedValue ? JSON.parse(storedValue) : initialState
  } catch(e) {
    console.log(e.message)
  }
}

// setItem 특정 데이터를 저장하는 값
export const setItem = ( key, value ) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value))
  } catch(e) {
    console.log(e.message)
  }
}