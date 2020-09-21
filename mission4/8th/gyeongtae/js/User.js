export default function User(renderEle, data) {
  this.data = data.userName
  this.renderEle = renderEle
  this.userEle = document.createElement('div')
  this.renderEle.append(this.userEle)

  this.render = () => {
    this.userEle.innerHTML = `${this.data}님의 TodoList`
  }
  this.setState = (nextData) => {
    this.data = nextData.userName
    this.render()
  }

  this.render()
}
