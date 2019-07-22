import { getJJalByKeyWord } from "../api/index.js";
import { saveLocalStorage } from  '../utils/storage.js';
import typeChecker from '../utils/typeChecker.js';

const App = class {
  constructor({searchInput, searchResult, data=[]}){
      Object.assign(this, {searchInput, searchResult, data});
      this.init();
  }
  init(){
    this.searchInput.bind('FETCH_RESULT', title => this.handleKeyup(title));
    this.searchInput.bind('HANDLE_FOCUS', () => {
      this.showRecentKeywords();
    });
  }
  setState(data){
    this.data = data;
    this.searchResult.render(data);
  }
  checkKeyword(keyword){
    return typeChecker.isString(keyword) && keyword.trim()!==''
  }
  async handleKeyup(keyword){
    try {
      if(this.checkKeyword(keyword)){
        const imageList = await  getJJalByKeyWord(keyword, (error) => this.renderErrorMessage(error));
        console.log(JSON.stringify(imageList, null, 2));
        this.setState({
          imageList,
          keyword,
        });
        this.saveKeyWord(keyword)
      }
    } catch(error){
      console.log('error', error);
      this.renderErrorMessage(error);
    }
  }
  showRecentKeywords(){
    const recentKeywords = this.getKeyword();
    this.searchResult.showRecentKeywords(recentKeywords);
  }
  renderErrorMessage(error){
      this.searchResult.errorNotify(error)
  }
  getKeyword(keyword){
    const RECENT_KEYWORDS = 'RECENT_KEYWORDS';
    return JSON.parse(localStorage.getItem(RECENT_KEYWORDS))
  }
  saveKeyWord(keyword){
    const RECENT_KEYWORDS = 'RECENT_KEYWORDS';
    saveLocalStorage(RECENT_KEYWORDS, keyword);
  }
};

export default App;
