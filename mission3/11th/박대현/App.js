import SearchInput from './SearchInput.js';
import SearchResult from './SearchResult.js';
import SearchHistory from './SearchHistory.js';

export default function() {
  const $app = document.createElement('div');
  const appendToDom = (...tags) => {
    // $app에 각 컴포넌트의 태그를 연결하고 body에 연결하기
    tags.forEach(({element}) => $app.appendChild(element));
    document.body.appendChild($app);
  }
  this.render = () => {
    const searchInput = new SearchInput();
    const searchHistory = new SearchHistory([]);
    const searchResult = new SearchResult([]);
    appendToDom(searchInput, searchHistory, searchResult);

    // Input 이벤트 듣기
    searchInput.searchOn(searchResult.setState, searchHistory.addHistory);
  }
  this.render();
}
