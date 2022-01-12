import debounce from './debounce.js';
import storage from './localStorage.js';
import SearchHistory from './SearchHistory.js';

export default function SearchInput({ $target, onInputChange }) {
    const $input = document.createElement('input');
    $input.id = "input";
    $target.appendChild($input);

    this.onInputChange = onInputChange;

    const searchHistoryData = storage.getItem('searchHistory', []);
    const searchHistory = new SearchHistory({
        $target,
        initialState: searchHistoryData
    });

    const fetchData = async text => {
        if (text !== "") {
            const res = await fetch(`https://jjalbot.com/api/jjals?text=${text}`)
            if (!res.ok)
                return new Error(`http error : ${res.ok}`);
            return res.json();
        }
    }

    $input.addEventListener('keyup', debounce(async e => {
        const data = await fetchData(e.target.value);
        if (data) {
            searchHistory.saveHistory(e.target.value);
            this.onInputChange(data);
        }
    }, 300));

    //  인풋 값 입력 시  서치 히스토리가 출력되고 입력 후 미출력 되도록 구현
    // 결합도가 높아진거 같은데 이부분을 어떻게 해결해야할지...
    $input.addEventListener('compositionstart', e => {
        $input.nextSibling.classList.remove('invisible');
    });
    $input.addEventListener('compositionend', e => {
        $input.nextSibling.classList.add('invisible');
    })
}