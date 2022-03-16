export default function Loding(params) {
  this.target = params.app
  this.lodingState = false
  this.loding = document.createElement('div')
  this.target.appendChild(this.loding)

  this.render = () => {
    this.loding.innerHTML =
      this.lodingState === false
        ? `<span>로딩중입니다.</span>`
        : `<span></span>`
  }

  this.setState = (nextData) => {
    this.lodingState = nextData
    this.render()
  }

  this.render()
}
