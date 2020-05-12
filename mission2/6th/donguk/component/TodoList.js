function convertElementToHTMLString(element) {
  const { text, isCompleted } = element
  return isCompleted ? `<s>${text}</s>` : text
}

function TodoList(props) {
  if (!(this instanceof TodoList)) throw new Error('new 연산자를 사용해주세요.')
  const { todos, selector } = props
  checkSelector(selector)
  checkData(todos)

  this.$target = document.querySelector(selector)
  this.data = todos
  this.render = () => {
    this.$target.innerHTML = this.data.map((element) => `<li>${convertElementToHTMLString(element)}</li>`)
      .join('')
  }
  this.setState = (newData) => {
    this.data = newData
    this.render()
  }
  this.render()
}
