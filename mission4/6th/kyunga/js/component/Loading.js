export default function Loading() {
  this.flag = false

  const $loading = document.querySelector('#loading')

  this.render = function () {
    $loading.className = this.flag ? 'loading' : 'loaded'
    $loading.innerHTML = this.flag ? '<strong>loading...</strong>' : ''
  }

  this.setState = function (flag) {
    this.flag = flag
    this.render()
  }
}
