function isNill(data) {
  return data == null
}

function validData(data) {
  //보너스#50 null 혹은 undefined가 넘어오면? -> isNill함수를 사용
  // !!는 undefined "" 0 null 값을 false로 반환
  if (!!!data) {
    throw new Error('There is no message')
  }
  //보너스#50 array가 아닌 다른 종류의 data가 넘어오면?
  if (!Array.isArray(data)) {
    throw new Error('Your data is not array')
  }
  data.forEach((item) => {
    validText(item)
    validIsComplete(item)
  })
}

function validText(item) {
  //보너스#50 데이터 내용이 이상하면?
  if (isNill(item.text)) {
    throw new Error('there is no text')
  }
  if (typeof item.text !== 'string') {
    throw new Error('input your text in string')
  }
}

function validIsComplete(item) {
  //값이 없을때
  if (isNill(item.isCompleted)) {
    console.log(!!!item.isCompleted)
    throw new Error('there is no iscompleted')
  }
  //값이 boolean이 아닐때
  if (typeof item.isCompleted !== 'boolean') {
    throw new Error('input your isCompleted in boolean')
  }
}

function TodoList(items, target) {
  //보너스#50 new사용 안하고 호출시
  if (!new.target) {
    throw new Error('Please use constructor function')
  }

  validData(items)
  this.items = items

  const h2 = document.querySelector(`#${target}`)
  const ul = document.createElement('ul')
  this.render = function () {
    ul.innerHTML = this.items
      .map((item) =>
        item.isCompleted
          ? `<li><s>${item.text}</s></li>`
          : `<li>${item.text}</li>`
      )
      .join('')
  }
  h2.appendChild(ul)

  this.setState = function (data) {
    validData(data)
    this.items = [...this.items, ...data]
    this.render()
  }

  this.render()
}

const todolist = new TodoList(data, 'todo-list')
const donelist = new TodoList(done, 'done-list')
const buylist = new TodoList(buy, 'buy-list')
todolist.setState([{ text: 'nothig', isCompleted: true }])
