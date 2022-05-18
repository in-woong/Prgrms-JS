import { newSearchInputError } from '../Error.js'

export default function SearchInput($app) {
  if(!new.target) throw new Error(newSearchInputError);

  const $target = $app.querySelector('#search-keyword');
  const $deleteBtn = $app.querySelector('#delete-history');

  const searchKeyword = (event) => {
    const keyword = $target.value.trim();
    if(keyword.length > 0) {
      const eventName = (event.key === 'Enter')? 'EnterKeywordEvent' : 'SearchKeywordEvent';
      $app.dispatchEvent(new CustomEvent(eventName, {detail: keyword}));
      if(event.key === 'Enter') $target.value = '';
    } else {
      const eventName = 'ClearSearchResultEvent';
      $app.dispatchEvent(new CustomEvent(eventName));
    }
  }

  const deleteHistory = (event) => {
    const eventName = 'DeleteHistoryEvent';
    $app.dispatchEvent(new CustomEvent(eventName));
  }

  let timer;
  const debounce = (event) => {
    if(timer) { clearTimeout(timer); }
    timer = setTimeout(() => {
      searchKeyword(event);
    }, 300)
  }

  $target.addEventListener('keyup', debounce);
  $deleteBtn.addEventListener('click', deleteHistory);
}