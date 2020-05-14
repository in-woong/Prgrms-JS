function TodoList($target, data) {
  this.$target = $target
  this.data = data

  this.render = () => {
    this.$target.innerHTML =
    `<ul>
      ${this.data.map(({ text, isCompleted }, index) =>
        `<li data-index="${index}">
          ${isCompleted ? `<s>${text}</s>` : text}
          <button class="delete-btn">X</button>
        </li>`
      ).join('')}
    </ul>`
  }

  this.setState = function (nextData) {
    this.data = nextData
    this.render()
  }

  this.render()
}
