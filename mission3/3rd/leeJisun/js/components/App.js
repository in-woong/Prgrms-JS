import {SearchKeyword} from './SearchKeyword';
import {SearchResult} from './SearchResult';

export const App = data => {
  SearchKeyword();

  // 초기 랜더링
  const searchResult = new SearchResult('#search-result', data);
  searchResult.setState(data);
}
