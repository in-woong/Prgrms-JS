import SearchResult from './SearchResult.js'

export default function App($app) {
  // api를 호출하는 부분

  // 이벤트를 감지하는 부분

  // 화면을 그리는 부분
  document.querySelector('#search-keyword').addEventListener('keyup', function (e) {
    fetch(`https://jjalbot.com/api/jjals?text=${e.target.value}`)
      .then((x) => x.json())
      .then((data) => {
        searchResult.setState(data)
      })
  })

  // 컴포넌트 만들기
  const searchResult = new SearchResult({
    $app,
    initialState: [],
  })
}
