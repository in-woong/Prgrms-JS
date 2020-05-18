import { createSearchResultInnerHTML } from '../utils/filter.js'

export default function SearchResult(jjalImages, target){
    this.$target = document.querySelector(target)
    this.jjalImages = jjalImages

    this.render = _ => {
        const htmlString = createSearchResultInnerHTML(this.jjalImages)
        this.$target.innerHTML = htmlString
    }

    this.setState = nextData => {
        this.jjalImages = nextData
        this.render()
    }  
}