import * as DataRepository from './data.js'
import validData from './validation.js'

function handleComplete($target, e) {
  $target.items.map((item) => {
    if (item.text == e.path[1].childNodes[0].innerText) {
      item.isCompleted = item.isCompleted ? false : true
    }
  })
  $target.render()
}

function handleSubmit($target, e) {
  let inputNode = e.target.parentNode.childNodes[3]
  if (!inputNode.value) {
    return
  }
  $target.setState([{ text: `${inputNode.value}`, isCompleted: false }])
  inputNode.value = ''
  $target.render()
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
          ? `<li><s><span>${item.text}</span></s><button class="complete_btn">✓</button></li>`
          : `<li><span>${item.text}</span><button class="complete_btn">✓</button></li>`
      )
      .join('')
    document
      .querySelectorAll('.complete_Btn')
      .forEach((btn) =>
        btn.addEventListener('click', (e) => handleComplete(todolist, e))
      )
  }
  h2.appendChild(ul)

  this.setState = function (data) {
    validData(data)
    this.items = [...this.items, ...data]
    this.render()
  }

  this.render()
}

const todolist = new TodoList(DataRepository.data, 'todo-list')
const donelist = new TodoList(DataRepository.done, 'done-list')
const buylist = new TodoList(DataRepository.buy, 'buy-list')
todolist.setState([{ text: 'nothig', isCompleted: true }])

const todoBtn = document.querySelector('.todo_btn')

todoBtn.addEventListener('click', (e) => handleSubmit(todolist, e))
