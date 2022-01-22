import * as DataRepository from './data.js'
import validData from './validation.js'

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

const todolist = new TodoList(DataRepository.data, 'todo-list')
const donelist = new TodoList(DataRepository.done, 'done-list')
const buylist = new TodoList(DataRepository.buy, 'buy-list')
todolist.setState([{ text: 'nothig', isCompleted: true }])
