// class문법으로 작성
export default class TodoList2 {
  /**
   * @param {Array} data 
   * @param {String} targetId 
   */
  constructor(data, targetId) {
    this.setState(data, targetId)
  }

  validData(todoData) {
    try {
      if(!Array.isArray(todoData)) throw new Error("올바르지 않은 데이터 타입")

      todoData.forEach(todo => {
        if(
          !("text" in todo &&
          "isCompleted" in todo && 
          typeof todo.text === "string" &&
          typeof todo.isCompleted === "boolean")
        ) {
          throw new Error("올바르지 않은 데이터 형식")
        }
      })
    } catch(e) {
      console.error(e)
    }
  }

  setState(nextData, targetId) {
    this.validData(nextData)
    this.data = nextData
    if(targetId) this.targetId = targetId
    this.render()
  }

  render() {
    const htmlString = `<ul>${this.data.map(todo => 
      (todo.isCompleted) ? `<li>${todo.text}</li>` : `<li><s>${todo.text}</s></li>`
    ).join('')}</ul>`

    document.getElementById(this.targetId).innerHTML = htmlString
  }
}
