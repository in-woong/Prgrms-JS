import SearchResult from './SearchResult.js'
import SearchInput from './SearchInput.js'

export default function App(){
    this.components = []
    
    const onSearchedJjalImage = data => {
        const searchedJjalImages = data
        this.setState(searchedJjalImages)
    }

    this.setState = nextData => {
        this.jjalImages = nextData
        this.components.map(component => {
            if(component.setState){
                component.setState(this.jjalImages)
            }
        })
    }

    this.render = _ => {
        this.components = [
            new SearchResult(this.jjalImage, '#search-result'),
            new SearchInput('#search-keyword', onSearchedJjalImage)
        ]
    }

    this.render()
}