import { getJJal } from './getJjal.js'

export default function SearchResult(data, renderEle) {
  this.data = data
  this.renderEle = document.createElement('ul')
  this.renderEle.id = 'search-results'
  renderEle.append(this.renderEle)

  this.render = () => {
    const htmlString = this.data
      .map(
        (element) => `
      <li class='serch-result'>
      <figure>
      <img src="${element.imageUrl}" alt="${element.title}">
      <figcaption>
      ${element.title} 
      <br>
      #${element.tags.join('#')}
      </figcaption>
      </figure>
      </li>
      `
      )
      .join('')
    this.renderEle.innerHTML = htmlString
  }
  this.setState = (nextData) => {
    this.data = nextData
    this.render()
  }
  // 짤봇 api를 통해 가져온 짤 데이터를 컴포넌트에 설정함
  this.setSearchResult = async function (value) {
    // 만약 짤봇 api 데이터를 정상적으로 가져와 컴포넌트에 상태를 설정한다면 true를 호출
    // 에러가 발생한다면 false를 호출하여
    // 이 return된 값에 따라 검색기록을 추가할지 말지를 결정
    try {
      const searchResult = await getJJal(value)
      if (searchResult.length === 0) {
        throw new Error('짤이 존재하지 않습니다.')
      }
      this.setState(searchResult)
      return true
    } catch (error) {
      console.log(`Error : ${error}`)
      return false
    }
  }
  this.render()
}
