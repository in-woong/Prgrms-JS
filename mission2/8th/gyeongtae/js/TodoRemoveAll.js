export default function TodoRemoveAll() {
  this.render = () => {
    document.querySelector('#todo-remove-all').innerHTML += `
    <button id = "todo-remove-all-button">Todo전체 삭제</button>
    `
  }
  this.render()
}
