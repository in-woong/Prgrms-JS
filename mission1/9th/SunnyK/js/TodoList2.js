// class문법으로 작성
export default class TodoList2 {
  /**
   * @param {Array} data 
   * @param {String} targetId 
   */
  constructor(data, targetId) {
    this.data = data
    this.targetId = targetId

    this.validData()
    this.render()
  }

  validData() {
    try {
      if(!Array.isArray(this.data)) throw new Error("올바르지 않은 데이터 타입")

      this.data.forEach(todo => {
        if(
          todo.text === undefined ||
          todo.isCompleted === undefined || 
          typeof todo.isCompleted !== "boolean"
        ) {
          throw new Error("올바르지 않은 데이터 형식")
        }
      })
    } catch(e) {
      console.error(e)
    }
  }

  render() {
    const html = `<ul>${this.data.map(todo => 
      (todo.isCompleted) ? `<li>${todo.text}</li>` : `<li><s>${todo.text}</s></li>`
    ).join('')}</ul>`

    document.getElementById(this.targetId).insertAdjacentHTML('beforeend', html)
  }
}
