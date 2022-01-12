var data = [
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

function init() {
  const app = new App($target, data)
}

init()
