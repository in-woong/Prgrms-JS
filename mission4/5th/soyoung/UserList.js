function UserList(params) {
  const $target = params.$target
  const onClick = params.onClick
  this.username = params.username
  let data = params.data || []

  $target.addEventListener('click', e => {
    const clickedUserName = e.target.closest('li').innerText
    onClick(clickedUserName)
  })
  this.setState = function(nextData) {
    data = nextData
    this.render()
  }

  this.render = () => {
    const htmlString = data.map((user, index) => {
      const contentHTML = user === this.username ? `<b>${user}</b>` : `${user}`
      return `<li data-id="${index}">${contentHTML}</li>`
    })
    $target.innerHTML = `<ul>${htmlString.join('')}</ul>`
  }
  this.setUser = username => {
    this.username = username
    this.render()
  }

  this.render()
}
