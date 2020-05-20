function Debounce(milliseconds = 1000) {
    this.debounceCheck;
    this.milliseconds = milliseconds;

    this.fn = (callback) => {
        clearTimeout(this.debounceCheck);

        this.debounceCheck = setTimeout(() => {
            callback(...arguments);
        }, this.milliseconds);
    }
}