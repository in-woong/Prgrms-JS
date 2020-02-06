class PurgeBtn {
  constructor(btnId, todoAPI) {
    this.todoAPI = todoAPI
    this.$deleteBtn = document.querySelector(btnId)
    this.$deleteBtn.addEventListener('click', this.onClick.bind(this), false)
  }

  onClick() {
    this.todoAPI.purgeAll()
  }
}

export default PurgeBtn
