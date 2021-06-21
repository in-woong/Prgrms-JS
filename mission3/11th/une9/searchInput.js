export class SearchInput {
    constructor({target, onInputWord}) {
        this.target = target;
        this.onInputWord = onInputWord;

        let timer;
        this.target.addEventListener('input', (e) => {
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(() => {
                if(e.target.value) {
                    onInputWord(e.target.value);
                }
            }, 300);
        });
    }
}
