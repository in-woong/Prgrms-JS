import { fetchJjalImages } from '../store/index.js'
import { searchDebounce } from '../utils/timeControl.js'
import { isSearchInputEmpty } from '../utils/filter.js'
import SearchHistory from './SearchHistory.js'

export default function SearchResult(target, onSearchedJjalImage){
  this.keywordHistories = []
  const $searchInput = document.querySelector(target)
  const $searchHistory = document.querySelector('#search-history')
  let searchHistory = this.searchHistory

  $searchInput.addEventListener('keyup', function(e) {
    console.log('keyup')
    const {target} = e
    searchDebounce(getJjalImages, target.value)
  })

  $searchInput.addEventListener('click', function(e) {
    const { target } = e
    console.log('focus', target.id)
    if(target.id === target){
      $searchHistory.style.display = 'block'
      return
    }

    if(target.className === 'search-history-item'){
      $searchHistory.style.display = 'block'
      return
    }
    
    // $searchHistory.style.display = 'none'
  })

  $searchInput.addEventListener('focusout', function(e) {
    console.log('blur', searchHistory)
    // $ssearchHistory.click()  
    // $searchHistory.style.display = 'none'
  })

  const getJjalImages = async value => {
    const jjalImages = await fetchJjalImages(value)
    onSearchedJjalImage(jjalImages)
    
    if(isSearchInputEmpty(value)){ //공백 입력 시 저장 안함
      return
    }
    addedHistory(value.trim()) //앞 뒤 공백 제거 후, 히스토리 저장
  }

  const onSelectedHistory = (history) => {
    addedHistory(history)
  }

  const addedHistory = (history) => {
    const keywordHistories = this.keywordHistories.filter(element => element !== history).concat(history)
    setState(keywordHistories)
  }

  const setState = (nextData) =>{
    this.keywordHistories = nextData
    searchHistory.setState(this.keywordHistories)
  }

  this.render = _ => {
    searchHistory = new SearchHistory($searchHistory, onSelectedHistory)
    console.log('render', searchHistory)
  }

  this.render()
}