import { createSearchHistoryInnerHTML } from '../utils/filter.js'

export default function SearchHistory($target, onSelectedHistory, keywordHistories){
  this.keywordHistories = keywordHistories

  $target.addEventListener('click', function(e) {
    const {target} = e
    onSelectedHistory(target.innerHTML)
  })

  this.setState = (nextData) => {
    this.keywordHistories = nextData
    this.render()
  }

  this.render = () => {
    const htmlString = createSearchHistoryInnerHTML([...this.keywordHistories].reverse()) //최신 순으로 정렬
    $target.innerHTML = htmlString
  }

  this.render()
}