/**
 * TodoList1
 * @param {Array} data 
 * @param {String} targetId 
 */
export default function TodoList1(data, targetId) {

  ((data) => {
    try {
      if(!data) throw new Error("데이터가 존재하지 않음")

      if(!Array.isArray(data)) throw new Error("올바르지 않은 데이터 타입")

      data.forEach(todo => {
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
  })(data)
  
  try {
    if(!new.target) throw new Error("new 키워드가 없음")
  } catch(e) {
    console.error(e)
  }

  this.data = data

  this.render = () => {
    const html = this.data.map( todo => 
      (todo.isCompleted) ? `<div>${todo.text}</div>` : `<s><div>${todo.text}</div></s>`
    ).join('')

    document.getElementById(targetId).insertAdjacentHTML('beforeend', html)
  }
}
