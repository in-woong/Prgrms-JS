import { $, createDOMElement, _fetch } from './utils/index.js';
import { SearchInput,SearchHistory, SearchResult } from './components/index.js';

class App {
    constructor({ $target }) {
        this.$target = $target;

        this.init();

        this.state = {
            keyword: '',
            keywordHistory: [],
            memeLists: [],
        }

        this.$loadingIndicator = $('.loading');

        this.searchInput = new SearchInput({
            $target: $('#search-input'),
            onSearch: this.onSearch.bind(this),
        });
        this.searchHistory = new SearchHistory({
            $target: $('#search-history'),
            keywordHistory: this.state.keywordHistory,
            onHistoryTagClick: this.onHistoryTagClick.bind(this),
        });
        this.searchResult = new SearchResult({
            $target: $('#search-result'),
            memeLists: this.state.memeLists,
        });
    }

    init() {
        const fragment = document.createDocumentFragment();

        const $label = createDOMElement({
            tagName: 'label',
            selectorName: 'id',
            name: 'search-label',
        });
        $label.innerText = '움짤 검색기';
        $label.setAttribute('for', 'search-input');

        const $searchInput = createDOMElement({
            tagName: 'input',
            selectorName: 'id',
            name: 'search-input',
        });
        $searchInput.setAttribute('placeholder', '키워드를 검색해주세요!');
        $searchInput.setAttribute('autofocus', true);

        const $searchHistory = createDOMElement({
            tagName: 'span',
            selectorName: 'id',
            name: 'search-history',
        });

        const $searchResult = createDOMElement({
            tagName: 'div',
            selectorName: 'id',
            name: 'search-result',
        });

        const $loadingIndicator = createDOMElement({
            tagName: 'div',
            selectorName: 'class',
            name: 'loading',
        });
        
        $loadingIndicator.innerText = '로딩중...';

        fragment.appendChild($label);
        fragment.appendChild($searchInput);
        fragment.appendChild($searchHistory);
        fragment.appendChild($searchResult);
        fragment.appendChild($loadingIndicator);

        this.$target.appendChild(fragment);
    }

    async onSearch({ keyword }) {

        this.$loadingIndicator.classList.add('show');

        const memeLists = await _fetch({ keyword });

        if (!Boolean(memeLists)) alert('잠시후에 다시 시도해주세요..');

        if (memeLists.length === 0) alert('검색 결과가 없습니다.');
        else {
            const { keywordHistory } = this.state;

            const newKeywordHistory = (keywordHistory.includes(keyword))
                ? keywordHistory
                : [...keywordHistory, keyword];

            const updatedState = {
                keyword,
                keywordHistory: newKeywordHistory,
                memeLists,
            };

            this.setState({ updatedState });
        }

        this.$loadingIndicator.classList.remove('show');
    }

    onHistoryTagClick({ keyword }) {
        this.onSearch({ keyword });
    }

    setState({ updatedState }) {
        this.state = { ...this.state, ...updatedState };
        this.render();
    }

    render() {
        const { keyword, keywordHistory, memeLists } = this.state;

        this.searchInput.setState({ keyword });
        this.searchHistory.setState({ keywordHistory });
        this.searchResult.setState({ memeLists });
    }
}

export default App;
