import SearchInput from './component/SearchInput.js';
import SearchHistory from './component/SearchHistory.js';
import SearchApi from './repository/SearchApi.js';

function Main(){
  this.state = {
    stateInput:{},
    stateHistory:[]
  }//initialState
  const $app = document.querySelector("#app")

  this.searchInput = new SearchInput({
    $app,
    onKeyup:(e) => {
      if (this.timer) {
        clearTimeout(this.timer);
      }
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
         //document.querySelector('#search-result').innerHTML = "...Loading"
     }, 200);
    }
  })

  this.searchHistory = new SearchHistory({
    $app,
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

