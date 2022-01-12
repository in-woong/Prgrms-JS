import SearchInput from "./SearchInput.js";
import SearchResult from "./SearchResult.js";
import { getData } from "./api.js";

export default function App ({$target}) {
    this.$target = $target
    this.state = [] 

    this.setState = (nextState)=>{
        this.state = nextState
        this.render()
    }

    this.render = () =>{
        searchResult.setState(this.state)
    }

    const searchInput = new SearchInput({
        $target : "#search-keyword",
        searchData : async (text)=>{
            this.state = await getData(text)
            this.setState(this.state)
        }

    })
    const searchResult = new SearchResult({
        $target : '#search-result',
        initialState : this.state,
    })
    
}
