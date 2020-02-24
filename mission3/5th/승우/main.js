//App.js

function App() {
  this.initialize = () => {
    this.searchKeyword = document.querySelector('#search-keyword')

    try {
      this.searchResult = new SearchResult([], '#search-result')
    } catch (e) {
      console.log(e)
    }

    this.searchKeyword.addEventListener('keyup', e => {
      loadData(e.target.value).then(d => {
        console.log(d)
        this.searchResult.setState(d)
      })
    })
  }

  this.initialize()

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
      return data
    } catch (e) {
      console.log(e)
    }
  }
}

new App()

/////////////////////////////////////////////
/*
    26번 라인 this.searchResult.setState()가 먹히질 않았다.
    이유 : 이벤트리스너의 콜백함수를 화살표함수로 하지 않을경우 this === 현재 이벤트가 일어나고있는 input이 되기때문에 에러 발생
    해결 : 화살표함수로 바꿔주니 해결되었다.

    60번 라인 return 문을 하면 Promise 객체가 리턴 되므로 24번라인에서 then을 이용해 Promise객체에 접근해야된다.
    ** async function()은 항상 Promise를 리턴해야한다?!

    59번 라인처럼 fetch 앞에 return 을 붙여줘야한다!

*/
