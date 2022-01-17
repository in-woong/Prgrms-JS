function TodoList(data, id) {
  this.data = data;

  if (!new.target) { throw Error("생성자함수가 사용되지 않았습니다.") }

  if (!Array.isArray(data)) { throw Error("데이터가 배열이 아닙니다.") }

  // null == undefined 는 true 이기때문에 하나의 조건으로 두가지 상황을 처리할 수 있다.
  if (data == null) { throw Error("데이터 값이 확인되지 않습니다.") }



  data.forEach((el) => {
    if (typeof el.text !== "string") { throw Error("데이터 형식이 올바르지 않습니다.") }
    if (el.isCompleted == null) { throw Error("데이터의 isCompleted key 값을 확인하세요. boolean 값이어야합니다.") }
  })


  const list = document.querySelector(`#${id}`);

  this.render = () => {
    list.innerHTML = `
      <ul>
        ${this.data.map(({ text, isCompleted }, idx) => `<li id=${idx}>${isCompleted ? text : `<s>${text}</s>`}  <button>❌</button></li>`).join("")}
      </ul>
    `
  }

  this.setState = function (nextData) {
    if (nextData === null || nextData === undefined) { throw Error("setState는 파라미터가 필요합니다.") }
    if (!Array.isArray(data)) { throw Error("데이터가 배열이 아닙니다.") }
    if (data == null) { throw Error("데이터 값이 확인되지 않습니다.") }
    nextData.forEach((el) => {
      if (typeof el.text !== "string") { throw Error("데이터 형식이 올바르지 않습니다.") }
      if (el.isCompleted == null) { throw Error("데이터의 isCompleted key 값을 확인하세요. boolean 값이어야합니다.") }
    })

    this.data = nextData
    this.render()  
  }
}

