const todoItemTemplate = ({ text, isCompleted }) => {
  return isCompleted ? `<li><s>${text}</s></li>` : `<li>${text}</li>`
}

export default todoItemTemplate
