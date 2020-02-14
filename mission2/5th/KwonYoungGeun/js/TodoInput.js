class TodoInput extends Component {
  constructor($element) {
    super($element)
    this.init()
  }

  init() {
    this.bindEvents()
  }

  bindEvents() {
    this.$element.addEventListener('keyup', event => this.onKeyup(event))
  }

  onKeyup(event) {
    const enterKey = 13

    if (!event.target.value.length) {
      alert('내용 없음')
      return
    }

    if (event.keyCode !== enterKey) {
      return
    }

    console.log('enter!!')
  }
}
