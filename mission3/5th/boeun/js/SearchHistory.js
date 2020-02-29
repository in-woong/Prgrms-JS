import { STORAGE_KEY_HISTORY, MAX_HISTORY_COUNT } from './constant.js';
import { validateElement, validateEmptyInput } from './validator.js';
import { getData, setData } from './util.js';

function SearchHistory(target, onClickHistory) {

    this.historyData = getData(STORAGE_KEY_HISTORY);
    this.$target = document.querySelector(target);

    validateElement(this.$target);

    this.$target.addEventListener('click', onClickHistory);

    this.render = () => {        
        if(this.historyData) {
            this.$target.innerHTML = this.historyData.map(historyData => `<div>${historyData}</div>`).join('');
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
