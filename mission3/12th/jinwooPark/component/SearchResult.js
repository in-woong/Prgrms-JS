import Component from './Component.js'

export default class SearchKeyword extends Component {
  template() {
    const htmlString = `${this.state.result
      .map(d => `<img src='${d.imageUrl}'>`)
      .join('')}`

    return `<div id='search-result'>
              ${htmlString}
          </div>`
  }

}
