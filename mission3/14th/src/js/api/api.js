
import { ALERT_FETCH_ERROR } from "../utils/keywords.js";

const BASE_URL = 'https://jjalbot.com/api/jjals?text=';

/* API 호출 관련 함수들을 정리 해놓은파일 */
const getMemeList= async (keyword)=>{
    try{
        const response = await fetch(`${BASE_URL}${encodeURIComponent(keyword)}`);
        
        if(!response.ok){
            throw('ALERT_FETCH_ERROR');
        }
        return await response.json();
    }catch(error){
        console.error(error);
        alert(ALERT_FETCH_ERROR);
        return;
    }
};

export {getMemeList};
