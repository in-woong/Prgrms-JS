export default function Users(renderEle, data, clickUser) {
  this.data = data.users
  this.renderEle = renderEle
  this.usersEle = document.createElement('ul')
  this.renderEle.append(this.usersEle)
  this.clickUser = clickUser

  this.render = () => {
    this.usersEle.innerHTML = this.data
      .map((element) => {
        return `<li>${element}</li>`
      })
      .join('')
  }
  this.setState = (nextData) => {
    this.data = nextData.users
    this.render()
  }
  this.bindEvent = () => {
    this.usersEle.addEventListener('click', ({ target }) => {
      if (target.nodeName == 'LI') {
        this.clickUser(target.innerText)
      }
    })
  }
  this.render()
  this.bindEvent()
}
