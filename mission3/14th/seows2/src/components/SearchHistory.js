import api from '../api/requester.js';
import Component from '../core/Component/Component.js';
import { action } from '../modules/actions.js';
import { delegate } from '../util/helper.js';

class SearchHistory extends Component {
  setEvent() {
    delegate(this.$target, 'click', 'span', (event) => this.handleClick(event));
  }

  async handleClick(event) {
    const { textContent: searchKeyword } = event.target;

    const searchResults = await this.getSearchResult(searchKeyword);

    return this.store.dispatch(
      action.SEARCH_ZZAL(searchResults, searchKeyword)
    );
  }

  getSearchResult = async (searchKeyword) => {
    const response = await api.getSearchResult(searchKeyword);
    if (response.isError) return console.error(response.data);

    return response.data;
  };

  template() {
    return Array.from(this.store.getState().historyData).map(
      (historyText) => `
        <span>${historyText}</span>
    `
    );
  }
}

export default SearchHistory;
