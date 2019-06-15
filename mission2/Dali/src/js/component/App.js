import { getJJalByKeyWord } from "../api/index.js";
import eventHelper from '../utils/eventHelper.js';
import { saveLocalStorage } from  '../utils/storage.js';

const App = class {
  constructor({searchInput, searchResult, data=[]}){
      Object.assign(this, {searchInput, searchResult, data});
      this.init();
  }
  init(){
    this.searchInput.bind('FETCH_RESULT', title => this.handleKeyup(title));
  }
  setState(data){
    this.data = data;
    this.searchResult.render(data);
  }
  async handleKeyup(keyword){
    try {
      keyword = keyword.trim();
      if(keyword){
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
  renderErrorMessage(error){
      this.searchResult.errorNotify(error)
  }
  saveKeyWord(keyword){
    const RECENT_KEYWORDS = 'RECENT_KEYWORDS';
    saveLocalStorage(RECENT_KEYWORDS, keyword);
  }
};

export default App;
