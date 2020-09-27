export default function User({ renderEle, data }) {
  this.userName = data
  this.renderEle = renderEle
  this.userEle = document.createElement('div')
  this.renderEle.append(this.userEle)

  this.render = () => {
    this.userEle.innerHTML = `${this.userName}님의 TodoList`
  }
  this.setState = (nextData) => {
    this.userName = nextData
    this.render()
  }

  this.render()
}
