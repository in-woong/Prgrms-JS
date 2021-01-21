import SearchKeyword from './SearchKeyword.js';
import SearchResult from './SearchResult.js';

export default function App(){
  this.target = document.querySelector('#search-keyword');

  this.inputKeyword = async (keyword) => {
    try{
      await fetch(`https://jjalbot.com/api/jjals?text=${keyword}`)
      .then(x => x.json())
      .then(data => {
        this.setState(data);
      })
    } catch(error) {
      throw new Error("fetch error");
    }
   
  }
  
  this.setState = function(nextData) {
    
    searchResult.setState(nextData);
  }

  const searchKeyword = new SearchKeyword(this.target, this.inputKeyword);
  const searchResult = new SearchResult(this.data);

}
