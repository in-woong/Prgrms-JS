const $app = document.querySelector('#app')
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
const removeAll = new Event('removeAll')
const app = new App($app, data, removeAll)
