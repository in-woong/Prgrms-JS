import { errorMsg } from './errorMsg.js'

// export const data = [
//   {
//     text: 'JS 공부하기',
//     isCompleted: true,
//   },
// ] 

export const getStorageData = () => {
  const defaultData = []
  try {
    const storageData = localStorage.getItem('data')

    return storageData ? JSON.parse(storageData) : defaultData
  } catch {
    return defaultData
  }
}

export const setStorageData = (state) => {
  try {
    localStorage.setItem('data', JSON.stringify(state))
  } catch {
    alert(errorMsg.quotaExceeded)
  }
}


