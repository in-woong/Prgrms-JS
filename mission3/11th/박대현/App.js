import SearchInput from './SearchInput.js';
import SearchResult from './SearchResult.js';
import SearchHistory from './SearchHistory.js';

export default function() {
  const $app = document.createElement('div');
  const attachAppToDom = (...components) => {
    // $app에 자식 컴포넌트를 붙이고 $app을 body에 붙이기
    components.forEach(({element}) => $app.appendChild(element));
    document.body.appendChild($app);
  }
  this.render = () => {
    // 하위 컴포넌트를 생성하고 Dom에 새롭게 부착시킴
    const searchHistory = new SearchHistory([]);
    const searchResult = new SearchResult([]);
    // Input 입력시 Result와 History를 변경하기 위해 상태를 변하게 하는 함수를 넘겨줌
    const searchInput = new SearchInput(searchResult.setState, searchHistory.addHistory);
    attachAppToDom(searchInput, searchHistory, searchResult);

    // history 클릭시 searchInput의 loadData 호출
    searchHistory.listenClick(searchInput.loadData);
  }
  this.render();
}
