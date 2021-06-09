import ErrorMessage from "./ErrorMessage.js"

export const todoValidate = (data) => {
  if (!data) {
    throw new Error(ErrorMessage.DATA_IS_ERROR("Todo", "빈 값"))
  }

  if (!Array.isArray(data)) {
    throw new Error(ErrorMessage.DATA_IS_NOT_ERROR("Todo", "Array"))
  }

  data.forEach((todo) => {
    if (typeof todo !== "object") {
      throw new Error(ErrorMessage.DATA_HAS_NOT_ERROR("Todo", "object"))
    }

    if (!todo.hasOwnProperty("text")) {
      throw new Error(ErrorMessage.DATA_HAS_NOT_ERROR("Todo", "text"))
    }

    if (!todo.hasOwnProperty("isCompleted")) {
      throw new Error(ErrorMessage.DATA_HAS_NOT_ERROR("Todo", "isCompleted"))
    }
  })
}
