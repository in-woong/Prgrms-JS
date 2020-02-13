class TodoInput {
  constructor($input) {
    console.log('실행')
    this._validate($input)
    this.$input = $input
    this._init()
  }

  _init() {
    this._bindEvents()
  }

  _validate($input) {
    validateElement($input)
  }

  _bindEvents() {
    this.$input.addEventListener('keyup', event => this._onKeyup(event))
  }

  _onKeyup(event) {
    const enterKey = 13

    if (!event.target.value.length) {
      alert('내용 없음')
      return
    }

    if (event.keyCode !== enterKey) {
      return
    }

    console.log('enter!!')
    // this.addTodo(this.$input.value) 커스텀 이벤트로 던져야하나??
  }
}
