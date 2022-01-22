import validData from './validation.js'

export default function TodoList(items, $target) {
  //보너스#50 new사용 안하고 호출시
  if (!new.target) {
    throw new Error('Please use constructor function')
  }

  validData(items)
  this.items = items

  const h2 = document.querySelector(`#${$target}`)
  const ul = document.createElement('ul')
  this.render = function () {
    this.items.forEach((item) => {
      this.addlist(item)
    })
  }
  h2.appendChild(ul)

  this.addlist = function (item) {
    const li = document.createElement('li')
    li.setAttribute('class', 'red')
    const span = document.createElement('span')
    span.innerText = item.text
    const btn = document.createElement('button')
    btn.innerText = '✓'
    btn.setAttribute('class', 'complete_btn')
    btn.addEventListener('click', (e) => this.handleComplete(item, e))
    li.append(span, btn)
    ul.prepend(li)
    if (item.isCompleted) {
      li.classList.add('red')
    } else {
      li.classList.remove('red')
    }
  }

  this.handleComplete = function (item, e) {
    console.log(item)
    if (item.isCompleted) {
      e.path[1].classList.add('red')
      item.isCompleted = false
    } else {
      e.path[1].classList.remove('red')
      item.isCompleted = true
    }
    //첫클릭에는 수정이 안됨
  }

  this.setState = function (newData) {
    validData(newData)
    this.items = [...this.items, ...newData]
    this.addlist(newData[0])
  }

  this.render()
}
