import { getJJalByKeyWord } from "./api/index.js";
/*
  data: rendering data
  target: html string
 */
const SearchResult  = class {
  constructor({data = [], target, search}){
      this.$resultEl = document.querySelector(target);
      this.$searchEl = document.querySelector(search);
      this.data = data;
      this.searchedKeyword = "";
      this.init();
  }
  setState(data){
    this.data = data;
    this.render();
  }
  makeHtmlTemplate(){
    return `${this.data.map(
      d => `<img src="${d.imageUrl}">`
    ).join('')}`;
  }
  render(){
    // console.log(this.$el, '$.el');
    // console.log(this.data, 'this.data');
    this.$resultEl.innerHTML = this.makeHtmlTemplate();
  }
  checkSearchResult(data){
    data.length ?
      this.setState(data)
      : this.notifyNoResult();
  }
  notifyNoResult(){
    this.$resultEl.innerHTML = `${this.searchedKeyword}로 검색 결과가 없습니다`
  }
  async handleKeyup(keyword){
    try {
      this.searchedKeyword = keyword;
      const jjalData = await  getJJalByKeyWord(keyword);
      console.log(JSON.stringify(jjalData, null, 2));
      this.checkSearchResult(jjalData)
    }
    catch(error){
      console.log('error:',error)
    }
  }
  init(){
    this.$searchEl.addEventListener('keyup', ({target: {value}})=>this.handleKeyup(value))
  }
};

export default SearchResult;
