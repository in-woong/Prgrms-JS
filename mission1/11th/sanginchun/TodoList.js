const DATA_ITEM_PROPERTIES = [{ name: "text", type: "string"}, { name: "isCompleted", type: "boolean"}]

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
      // not object
      if(typeof item !== "object") throw new Error(`data has a non-object item '${item}'`)

      // properties
      DATA_ITEM_PROPERTIES.forEach(({ name, type }) => {
        if(!item.hasOwnProperty(name)) throw new Error(`Item ${JSON.stringify(item)} should have '${name}' property`)

        if(typeof item[name] !== type) throw new Error(`${JSON.stringify(item[name])} is not ${type}`)
      })
    })
  }
}

export default TodoList;
