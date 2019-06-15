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
  errorNotify(error){
    console.log('error 에 따라서 어떻게 처리 할지 ')
  }
};

export default SearchResult;
