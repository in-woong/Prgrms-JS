
/*
 * input 내용이 변경되면, 해당 input 내용을 이용해 fetch API를 이용해 데이터를 가져옵니다
 * url : https://jjalbot.com/api/jjals?text=검색키워드
 * 
 * 
*/

import debounce from "./utils.js";

export default function SearchInput({ $target, onChange }) {
    this.$element = document.createElement('input');
    this.$element.setAttribute("id", "search-keyword");

    $target.appendChild(this.$element);

    this.render = () => {

    }

    const debounceHandleKeyup = debounce((e) => {
        onChange(e.target.value)
    })

    this.$element.addEventListener('keyup', debounceHandleKeyup)

    this.render();
}