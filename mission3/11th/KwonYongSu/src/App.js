import SearchInput from "./components/SearchInput.js";
import SearchResult from "./components/SearchResult.js";
import SearchHistory from "./components/SearchHistory.js";
import getData from "./api/api.js";

function App({$app,initialState}) {
  
  this.$target = $app;
  this.state = [];
  this.tags = [];
  
  const searchHistory = new SearchHistory({
    $app:this.$target,
    initialState:this.tags,
    onClick: async (text)=>{
      await getData(text).then((response)=>{
        this.setState(response);
      }).catch(error => {
        console.log(error);
      })
    }
  });

  const searchInput = new SearchInput({
    $app:this.$target,
    addOnType: async(text,$target)=>{
      await getData(text)
      .then((response)=>{
        if(!this.tags.includes(text)){
          this.tags = [...this.tags,text];
        };
        $target.value = '';
        $target.focus();
        this.setState(response);
      }).catch(error => {
        throw new Error(error);
      })
    }
  });

  const searchResult = new SearchResult({
    $app:this.$target,
    initialState:this.state});


  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  }

  this.render = () =>{
    searchResult.setState(this.state);
    searchHistory.setState(this.tags);
  }
};

export default App;
