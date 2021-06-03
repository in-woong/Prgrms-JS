import { $ } from '../utils/dom.js'

export default class TodoInput {
  constructor() {
    this.$todoInput = $('.todo-input')
  }

  render() {
    this.$todoInput.innerHTML = `<input type="text" placeholder="할 일">` + `<input type="button" value="확인">` + `<input type="button" value="비우기">`
  }
}
