function SearchInput(selector) {
    this.$target = document.querySelector(selector);
    this.debounce = new Debounce();
    this.$target.addEventListener('keydown', (event) => {
        this.debounce.fn(() => {searchAPI.getSearchdata(event.target.value)});
    })
}