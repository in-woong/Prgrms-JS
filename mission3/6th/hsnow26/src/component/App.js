import SearchResult from './SearchResult.js'
import SearchInput from './SearchInput.js'

export default function App(){
    this.components = []

    // async function onSearchedJjalImage (data){
    //     const searchedJjalImages = await data
    //     this.setState(searchedJjalImages)
    // }
    const onSearchedJjalImage = (data) => {
        const searchedJjalImages = data
        this.setState(searchedJjalImages)
    }

    this.setState = (nextData) => {
        this.jjalImages = nextData
        this.$searchResult.setState(this.jjalImages)
    }

    this.render = () => {
        // this.components = [new SearchResult('#search-result'), new SearchInput(this.jjalImage, '#search-input')]
        this.$searchResult = new SearchResult(this.jjalImage, '#search-result')
        this.$searchInput = new SearchInput('#search-keyword', onSearchedJjalImage)
    }

    this.render()
}