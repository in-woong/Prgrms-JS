import Component from './Component.js'
import { debounce } from '../lib/func.js'

export default class SearchInput extends Component {
  template(){
    return `<input id="search-keyword" value="${this.state.searchValue}"/>`
  }

  setEvent() {
    ;(async () => {
      document
        .querySelector('#search-keyword')
        .addEventListener('keyup', await debounce(async (e) => {
          this.props.setSearchValue(e.target.value);
          if (e.target.value) {
            await this.props.changeSearchItems(e.target.value, true)
          }

        }))
    })()
  }
}
