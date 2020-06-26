function TodoList($target, data) {

  this.data = data

  this.setState = (nextData) => {
    this.data = nextData
    this.render()
  }

  this.render = () => {
    $target.innerHTML =
    `<ul>
      ${this.data.map(({ text, isCompleted }, index) =>
        `<li data-index="${index}">
          ${isCompleted ? `<s>${text}</s>` : text}
          <button class="delete-btn">X</button>
        </li>`
      ).join('')}
    </ul>`
  }

  this.render()
}
