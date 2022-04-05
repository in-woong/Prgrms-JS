
/*
 * initialState: 렌더링에 사용할 데이터
 * $target: html string을 렌더링 할 element의 표현식(ex: #search-result)
 * 
 * 
*/

export default function SearchResult({ $target, initialState }) {
    this.$element = document.createElement('div');
    this.state = initialState;

    $target.appendChild(this.$element);

    this.setState = (nextState) => {
        this.state = nextState;
        this.render();
    }

    this.render = () => {
        this.$element.setAttribute("id", "search-result");
        this.$element.innerHTML = `${this.state.map((s) => `<img src="${s.imageUrl}">`).join('')}`
    }

    this.render();

}