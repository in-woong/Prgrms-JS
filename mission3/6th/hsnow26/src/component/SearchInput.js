import {fetchJjalImages} from '../store/index.js'

export default function SearchResult(target, onSearchedJjalImage){
  
  this.$target = document.querySelector(target)

  this.$target.addEventListener('keyup', function(e) {
    const {target} = e
    getJjalImages(target.value)
  })

  const getJjalImages = async value => {
    const jjalImages = await fetchJjalImages(value)
    onSearchedJjalImage(jjalImages)
  }  

}