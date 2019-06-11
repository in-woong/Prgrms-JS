import { getJJalByKeyWord } from "./api/index.js";
/*
  data: rendering data
  target: html string
 */
const SearchResult  = class {
  constructor({data = [], target}){
      this.$el = document.querySelector(target);
      this.data = data;
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
    this.$el.innerHTML = this.makeHtmlTemplate();
  }
  async handleKeyup(keyword){
    try {
      const jjalData = await  getJJalByKeyWord(keyword);
      console.log(JSON.stringify(jjalData, null, 2));
      this.setState(jjalData)
    }
    catch(error){
      console.log('error:',error)
    }
  }
  init(){
    this.$el.addEventListener('keyup', ({target: {value}})=>this.handleKeyup(value))
  }
};

export default SearchResult;
