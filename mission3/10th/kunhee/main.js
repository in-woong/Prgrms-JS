import SearchInput from './component/SearchInput.js';
import SearchHistory from './component/SearchHistory.js';
import SearchApi from './repository/SearchApi.js';
import debounce from './debounce.js'
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
    onSearch: async (keyword) =>{
      await SearchApi(keyword).then(data => {
        const newSearchObject = {
          key:keyword,
          result:data
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
    }  
  })

    //render History
  this.searchHistory = new SearchHistory({
      $sec02,
      initialState: this.state.stateHistory,
      onClickItem: (index) => {
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

