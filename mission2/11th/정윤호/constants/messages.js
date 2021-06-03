const dataFormErrorMessage = (keyword) => `todo item data is not ${keyword}`
const dataProperyErrorMessage = (keyword) => `todo item has not ${keyword}`

const ERROR_MESSAGE = Object.freeze({
  NULL: dataFormErrorMessage('exist (null)'),
  UNDEFINED: dataFormErrorMessage('exist (undefined)'),
  NOT_ARRAY: dataFormErrorMessage('Array'),
  HAS_NOT_OBJECT: dataProperyErrorMessage('Object'),
  HAS_NOT_TEXT: dataProperyErrorMessage('"text"'),
  HAS_NOT_ISCOMPLETED: dataProperyErrorMessage('"isCompleted"'),
})

export default ERROR_MESSAGE
