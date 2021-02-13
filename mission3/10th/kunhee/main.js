import SearchInput from './component/SearchInput.js';
import SearchHistory from './component/SearchHistory.js';
import SearchApi from './repository/SearchApi.js';
/*npx http-server -c -1*/

function Main(){
  this.state = {
    stateInput:{},
    stateHistory:[]
  }//initialState

  const $app = document.querySelector("#app")
  const $sec01 = $app.querySelector(".sec01")
  const $sec02 = $app.querySelector(".sec02")

   //render Input
  this.searchInput = new SearchInput({
    $sec01,
    initialState: this.state.stateInpute,
    onKeyup:(e) => {
      if (this.timer) {
        clearTimeout(this.timer);
      }

      //peding 상태
      const pendingState = 
      Object.assign(
        this.state,
        Object.assign({},
        {
          stateInput:{
            key:null,
            result:"Loading..."
          }
        }),
      )
      this.setState(pendingState)

      //비동기 시작
      this.timer = setTimeout(async () => {
        const keyword = e.target.value;
        await SearchApi(keyword)
         .then(data => {
           console.log(JSON.stringify(data, null, 2))
           const htmlString = `${data
             .map(d => `<img src="${d.imageUrl}">`)
             .join('')}`

            const newSearchObject = {
              key:keyword,
              result:htmlString
            }

            const nextState = 
            Object.assign(
              this.state,
              Object.assign({},
              {
                stateInput:newSearchObject
              }),
              Object.assign({},
              {
                stateHistory:[...this.state.stateHistory,newSearchObject]
              })
            )
            this.setState(nextState)
         })
     }, 200);
    }
  })

    //render History
  this.searchHistory = new SearchHistory({
      $sec02,
      initialState: this.state.stateHistory,
      onClick: (index) => {
        const nextState = 
        Object.assign(
          this.state,
          Object.assign({},
          {
            stateInput:this.state.stateHistory[index]
          })
        )
        this.setState(nextState)
      },
    });

  this.setState = (nextState) => {
    this.state = nextState
    this.searchInput.setState(this.state.stateInput)
    this.searchHistory.setState(this.state.stateHistory)
  }
}

new Main();

