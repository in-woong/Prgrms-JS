import LocalStorage from './LocalStorage.js'

export default function TodoInput() {
  const addTodoInput = document.querySelector('#add-todo__input')
  const myLocalStorage = new LocalStorage()

  // // 할일 목록을 로컬 스토리지에 추가하는 함수
  // this.addTodoDataInLocalStorage = function () {
  //   addTodoInput.value.length &&
  //     myLocalStorage.pushDataInLocalStorage(addTodoInput.value)
  //   addTodoInput.value = ''
  // }

  this.clearInput = function () {
    addTodoInput.value = ''
  }
}
