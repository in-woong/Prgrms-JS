(function main(){
  this.state = []
  this.historyStorage = []

  const $app = document.querySelector("#app")
  const $resultTarget = document.querySelector("#search-result")


  const searchData = async(userValue) =>{
    await fetch(`https://jjalbot.com/api/jjals?text=${userValue}`)
    .then(res =>res.json())
    .then(data => 
      {this.state = data
        this.searchResult.setState(this.state)})
    // res.json()을 {}로 감싸면 undefined가 뜨던데 왜 그런가요?
  }

  
  const saveHistory = (historyText) =>{
    if(!(this.historyStorage.includes(historyText))){
      this.historyStorage = [...this.historyStorage,historyText]
    }
    this.searchHistory.setState(this.historyStorage)
  }




  this.searchInput = new SearchInput(searchData,saveHistory)
  this.searchResult = new SearchResult({
    $target : $resultTarget,
    initalState : this.state,
  })
  this.searchHistory = new SearchHistory({
    $target : $app,
    searchData
  })
})()
