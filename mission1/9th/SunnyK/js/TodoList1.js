/**
 * TodoList1
 * @param {Array} data 
 * @param {String} targetId 
 */
export default function TodoList1(data, targetId) {

  try {
    if(!new.target) throw new Error("new 키워드가 없음")
  } catch(e) {
    console.error(e)
  }

  this.validData = (todoData) => {
    try {
      if(!Array.isArray(todoData)) throw new Error("올바르지 않은 데이터 타입")

      todoData.forEach(todo => {
        if(
          !("text" in todo &&
          "isCompleted" in todo && 
          typeof todo.isCompleted === "boolean")
        ) {
          throw new Error("올바르지 않은 데이터 형식")
        }
      })
    } catch(e) {
      console.error(e)
    }
  }

  this.validData(data)

  this.data = data
  this.targetId = targetId

  this.setState = (nextData) => {
    this.validData(nextData)
    this.data = nextData
    this.render()
  }

  this.render = () => {
    const html = this.data.map( todo => 
      (todo.isCompleted) ? `<div>${todo.text}</div>` : `<s><div>${todo.text}</div></s>`
    ).join('')

    document.getElementById(this.targetId).insertAdjacentHTML('beforeend', html)
  }

  this.render()
}
