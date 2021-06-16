// 할 일이 뒤섞여있음
// 이벤트를 바인딩한 후의 책임
// 데이터를 불러오는 책임
// 불러온 데이터를 어떻게 처리할지에 대한 책임
// 데이터를 기준으로 화면을 그리는 책임

;(function() {
  const $searchKeyword = document.querySelector('#search-keyword')
  const $searchResult = document.querySelector('#search-result')

  // 데이터를 불러오는 책임
  const handleKeyUp = (e) => {
    fetch(`https://jjalbot.com/api/jjals?text=${e.target.value}`)
      .then(x => x.json())
      .then(data => {
        console.log(JSON.stringify(data, null, 2))
        renderSearchResult(data)
      })
  }

  // 화면을 그리는 책임
  const renderSearchResult = (data) => {
    const htmlString = `${data
      .map(d => `<img src="${d.imageUrl}">`)
      .join('')}`
    $searchResult.innerHTML = htmlString
  }

  // 이벤트 바인딩 하는 분
  $searchKeyword.addEventListener('keyup', handleKeyUp)
})()
