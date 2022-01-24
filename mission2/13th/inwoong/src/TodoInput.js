export default function TodoInput(data, $target, onSubmit, event) {
  this.data = data
  this.$target = $target
  const h2 = document.querySelector(`#${$target}`)
  const form = document.createElement('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const $input = form.querySelector('input')
    $input.value && onSubmit($input.value)
    form.reset()
  })

  h2.prepend(form)

  this.render = () => {
    form.innerHTML = `
    <input type="text"/>
    <input type="submit" value="submit"/>
    `
  }
  this.render()
}
