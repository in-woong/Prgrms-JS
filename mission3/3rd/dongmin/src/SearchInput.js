function SearchInput({onKeyDown, $parent}) {
    this.onKeyDown = onKeyDown;
    const $el = document.createElement("input");
    $el.setAttribute('id', 'search-input');
    $parent.appendChild($el);
    document.querySelector('#search-input').addEventListener("keydown",
    (e) => {
        if (e.keyCode === 13) {
            this.onKeyDown(e.target.value);
        }
    });
};

export default SearchInput;