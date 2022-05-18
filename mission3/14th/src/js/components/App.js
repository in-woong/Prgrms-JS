import SearchHistory from './SearchHistory.js';
import SearchInput from './SearchInput.js';
import SearchResult from './SearchResult.js';
import {getMemeList} from '../api/api.js';
import {selectSearchKeywordList,saveSearchKeyword} from '../utils/storage.js';
import {debounce} from '../utils/debounce.js';

export default function App({$root}){
    this.$root=$root;
    
    const selectSearchList= async (searchText)=>{
        if(!searchText){
            setState([]);
            return;
        }
        const resultList = await getMemeList(searchText);
        saveSearchKeyword(searchText);
        setState(resultList);
    }
    const setState=(data)=>{
        searchResult.state = data;
        searchResult.render(data);
        const keywordHistoryList=selectSearchKeywordList();
        searchHistory.state=keywordHistoryList;
        searchHistory.render(keywordHistoryList);
    };
    
    const initHistory = selectSearchKeywordList();
    const searchHistory = new SearchHistory({
        $root,
        initState:initHistory,
        onClickKeyword:({target})=>{
            const {nodeName,innerText} = target;
            if(nodeName === 'LI'){
                selectSearchList(innerText.trim());
            }
        }
    })
    const searchInput = new SearchInput({
        $root,
        onInput:debounce(({target})=>{
            const {value:searchText}=target;
            selectSearchList(searchText.trim()); 

        },1000)
    });
    const searchResult = new SearchResult({
        $root,
        target:'search__result',
        setState
    })
}

