export default function TodoInput(list, $target) {
  this.list = list
  this.$target = $target

  this.render = () => {
    const input = document.createElement('input')
    input.setAttribute('type', 'text')
    const button = document.createElement('button')
    button.innerText = 'Submit'
    button.addEventListener('click', this.handleSubmit)
    const h2 = document.querySelector(`#${$target}`)
    h2.prepend(input, button)
  }

  this.handleSubmit = (e) => {
    let inputNode = e.path[1].childNodes[0]
    if (!inputNode.value) {
      return
    }
    this.list.setState([{ text: `${inputNode.value}`, isCompleted: false }])
    inputNode.value = ''
  }

  this.render()
}
