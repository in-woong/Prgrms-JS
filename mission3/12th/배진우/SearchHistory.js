import storage from './localStorage.js';

export default function SearchHistory({ $target, initialState }) {

    const $history = document.createElement('div');
    $history.id = "history";
    $history.className = "invisible";
    $target.appendChild($history);

    this.state = initialState;

    const cacheSize = 10; //  히스토리 10개까지만 보유
    this.saveHistory = text => {
        let cacheData = [];
        if (this.state.length < cacheSize) {
            cacheData = [text, ...this.state];
        } else {
            cacheData = this.state.filter((x, idx) => idx !== (cacheSize - 1));
            cacheData.unshift(text);
        }
        //storage.removeItem('searchHistory');
        storage.setItem('searchHistory', cacheData);
        this.setState(cacheData);
    }

    this.setState = nextState => {
        this.state = nextState;
        this.render();
    }

    this.render = () => {
            $history.innerHTML = `<ul>${this.state.map(text => ` <li id="history-item">${text}</li>`).join(" ")}</ul`;
    }
    this.render();
}