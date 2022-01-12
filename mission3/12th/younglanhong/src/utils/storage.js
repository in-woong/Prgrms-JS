import { errorMsg } from '../assets/errorMsg.js'

export const storage = {
  setStorageData: (key, data) => {
    try { 
      localStorage.setItem(key, data)
    } catch {
      alert(errorMsg.quotaExceeded)
    }
  },

  getStorageData: (key) => {
    const defaultData = []
    try {
      const storageData = localStorage.getItem(key)
      
      return storageData ? JSON.parse(storageData) : defaultData
    } catch {
      return defaultData
    }
  }
}
