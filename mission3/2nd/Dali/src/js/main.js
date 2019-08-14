import SearchResult from './component/SearchResult.js';
import SearchInput from './component/SearchInput.js';
import App from './component/App.js';
import config from './config.js';


const setView = (({config, App, SearchResult, SearchInput})=>{
  try {
    const jjalApp = new App({
      data: config.data,
      searchInput: new SearchInput(config.search),
      searchResult: new SearchResult(config.result)
    });
  }catch (error) {
      console.log(error);
  }
})({
  config,
  App,
  SearchResult,
  SearchInput,
});

document.addEventListener('DOMContentLoaded', setView);


