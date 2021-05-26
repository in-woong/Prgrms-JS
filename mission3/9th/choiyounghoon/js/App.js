import SearchInput from  "./SearchInput.js";
import SearchResult from "./SearchResult.js";
import SearchHistory from "./SearchHistory.js";
import { api } from "./api.js";

function App(){
    const searchHistory = new SearchHistory({
        target:"#search-history",
        onClick: async (keyword) => {
            try{
                this.setState(await api.fecthJJal(keyword));
                searchInput.setState(keyword);
            }
            catch(err)
            {
                console.log(err);
            }
        }
    });

    const searchInput = new SearchInput({
        target:"#search-keyword",
        onSearch: async (keyword) => {
            try{
                this.setState(await api.fecthJJal(keyword));
                searchHistory.setState(keyword);
            }
            catch(err)
            {
                console.log(err);
            }
        }
    });
    
    const searchResult = new SearchResult({
        data:this.jjalData,
        target:"#search-result"
    });

    this.setState = (nextData) => {
        this.jjalData = nextData;
        searchResult.setState(this.jjalData);
    };
}

new App();
