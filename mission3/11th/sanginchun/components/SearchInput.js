class SearchInput {
  constructor({ $parent, onInput }) {
    if (!$parent) throw new Error('타겟 DOM이 없습니다');
    if (typeof onInput !== 'function')
      throw new Error('onInput 함수가 올바르지 않습니다');

    this.$target = document.createElement('input');
    this.$target.setAttribute('data-component-type', 'SearchInput');
    this.$target.setAttribute('type', 'text');
    this.$target.setAttribute('placeholder', '검색어를 입력하세요');

    this.$target.addEventListener('input', (e) => onInput(e.target.value));

    $parent.appendChild(this.$target);
  }
}

export default SearchInput;
