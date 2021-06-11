const todoItem = ({ id, text, isCompleted }) => {
  return isCompleted
    ? `
    <li data-id=${id}>
      <span><s>${text}</s></span>
      <button class='del-btn'>Del</button>
    </li>`
    : `
    <li data-id=${id}>
      <span>${text}</span>
      <button class='del-btn'>Del</button>
    </li>`
}

export default todoItem
