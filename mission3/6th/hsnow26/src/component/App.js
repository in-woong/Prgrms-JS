import SearchResult from './SearchResult.js'
import SearchInput from './SearchInput.js'

export default function App(){
    this.components = []
    const $app = document.querySelector('#app')
    
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

    this.createSubComponent = () => {
        this.components = [
            new SearchResult($app, this.jjalImage),
            new SearchInput($app, onSearchedJjalImage)
        ]
    }

    this.createSubComponent()
}