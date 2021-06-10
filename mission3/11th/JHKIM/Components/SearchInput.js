export default class SearchInput {
    constructor({ $app, onSearchInput }) {
        this.$target = document.createElement('input');
        this.onSearchInput = onSearchInput;

        this.$target.addEventListener('keydown', async({ code, target }) => {
            if (code === 'Enter') {
                this.onSearchInput(target.value);
            }
        });

        $app.appendChild(this.$target);

    }

}
