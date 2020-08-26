import SearchInput from './SearchInput.js';
import SearchHistory from './SearchHistory.js';
import SearchResult from './SearchResult.js';
import ErrorMessage from './ErrorMessage.js';

import {apiUrl} from './util.js';

function App() {
  this.data = {
    jjals: [],
    histories: [],
  }

  //event.taget.value가 인자로 넘어올 것임
  //debounce 처리도 해야함.
  this.searchJjals = async (inputKeyword) => { 
    try {
      //입력했다가 다 지운 경우 api 호출 막기.
      if(!inputKeyword){
        return;
      }
      //api call
      const response = await fetch(`${apiUrl}?text=${inputKeyword}`);
      //server로 부터 도착한 readableStream을 내장함수 fetch가 promise로 감쌈.
      //json으로 변경 필요. json() 함수 사용(promise return)
      const jjals = await response.json();
      this.setState({
        jjals,//property shorthand
        histories: this.data.histories.includes(inputKeyword)
          ? this.data.histories
          : this.data.histories.concat(inputKeyword)
      })
    } catch (error) {
      console.log(error);
      //errormessage 컴포넌트 렌더링
      //result 비우기
      this.searchResult.setState([]);
      this.errorMessage.setState('API error~')
    }
  }

  this.setState = (data) => {
    this.data = { ...data };
    this.searchHistory.setState(this.data.histories);
    this.searchResult.setState(this.data.jjals);
  }
  
  this.searchInput = new SearchInput({
    elementId: 'search-input',
    searchJjals: this.searchJjals,
  })

  this.searchHistory = new SearchHistory({
    elementId: 'search-history',
    histories: this.data.histories,
    searchJjals: this.searchJjals,
  })

  this.searchResult = new SearchResult({
    elementId: 'search-result',
    jjals: this.data.jjals,
  })

  this.errorMessage = new ErrorMessage({
    elementId: 'error-message',
    errorMessage: '',
  })

}

export default App

