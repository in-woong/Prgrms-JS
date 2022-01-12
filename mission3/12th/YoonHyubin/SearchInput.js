export default function SearchInput({ $target, onInputChanged }) {
    this.onInputChanged = onInputChanged;
    let inputTimer = null;

    const $searchInput = document.createElement('div');
    $target.appendChild($searchInput);

    this.render = () => {
      $searchInput.innerHTML = `
        <input type="text" class="search-input">
        <button type="button" class="reset-input">Reset</button>
      `
    };

    this.render();
  
    $searchInput.addEventListener('keyup', (e) => {
        if (e.target.className !== 'search-input') return;
        if (inputTimer !== null) clearTimeout(inputTimer);
        if (e.key === 'Backspace') return;  /* 백스페이스 입력 시에는 검색 이벤트를 수행하지 않는다 */
        
        inputTimer = setTimeout(() => {
            onInputChanged(e.target.value);
        }, 300);
    });

    $searchInput.addEventListener('click', (e) => {
        if (e.target.className !== 'reset-input') return;
        $searchInput.querySelector('.search-input').value = '';
    });
}
