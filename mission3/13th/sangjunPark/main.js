import Search from './Search.js'

const main = function () {
  const searchKeyword = document.querySelector('#search-keyword')
  const searchHistory = document.querySelector('#search-history')

  let timer = null

  searchKeyword.addEventListener('keyup', function (event) {
    timer && clearTimeout(timer)
    timer = setTimeout(() => Search(event), 500)
  })

  searchHistory.addEventListener('click', function (event) {
    Search(event)
  })
}

main()
