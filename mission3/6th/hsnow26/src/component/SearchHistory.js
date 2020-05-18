import { createSearchHistoryInnerHTML } from '../utils/filter.js'

export default function SearchHistory($target, onSelectedHistory){
  this.keywordHistories = []

  $target.addEventListener('click', function(e) {
    const {target} = e
    

    onSelectedHistory(target.value)
    console.log('SearchHistory click', target.value)
  })

  this.setState = (nextData) => {
    this.keywordHistories = nextData
    this.render()
  }

  this.render = _ => {
    const keywordHistories = [...this.keywordHistories]
    const htmlString = createSearchHistoryInnerHTML(keywordHistories.reverse()) //최신 순으로 정렬
    $target.innerHTML = htmlString
  }

  this.render()
}