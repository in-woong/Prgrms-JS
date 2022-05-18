export default function SearchHistory({$target, initialState, onClick}){
    this.state = initialState;
    this.$list = document.createElement('ul');
    this.$list.className = 'search-history';
    $target.prepend(this.$list);

    this.setState = (nextState) => {
        this.state = nextState;
        this.render();
    }

    this.render = () => {
        this.$list.innerHTML = this.state.map(({text}) => {
            return `<li data-text='${text}'>${text}</li>`
        }).join('');
    }

    this.$list.addEventListener('click', e => {
        if(e.target.tagName === 'LI'){
            onClick(e.target.dataset.text);
        }
    });

    this.render();
};
