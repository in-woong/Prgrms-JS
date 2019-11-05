import SearchInput from './SearchInput.js'
import SearchResult from './SearchResult.js'
import { checkValidData, debounce } from './utils.js'

function App(target) {
  try {
    this.data = []
  
    const getJalBot = async (keyword) => {
      try {
        const res = await fetch(`https://jjalbot.com/api/jjals?text=${keyword}`)
        return await res.json()
      } catch (error) {
        throw new Error(error)
      }
    }
  
    const onKeyUp = (keyword) => debounce(async () => {
      const data = await getJalBot(keyword)
      this.setState(data)
    }, 200)
  
    this.searchInput = new SearchInput(onKeyUp, target)
  
    this.searchResult = new SearchResult({
      data: this.data, target
    })
  
    this.setState = (nextData) => {
      checkValidData(nextData)
      this.data = nextData
      this.searchResult.setState(this.data)
    }
  } catch (error) {
    throw new Error(error)
  }
}

export default App