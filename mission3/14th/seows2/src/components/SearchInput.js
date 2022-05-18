import api from '../api/requester.js';
import Component from '../core/Component/Component.js';
import { action } from '../modules/actions.js';
import { debounce, delegate, on } from '../util/helper.js';

class SearchInput extends Component {
  setEvent() {
    delegate(
      this.$target,
      'keyup',
      'input',
      debounce((event) => this.handleKeyup(event), 1500)
    );
  }

  async handleKeyup(event) {
    const { value } = event.target;
    if (!value.trim()) return;
    const searchResults = await this.getSearchResult(value);

    return this.store.dispatch(action.SEARCH_ZZAL(searchResults, value));
  }

  getSearchResult = async (searchKeyword) => {
    const response = await api.getSearchResult(searchKeyword);
    if (response.isError) return console.error(response.data);

    return response.data;
  };

  template() {
    return `
        <input type="text" placeholder="검색어를 입력해주세요" autoFocus/>
    `;
  }
}

export default SearchInput;
