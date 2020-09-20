export default function Users(renderEle, data, clickUser) {
  this.data = data
  this.renderEle = renderEle
  this.usersEle = document.createElement('ul')
  this.renderEle.append(this.usersEle)
  this.clickUser = clickUser

  this.render = () => {
    console.log(this.data)
    this.usersEle.innerHTML = this.data
      .map((element) => {
        return `<li>${element}</li>`
      })
      .join('')
  }
  this.setState = (nextData) => {
    this.data = nextData
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
