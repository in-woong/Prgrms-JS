export const checkFunctionCalledByNew = ($target) => {
  if (!$target) throw new Error('must be called with new')
}

export const validateDOMElement = ($target) => {
  if (!($target instanceof HTMLElement)) {
    throw new Error('target does not DOM element')
  }
}

const validateSearchResult = (searchResult) => {
  const { _id, title, imageUrl } = searchResult

  return typeof _id !== 'string' || typeof title !== 'string' || typeof imageUrl !== 'string'
}

export const validateSearchResults = (searchResults) => {
  if (!Array.isArray(searchResults) || (searchResults.length > 0 ? searchResults.some(validateSearchResult) : false)) {
    throw new Error('searchResult type error')
  }
}

export const isFunction = (fn) => {
  return Object.prototype.toString.call(fn) === '[object Function]'
}

export const validateHistories = (histories) => {
  if (!(histories instanceof Object)) throw new Error('histories type error')
}

export const validateInitialState = ({ searchResults, histories }) => {
  validateSearchResults(searchResults)
  validateHistories(histories)
}
