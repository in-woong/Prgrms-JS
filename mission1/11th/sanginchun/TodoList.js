class TodoList {
  constructor($target, data) {
    this.validate(data)

    this.$target = $target
    this.data = data
    this.render()
  }

  setState(nextData) {
    this.validate(nextData)

    this.data = nextData
    this.render()
  }

  render() {
    const html = `
      <ul>
        ${this.data.map(({ text, isCompleted }) => (
          `<li>
            ${isCompleted ? `<s>${text}</s>` : text}
          </li>`
        )).join("")}
      </ul>
    `
    this.$target.innerHTML = html
  }

  validate(data) {
    if(!Array.isArray(data)) throw new Error(`${JSON.stringify(data)} is not an Array`)

    data.forEach(item => {
      if(item === null || typeof item !== "object") throw new Error(`data includes item '${item}'`)

      // properties
      if(!item.hasOwnProperty("text") || !item.hasOwnProperty("isCompleted"))
        throw new Error(`${JSON.stringify(item)} should have property 'text' and 'isCompleted'`)
        
      if(typeof item.text !== "string") throw new Error(`'text' in ${JSON.stringify(item)} is not string`)
      if(typeof item.isCompleted !== "boolean") throw new Error(`'isCompleted' in ${JSON.stringify(item)} is not boolean`)
    })
  }
}

export default TodoList;
