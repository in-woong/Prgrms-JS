import SearchInput from './SearchInput.js'
import SearchHistory from './SearchHistory.js'
import SearchResult from './SearchResult.js'
import {getItem,setItem} from './Storage.js'

const STORAGE_KEY ={
    SEARCH : 'searchkey'
}

export default class main{
    constructor($target){
        this.state = getItem(STORAGE_KEY.SEARCH)
        ? getItem(STORAGE_KEY.SEARCH)
        : []

        this.searchInput = new SearchInput({
            $target,
            onInput: searchKeyword=>{
                this.setResult(searchKeyword)
                this.setInput(searchKeyword)
            }
        })
        this.searchHistory = new SearchHistory({
            $target,
            initialState : this.state,
            onHistorySearch: index=>{
                const reSearchValue = this.state[index]
                this.state.splice(index,1)
                this.state.push(reSearchValue)
                setItem(STORAGE_KEY.SEARCH,this.state)
                this.searchResult.setState(reSearchValue)
                this.searchHistory.setState(this.state)
            },
            onHistoryDel: data=>{
                this.state.splice(data,1)
                const nextState = this.state
                setItem(STORAGE_KEY.SEARCH,nextState)
                this.searchHistory.setState(this.state)
            }
        })
        this.searchResult = new SearchResult({
            $target,
        })
    }
    setInput = (value)=>{
        const nextState = [...this.state,value]
        setItem(STORAGE_KEY.SEARCH,nextState)
        this.state = nextState
        this.searchHistory.setState(this.state)
    }
    setHistory = ()=>{
        console.log(this.state)
        this.searchHistory.setState(this.state)
    }
    setResult = (searchKeyword) => {
        this.searchResult.setState(searchKeyword)
    }
}

