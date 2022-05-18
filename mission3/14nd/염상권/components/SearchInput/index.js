
export class SearchInput {
    constructor({ $target, onSearch }) {
        this.$target = $target;
        this.onSearch = onSearch;
        
        this.registerInputHendler();
    }

    debounce({ callback, delay }) {
        let timerId;
        return (event) => { 
            clearTimeout(timerId);

            timerId = setTimeout(() => {
                callback(event);
            }, delay);
        }
    }

    validateKeyword({ keyword }) { 
        return (keyword.trim()) ? true : false;
    }


    registerInputHendler() {
        this.$target.addEventListener('input', this.debounce({
            callback: (e) => { 
                e.preventDefault();

                const {target: {value}} = e;
                if (this.validateKeyword({ keyword: value })) {
                    this.onSearch({ keyword: value.trim() });
                }
             },
            delay: 1000,
        }));
    }

    render({ keyword }) {
        this.$target.value = keyword;
    }

    setState({ keyword }) {
        this.render({ keyword });
    }
}
