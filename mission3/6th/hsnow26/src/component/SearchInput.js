import { fetchJjalImages } from '../store/index.js'
import { searchDebounce } from '../utils/timeControl.js'
import { isSearchInputEmpty, isSearchKeyword } from '../utils/filter.js'
import { setDisplayShow, setDisplayHide } from '../utils/display.js'
import SearchHistory from './SearchHistory.js'

export default function SearchResult($app, onSearchedJjalImage){
  this.keywordHistories = []
  const $searchInput = $app.querySelector('#search-keyword')
  const $searchHistory = $app.querySelector('#search-history')

  $app.addEventListener('keyup', function(e) {
    const {target} = e
    searchDebounce(getJjalImages, target.value)
  })

  //검색창 이외의 부분 클릭 시, 검색기록 숨김
  $app.addEventListener('click', function(e) {
    const { target } = e
    if(isSearchKeyword(target.id)){
      setDisplayShow($searchHistory)
      return
    }
    setDisplayHide($searchHistory)
  })

  const onSelectedHistory = (history) => {
    $searchInput.value = history
    getJjalImages($searchInput.value)
    addHistory($searchInput.value)
  }

  const getJjalImages = async value => {
    const jjalImages = await fetchJjalImages(value)
    onSearchedJjalImage(jjalImages)
    
    if(isSearchInputEmpty(value)){ //공백 입력 시 저장 안함
      return
    }
    addHistory(value.trim()) //앞 뒤 공백 제거 후, 히스토리 저장
  }

  const addHistory = (history) => {
    const keywordHistories = this.keywordHistories.filter(element => element !== history).concat(history)
    setState(keywordHistories)
  }

  const setState = (nextData) =>{
    this.keywordHistories = nextData
    this.searchHistory.setState(this.keywordHistories)
  }

  this.createSubComponent = _ => {
    this.searchHistory = new SearchHistory($searchHistory, onSelectedHistory)
  }

  this.createSubComponent()
}