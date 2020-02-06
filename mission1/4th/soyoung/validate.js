const validator = {
  throwError(message) {
    throw new Error(message)
  },
  isNotEmptyArray(data) {
    return Array.isArray(data) && !!data.length
  },
  hasValidProperty(obj, property) {
    for (let prop in property) {
      if (!obj.hasOwnProperty(prop)) {
        return false
      }
      if (typeof obj[prop] !== property[prop]) {
        return false
      }
    }
    return true
  },
}
