export default function TodoTitle(username) {
  this.username = username

  const $todoTitle = document.querySelector('.todo-wrap .title')

  this.render = function () {
    $todoTitle.innerHTML = `${this.username}의 TODO LIST`
  }

  this.setState = function (nextData) {
    this.username = nextData
    this.render()
  }
}
