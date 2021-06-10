export default class SearchInput {
    constructor({ $app, onSearchInput }) {
        this.$target = document.createElement('input');
        this.onSearchInput = onSearchInput;

        this.$target.addEventListener('input', async( { target }) => {
            
            await this.onSearchInput(target.value);
        });

        $app.appendChild(this.$target);

    }

}
