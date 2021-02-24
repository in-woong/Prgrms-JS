export default function UserList(params) {
  const $target = params.$target
  const onClick = params.onClick
  const onRemove = params.onRemove
  let data = params.data || []

  $target.addEventListener('click', function (e) {
    e.preventDefault();
    const id = e.target.closest('li').dataset.id
    onClick(id)
  })

  this.setState = function (nextData) {
    data = nextData
    this.render()
  }
  this.loading = (username) =>{
    $target.innerHTML = `${username}목록 로딩중...`
  }
  this.render = function () {
    const htmlString = data.map(function (name, i) {
      return `<li data-id="${
        name
      }"><a href="#">${name}</a></li>`
    })

    $target.innerHTML = `<ul>${htmlString.join('')}</ul>`
  }

  this.render()
}