import { ERROR_MSG, ENUM_TODO } from '../constants/index.js'

const $ = query => document.querySelector(query)

const isValidation = function(todoData) {
  const { EMPTY_DATA, INVALID_DATA, INCORRECT_DATA } = ERROR_MSG
  const invalidArray = arr =>
    !Array.isArray(arr) || !arr.length || arr.includes(undefined)

  if (!todoData) {
    throw Error(EMPTY_DATA)
  }
  if (invalidArray(todoData)) {
    throw Error(INVALID_DATA)
  }

  todoData.forEach(ele => {
    const elementProps = Object.keys(ele)
    const incorrectKey = ([textProp, isCompletedProp]) => {
      const { TEXT, IS_COMPLETED } = ENUM_TODO

      return textProp !== TEXT || isCompletedProp !== IS_COMPLETED
    }
    const incorrectVal = ({ text, isCompleted }) => {
      return !text || typeof isCompleted !== 'boolean'
    }

    if (incorrectKey(elementProps) || incorrectVal(ele)) {
      throw Error(INCORRECT_DATA)
    }
  })

  return todoData
}

const conditionalTemplate = function({ element }) {
  return function({ text = '', predicate = true }) {
    return predicate ? `<${element}>${text}</${element}>` : text
  }
}

const getParentElement = function({ target, query }) {
  return target.closest(query)
}

const getTodoIdByElement = function({ target }) {
  return Number(target.dataset.todoId)
}

const inputFocus = function({ query }) {
  $(query).focus()
}

const getActionNameByClassName = function({ className }) {
  return className.split('__')[0].toUpperCase()
}

export {
  $,
  inputFocus,
  isValidation,
  conditionalTemplate,
  getParentElement,
  getTodoIdByElement,
  getActionNameByClassName,
}
