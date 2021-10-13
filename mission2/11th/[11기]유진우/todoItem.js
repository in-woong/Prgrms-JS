const todoItem = ({ id, text, isCompleted }) => {
  return isCompleted
    ? `
    <li data-id=${id}>
      <span class='todo-text'><s>${text}</s></span>
      <button class='todo-delete-btn'>Del</button>
    </li>`
    : `
    <li data-id=${id}>
      <span class='todo-text'>${text}</span>
      <button class='todo-delete-btn'>Del</button>
    </li>`
}

export default todoItem
