const data = [
  {
    text: 'JS 공부하기',
    isCompleted: false,
  },
  {
    text: 'JS 복습하기',
    isCompleted: false,
  },
]
const $target = document.querySelector('#todo-list')
const $input = document.querySelector('#todo-input')

const app = new App(data, $target, $input)
