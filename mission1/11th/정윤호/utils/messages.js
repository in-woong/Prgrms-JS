const dataFormErrorMessage = (keyword) => `todo item data is not ${keyword}`
const dataProperyErrorMessage = (keyword) => `todo item has not ${keyword}`

export const NULL= dataFormErrorMessage('exist (null)');
export const UNDEFINED = dataFormErrorMessage('exist (undefined)');
export const NOT_ARRAY = dataFormErrorMessage('Array');
export const HAS_NOT_OBJECT = dataProperyErrorMessage('Object');
export const HAS_NOT_TEXT = dataProperyErrorMessage('"text"');
export const HAS_NOT_ISCOMPLETED = dataProperyErrorMessage('"isCompleted"');
