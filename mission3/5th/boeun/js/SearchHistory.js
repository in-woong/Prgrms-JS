import { STORAGE_KEY_HISTORY, MAX_HISTORY_COUNT } from './constant.js';
import { validateElement, validateEmptyInput } from './validator.js';
import { getData, setData } from './util.js';

function SearchHistory(target, onClickHistory) {

    this.historyData = getData(STORAGE_KEY_HISTORY) || [];
    this.$target = document.querySelector(target);

    validateElement(this.$target);

    this.$target.addEventListener('click', onClickHistory);

    this.render = () => {        
        if(this.historyData) {
            const htmlString = this.historyData.map(d => `<div>${d}</div>`).join('');
            this.$target.innerHTML = htmlString;
        }
    }  

    this.setState = (newData) => { 
        if(validateEmptyInput(newData)) {
            return
        }

        if(this.historyData.length >= MAX_HISTORY_COUNT){
            this.historyData.shift();
        }
    
        this.historyData.push(newData);
        this.render();

        setData(STORAGE_KEY_HISTORY, this.historyData)
    }

    this.render();
}

export default SearchHistory
