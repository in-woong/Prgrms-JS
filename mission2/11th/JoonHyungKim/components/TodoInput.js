export class TodoInput {
    constructor({ $app, onAddTodoItem }) {
        this.onAddTodoItem = onAddTodoItem;

        this.$target = document.createElement('input');
        this.$target.setAttribute('type', 'text');

        this.attatchEvent();

        $app.appendChild(this.$target);

    }

    attatchEvent() {
        this.$target.onkeydown = ({ code, isComposing }) => {
            if (!isComposing && this.$target.value && code === 'Enter') {
                this.onAddTodoItem(this.$target.value);

                this.$target.value = '';
            }
        };

        
    }
}
