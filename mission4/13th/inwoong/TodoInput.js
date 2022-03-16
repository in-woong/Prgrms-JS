export default function TodoInput({ $target, onSubmit, onDeleteAll }) {
  this.$target = $target
  this.state = []
  this.keyword = ''
  const $input = document.createElement('input')
  $input.addEventListener('keydown', (e) => {
    if (e.keyCode == 13) {
      this.keyword = $input.value
      onSubmit(this.keyword)
      $input.value = ''
    }
  })
  const $button = document.createElement('button')
  $button.innerText = 'Submit'
  $button.addEventListener('click', () => {
    this.keyword = $input.value
    onSubmit(this.keyword)
    $input.value = ''
  })
  const $deleteAll = document.createElement('button')
  $deleteAll.innerText = 'DeleteAll'
  $deleteAll.addEventListener('click', () => {
    onDeleteAll()
  })

  this.$target.append($input, $button, $deleteAll)

  this.render = () => {
    console.log('Input Render')
  }
  this.setState = (newData) => {
    console.log('Input SetState')
    this.state = newData
    this.render()
  }
  this.render()
}
