function SearchInput(selector) {
    this.debounceCheck;
    this.$target = document.querySelector(selector);
    this.$target.addEventListener('keydown', (event) => {
        this.debounce(() => {searchAPI.getAPIdata(event.target.value)});
    })

    this.debounce = (callback, milliseconds = 1000) => {
        clearTimeout(this.debounceCheck);

        this.debounceCheck = setTimeout(() => {
            callback(...arguments);
            this.$target.value = '';
        }, milliseconds);
    }
}