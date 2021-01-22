import validateData from './validateData.js'

function TodoList(data, id) {
  // new 호출된 여부 확인
  if (validateData(new.target, data)) {
    this.data = data
    this.parentDOM = document.getElementById(id)
  }

  function render() {
    this.parentDOM.innerHTML = this.data
      .map((item) => {
        return `<div>${item.text}</div>`
      })
      .join('')
  }

  render.call(this)
}

// TodoList.prototype.render = function () {
//   parentDOM.innerHTML = this.data
//     .map((item) => {
//       return `<div>${item.text}</div>`
//     })
//     .join('')
// }

export default TodoList
