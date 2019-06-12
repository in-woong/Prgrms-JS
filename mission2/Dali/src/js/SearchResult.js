import { getJJalByKeyWord } from "./api/index.js";
import Template from './template/index.js';
import utils from './utils/index.js';
import { ERROR_COMPONET } from './utils/errorMessage.js';
/*
  data: rendering data
  target: html string
 */
const SearchResult  = class {
  constructor({data = [], target, search}){
      SearchResult.validateData(data);
      this.$resultEl = document.querySelector(target);
      this.$searchEl = document.querySelector(search);
      this.setState(data);
      this.searchedKeyword = "";
      this.init();
  }
  static validateData(data){
    utils.throwErrorByFalsy(utils.isArray(data), ERROR_COMPONET.REQUIRED_ARRAY);
  }
  setState(data){
    this.data = data;
    this.render();
  }
  makeImagCardTemplate(){
    if(this.searchedKeyword){
       return `${Template.keyWordTemplate(this.searchedKeyword)}${Template.imgCardTemplate(this.data)}`
    }else {
      return Template.imgCardTemplate(this.data);
    }
  }
  render(){
    this.$resultEl.innerHTML = this.makeImagCardTemplate()
  }
  notifyNoResult(){
    this.$resultEl.innerHTML = `${this.searchedKeyword}로 검색 결과가 없습니다`
  }
  handleJJalResult(data){
    this.setState(data);
    if(!data.length) this.notifyNoResult();
  }
  renderErrorMessage(){
    this.$resultEl.innerHTML = `에러가 발생하였습니다 잠시후에 다시 시도해주세요`
  }
  async handleKeyup(keyword){
    try {
      this.searchedKeyword = keyword;
      const jjalData = await  getJJalByKeyWord(keyword);
      console.log(JSON.stringify(jjalData, null, 2));
      this.handleJJalResult(jjalData);
    }
    catch(error){
      console.log('error:',error);
      this.renderErrorMessage()
    }
  }
  init(){
    this.$searchEl.addEventListener('keyup', ({target: {value}})=>this.handleKeyup(value))
  }
};

export default SearchResult;
