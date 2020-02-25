//App.js
//전역 변수
let timer //질문1 : 이 timer를 어디에 선언하는게 좋은지

function App() {
  this.initialize = () => {
    this.searchKeyword = document.querySelector('#search-keyword')

    try {
      this.searchResult = new SearchResult([], '#search-result')
      this.searchHistory = new SearchHistory([], '#search-history', loadData)
    } catch (e) {
      console.log(e)
    }

    this.searchKeyword.addEventListener('keydown', e => {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        loadData(e.target.value)
        if (e.target.value !== '') {
          this.searchHistory.setState(e.target.value)
          e.target.value = ''
          e.target.focus()
        }
      }, 500)
    })
  } //End Initialize

  //functions
  //첫번째 방법
  const getData = value => {
    return new Promise(function(resolve, reject) {
      fetch(`https://jjalbot.com/api/jjals?text=${value}`).then(res => {
        if (res) {
          resolve(res)
        }
        reject(new Error('Request is failed'))
      })
    })
  }

  const renderData = async value => {
    const data = await getData(value)
    return data.json()
  }

  //////////////////
  //두번째 방법
  const fetchData = value => {
    return fetch(`https://jjalbot.com/api/jjals?text=${value}`).then(res => {
      return res.json()
    })
  }

  const loadData = async value => {
    try {
      const data = await fetchData(value)
      console.log(JSON.stringify(data, null, 2))
      //   return data
      this.searchResult.setState(data)
    } catch (e) {
      console.log(e)
    }
  }

  this.initialize()
}

new App()

/////////////////////////////////////////////
/*
    *이벤트리스너 콜백함수의 this 문제
    이유 : 이벤트리스너의 콜백함수를 화살표함수로 하지 않을경우 this === 현재 이벤트가 일어나고있는 input이 되기때문에 에러 발생
    해결 : 화살표함수로 바꿔주니 해결되었다.

    60번 라인 return 문을 하면 Promise 객체가 리턴 되므로 24번라인에서 then을 이용해 Promise객체에 접근해야된다.
    ** async function()은 항상 Promise를 리턴해야한다?!

    54번 라인처럼 fetch 앞에 return 을 붙여줘야한다!

    문제점 : 히스토리를 구현한 후, e.target.value = ''를 이용해 입력창을 비워줬는데, 전에 검색했던 단어의 마지막 글자가 항상 남아있는 문제가 발생하고, 이를 백스페이스로 지우니 히스토리에 빈값이 들어가는 문제가 발생하는데,
    어떻게 해결해야할지 모르겠습니다. 영어로 검색할 경우 마지막글자가 남지 않는다,,
    

    loadData를 searchHistory에 콜백함수로 넘겨주기 위해 63번 라인에서 return data를 해주고 21번 라인에서 .then()으로 data를 받은뒤 searchResult에 데이터를 넘기는 방식으로 처음에 구현했는데, 현재 방식과 차이가 있는건가요???
    
  개선할 점 : 검색을 통해 API가 빈배열, 즉 존재하지 않는 검색어를 입력했을 경우 히스토리에 추가하지 않을 방법이 있을까요???

  function들 선언 위치 문제:

  this.initialize() 구문을 함수 선언 이전에 작성했을 경우 searchHistory로 넘기는 loadData가 선언되어있지 않아 에러가 발생했습니다.
  this.initialize()를 마지막에 작성해 에러를 해결하긴 했는데, 함수 선언을 App컴포넌트 내에 어디에 하는 것이 좋을까요???

*/
