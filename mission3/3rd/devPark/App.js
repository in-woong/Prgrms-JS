import SearchKeyword from './components/SearchKeyword.js'
import SearchResult from './components/SearchResult.js'
 function App($element) {
 
    this.data = [];
    this.keyword = '';

    const debounce = (fn) => { 
      if(this.timer){
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(fn,2000)
    }  

    const onKeyup = (keyword) => debounce(async () => {
      this.keyword = keyword;
      const jjalbotData = await getData().catch(error => {throw new Error(error)})
      this.setState(jjalbotData);
    })
    
    const getData = async () => {
      const res = await fetch(`https://jjalbot.com/apii/jjals?text=${this.keyword}`)
      return await res.json();
    }
    
    new SearchKeyword(onKeyup, $element)
   
    const searchResult = new SearchResult(this.data, $element)

    this.setState = nextData => {
      this.data = nextData;
      searchResult.setState(this.data)
    } 
 
}





export default App
