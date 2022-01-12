const URL = 'https://jjalbot.com/api/jjals?text='

function getData(keyword, $target) {
  fetch(`${URL}${keyword}`)
    .then(x => x.json())
    .then(data => {
      // console.log(JSON.stringify(data, null, 2))
      $target.innerHTML = data
        .map(d => `<img src="${d.imageUrl}">`)
        .join('')
    })
}

function init() {
  const $searchInput = document.querySelector('#search-keyword')
  const $searchResult = document.querySelector('#search-result')

  $searchInput.addEventListener('keyup', e => getData(e.target.value, $searchResult))
}

init()
