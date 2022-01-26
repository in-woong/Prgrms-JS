export default function TodoInput({ $target, onSubmit }) {
  this.$target = $target
  this.$form = document.createElement('form')
  $target.appendChild(this.$form)
  this.$form.addEventListener('submit', onSubmit)
  this.render = () => {
    this.$form.innerHTML = `
      <input type="text" placeholder="입력하세요"/>
      <input type="submit" value="SUBMIT"/>
    `
  }
  this.setState = () => {
    this.render()
  }
  this.render()
}
