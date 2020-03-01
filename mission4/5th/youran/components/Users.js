function Users(userList, $target, { onChangeUser }) {
  this.userList = userList
  this.$target = $target
  this.onChangeUser = onChangeUser

  this.$target.addEventListener('click', event => this.handleEvent(event))

  this.handleEvent = event => {
    // 보일러플레이트 코드
    const username = event.target.closest('li').dataset.username
    onChangeUser(username)
  }

  this.setState = nextData => {
    console.log('why!')
    this.userList = nextData
    this.render()
  }

  this.render = () => {
    $target.innerHTML = this.generateHTMLString()
  }

  this.validate = data => {
    if (!Array.isArray(data)) {
      throw new Error('데이터 형식이 올바르지 않습니다.')
    }
  }

  this.generateHTMLString = () => {
    this.validate(this.userList)
    if (this.userList.length < 1) {
      return '<p>조회 가능한 사용자가 없습니다.</p>'
    }
    const htmlString = this.userList
      .map(username => `<li data-username="${username}">${username}</li>`)
      .join('')

    return `<ul>${htmlString}</ul>`
  }

  this.render()
}

export default Users
