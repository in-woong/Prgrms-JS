import { checkTarget, isArrayData } from '../validator/validation.js'
import { onFetch, onDebounce } from '../util/util.js'
import { JJALBOT_DELAY_TIME, JJALBOT_API_URL } from '../constant/constant.js'

function SearchKeyword({$app, onSearchResult}) {

    if(new.target !== SearchKeyword) {
        throw new Error('new 키워드로 함수의 인스턴스를 생성해야 합니다.')
    }

    const $target = document.createElement('input');
    $target.id = 'search-keyword';
    $app.appendChild($target);

    this.$target = $target;
    this.onSearchResult = onSearchResult;
    this.timer = null;
    this.validate = () => {
        checkTarget(this.$target.id);
    };
    this.fetchData = async (inputValue) => {
        this.searchResultData = await onFetch({
            url : JJALBOT_API_URL,
            inputValue
        });
        isArrayData(this.searchResultData);
        onSearchResult(this.searchResultData);
    };
    this.initEvent = () => {
        this.$target.addEventListener('keyup', (event) => {
            const { value } = event.target;
            if (value) {
                onDebounce.bind(this)({
                    inputValue: value,
                    fetchFunction : this.fetchData,
                    delay: JJALBOT_DELAY_TIME
                });
            }
        });
    };
    
    this.validate();
    this.initEvent();
}

export default SearchKeyword
