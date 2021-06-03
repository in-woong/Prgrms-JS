const todoItemDeleteTemaplate = () => {
  return `<input class="delete-item-button" type="button" value="삭제">`
}

const todoItemTemplate = ({ text, isCompleted }) => {
  return isCompleted ? `<li><s>${text}</s></li>${todoItemDeleteTemaplate()}` : `<li>${text}</li>${todoItemDeleteTemaplate()}`
}

export default todoItemTemplate
