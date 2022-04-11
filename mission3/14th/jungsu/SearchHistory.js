

export default function SerchHistory({ $target, initialState, onClick }) {
    this.state = initialState;

    this.$element = document.createElement('div');
    $target.append(this.$element);

    this.setState = (nextState) => {
        this.state = nextState;

        this.render();
    }

    this.render = () => {
        const htmlString = `${this.state
            .map((keyword) => `<button data-keyword = ${keyword} >${keyword}</button>`)
            .join('')}`

        this.$element.innerHTML = htmlString;
    }

    this.render();

    this.$element.addEventListener('click', e=> {
        const $button = e.target.closest('button');

        if($button) {
            const keyword = $button.dataset;

            onClick(keyword);
        }
    })
}