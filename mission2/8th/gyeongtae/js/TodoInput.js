export default function TodoInput() {
  this.render = () => {
    document.querySelector('#todo-list-input-form').innerHTML = `
    <input type="text" id="input-todo-list" size="20" />
    <button type="submit" id="add-todo-list-button">추가</button>
    `
  }
  this.render()
}
