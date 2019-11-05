const setStateAtStorage = (state = []) => {
  try {
    localStorage.setItem('state', JSON.stringify(state))
  } catch (e) {
    throw new Error('setState error')
  }
}

const getStateFromStorage = () => {
  try {
    const state = localStorage.getItem('state')
    return state ? JSON.parse(state) : []
  } catch (e) {
    throw new Error('getState error')
  }
}


