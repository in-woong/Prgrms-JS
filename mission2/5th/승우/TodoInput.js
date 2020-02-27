function TodoInput(selector, handleInput) {
  if (!(this instanceof TodoInput)) {
    throw new Error('New 키워드 없이 실행했습니다')
  }

  checkSelector(selector)
  this.$target = document.querySelector(selector)

  this.initialize = function() {
    this.$input = document.createElement('input')
    this.$input.setAttribute('type', 'text')
    this.$input.setAttribute('placeholder', '할일을 입력하세요')

    //이벤트 리스너 추가
    this.$input.addEventListener('keydown', e => {
      if (e.keyCode === ENTER_KEY) {
        if (e.target.value === '') {
          alert('할일을 입력해주세요!!')
        } else {
          //App의 데이터에 값을 추가해준다!
          handleInput(e.target.value)
          e.target.value = ''
          e.target.focus()
        }
      }
    })
  }

  this.initialize()
  this.$target.appendChild(this.$input)
}
