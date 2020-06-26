import { createSearchResultInnerHTML } from '../utils/filter.js'

export default function SearchResult($app, jjalImages){
    this.$searchResult = $app.querySelector('#search-result')
    this.jjalImages = jjalImages

    this.render = () => {
        const htmlString = createSearchResultInnerHTML(this.jjalImages)
        this.$searchResult.innerHTML = htmlString
    }

    this.setState = nextData => {
        this.jjalImages = nextData
        this.render()
    }  
}