import Template from '../template/index.js';
import errorHelper from '../utils/errorHelper.js';
import typeChecker from '../utils/typeChecker.js';
import { ERROR_TYPE, ERROR_TO_USER } from '../utils/errorMessage.js';

const SearchResult  = class {
  constructor(result){
      this.$resultEl = document.querySelector(result);
  }
  static makeImagCardTemplate({keyword, imageList}){
    if(keyword){
      return `${Template.keyWordTemplate(keyword, imageList.length)}${Template.imgCardTemplate(imageList)}`
    }
    else return '';
  }
  render(data){
    this.$resultEl.innerHTML = SearchResult.makeImagCardTemplate(data)
  }
  checkErrorType(error){

  }
  errorNotify(error){
    console.dir(error);
    this.$resultEl.innerHTML = Template.ErrorNotifyTemplate(ERROR_TO_USER.TRY_AGAIN_LATER);
  }
  showRecentKeywords(recentKeywords){
    // todo SearchInput 밑에 최근 검색어 Template 추가 예정
    //this.$resultEl.innerHTML = JSON.stringify(recentKeywords);
  }
};

export default SearchResult;
