const data1 = [
  {
    text: 'JS 공부하기',
    isCompleted: true,
  },
  {
    text: 'JS 복습하기',
    isCompleted: true,
  },
]

const todoList = new TodoList(data1, '#todo-list')

// 이벤트
const parent = document.querySelector('#todo-list')
let enterTxt
let btnCont

document.querySelector('#enterbtn').addEventListener('click', addData)

function addData() {
  enterTxt = document.querySelector('#enterInput').value
  data1.push({ text: enterTxt, isCompleted: false })
  for (let i = 0; i < data1.length - 1; i++) {
    parent.removeChild(parent.childNodes[0])
  }
  btnCont = data1.length
  const todoList4 = new TodoList(data1, '#todo-list')
}

for (let i = 0; i < btnCont - 1; i++) {
  document.querySelectorAll('.complete')[i].addEventListener('click', endList)
}

function endList() {
  let changeNum = this.dataset.num
  enterTxt = parent.childNodes[changeNum].innerText
  console.log(enterTxt)
  data1.splice(changeNum, 1, { text: enterTxt, isCompleted: true })
  for (let i = 0; i < data1.length; i++) {
    parent.removeChild(parent.childNodes[0])
  }
  const todoList5 = new TodoList(data1, '#todo-list')
}
