export default function Users(params) {
  const $target = params.$target
  const data = params.data
  const onClick = params.onClick

  $target.addEventListener('click', e => {
    if (e.target.nodeName === 'LI') {
      onClick(e.target.textContent)
    }
  })

  this.setState = nextData => {
    data = nextData
    this.render()
  }

  this.render = () => {
    $target.innerHTML = `<ul>${data
      .map(user => `<li>${user}</li>`)
      .join('')}</ul>`
  }

  this.render()
}
