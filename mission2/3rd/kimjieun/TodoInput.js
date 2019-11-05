export default class TodoInput {
  constructor({ $selector }) {
    this.$selector = $selector
    this.init()
  }
  
  init() {
    document.querySelector("#todo-add-button").addEventListener("click", () => {
      if (!this.$selector.value) return alert('할일을 입력하세요')

      const addData = {
        text: this.$selector.value,
        isCompleted: false,
      }

      this.onAddTodo(addData)
    })
  }
}