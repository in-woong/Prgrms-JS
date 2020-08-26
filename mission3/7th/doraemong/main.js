import searchInput from './searchInput.js'
import searchResult from './searchResult.js'
import searchHistory from './searchHistory.js'
export default function App(){
  this.data = {
    history:[],
    searchData:[]
  };
  this.$searchResult = document.querySelector('#search-result');
  const JJALBOT_URL = 'https://jjalbot.com/api/jjals'
  this.getJJALImgs = async (query) =>{
    const res = await fetch(`${JJALBOT_URL}?text=${query}`);
    const result = await res.json();
    return result;
  }
  

    
  
  this.setState=(InputData)=>{
    this.data.searchData = InputData.InputData;
    this.data.history = InputData.history;
    this.searchResult.setState(InputData);
    this.searchHistory.setState(InputData.histories)
  }
  this.init=()=>{
    this.searchInput = new searchInput({
        onSearch:async (keyword)=>{
          let inputData = await this.getJJALImgs(keyword);
          const newHistory = [
            ...this.data.history,
            keyword
          ]
          this.setState({
            history:newHistory,
            searchData:inputData
          });
        }
      });
    this.searchResult = new searchResult({
      data:this.data,
      target:this.$searchResult
    })
    this.searchHistory = new searchHistory({
      data:this.data,
      onSearch:async (keyword)=>{
        let inputData = await this.getJJALImgs(keyword);
        this.setState({
          history:keyword,
          searchData: inputData
        });
      }
    })
    
    
  }
  
  this.init();
};
