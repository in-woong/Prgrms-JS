import SearchResult from './components/SearchResult.js'
import KeywordInput from './components/KeywordInput.js'
import SearchHistory from './components/SearchHistory.js'

function App(target) {
    this.target = document.querySelector(target)
    this.state = {result: [], history: []}

    this.inputKeyword =  async (keyword, isWrite) => {
        try{
            const rawdata = await fetch(`https://jjalbot.com/api/jjals?text=${keyword}`)
            const data = await rawdata.json()
            const nextState = isWrite ? {result: data, history : [...this.state.history, keyword] }
            : {result: data, history : this.state.history }
            this.setState(nextState)
        } catch (e) {
            console.log(e)
        }
        
    }

    //components
    this.SearchHistory = new SearchHistory(this.target, this.state, this.inputKeyword)
    this.KeywordInput = new KeywordInput(this.target, this.inputKeyword)
    this.SearchResult = new SearchResult(this.target, this.state)
    

    this.render = function () {
        SearchResult.render()
    }

    this.setState = function(nextState) {
        this.state = nextState
        this.SearchResult.setState(nextState)
        this.SearchHistory.setState(nextState)

    }

}

export default App