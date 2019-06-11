import SearchResult from './SearchResult.js';
import config from './config.js';
// 우선 searchResult가 render를 잘 하도록
// data는 받아야 될까?

document.addEventListener('DOMContentLoaded', ()=>{
  (function () {
    const searchResult = new SearchResult({
      data: config.data,
      target: config.target
    });
  })(SearchResult);
});


