import SearchHistory from '../components/SearchHistory.js';
import SearchInput from '../components/SearchInput.js';
import SearchResult from '../components/SearchResult.js';
import Component from '../core/Component/Component.js';
import { qs } from '../util/helper.js';

class ZZalPage extends Component {
  template() {
    return `
        <div class="container">
            <div id="search-input"></div>
            <div class="content">
                <div id="search-history"></div>
                <div id="search-result"></div>
           </div>
        </div>
        `;
  }

  mounted() {
    const $searchInput = qs('#search-input');
    const $searchHistory = qs('#search-history');
    const $searchResult = qs('#search-result');

    new SearchInput($searchInput, null, this.store);
    new SearchHistory($searchHistory, null, this.store);
    new SearchResult($searchResult, null, this.store);
  }
}

export default ZZalPage;
