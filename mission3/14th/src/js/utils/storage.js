import {ALERT_FETCH_ERROR,KEYWORD_HISTORY_KEY,ALERT_GET_HISTORY_ERROR} from '../utils/keywords.js';
/* API 호출 관련 함수들을 정리 해놓은파일 */
const saveSearchKeyword=(keyword)=>{
    const searchKeywordList = selectSearchKeywordList();
    
    //기존에 검색 이력이있다면 입력한 검색어가 맨 위로 올라가도록한다.
    if(searchKeywordList){
        const hasKeywordList = searchKeywordList.includes(keyword);
        if(hasKeywordList){
            const index = searchKeywordList.findIndex(_keyword=> _keyword === keyword);
            searchKeywordList.splice(index,1);
        }
        localStorage.setItem(KEYWORD_HISTORY_KEY, JSON.stringify([...searchKeywordList, keyword]) );
    }
};

const selectSearchKeywordList=()=>{
    try{
        return JSON.parse(localStorage.getItem(KEYWORD_HISTORY_KEY)||'[]');
    }catch(error){
        console.error(error);
        alert(ALERT_GET_HISTORY_ERROR);
        return;
    }
}

export {saveSearchKeyword,selectSearchKeywordList};
