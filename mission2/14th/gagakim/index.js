const data = [
  {
      text: 'JS 공부하기',
      isCompleted: true,
  },
  {
      text: 'JS 복습하기',
      isCompleted: false,
  },
]

const $element = document.querySelector('#app')

const todoList = new App($element, data)
