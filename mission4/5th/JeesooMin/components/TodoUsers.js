function TodoUsers({ $element, data, onClickUser }) {
  if (!(this instanceof TodoUsers)) {
    throw new Error('[TodoUsers] new 키워드로 실행되지 않았습니다.')
  }

  if (!onClickUser || typeof onClickUser !== 'function') {
    throw new Error('[TodoUsers] 이벤트 핸들러가 정의되지 않았습니다.')
  }

  this.$element = $element

  this.init = function() {
    this.$element.addEventListener('click', e => {
      onClickUser(e.target.innerText)
    })
  }

  this.render = function() {
    this.$element.innerHTML = data
      .map(user => `<li class="user-list-item">${user}</li>`)
      .join('')
  }

  this.init()
  this.render()
}

export default TodoUsers
