export class TodoInput {
    constructor($app, $todoList) {

        this.$app = $app;
        this.$list = $todoList;
        this.$target = document.createElement('input');
        this.$target.setAttribute('type', 'text');
        this.$target.classList.add('todo-input');
        this.attatchEvent();

        $app.appendChild(this.$target);

    }

    attatchEvent() {
        this.$target.onkeydown = ({ code, isComposing }) => {
            if (!isComposing && this.$target.value && code === 'Enter') {
                this.$list.addToList(this.$target.value);
                this.$target.value = '';
            }
        };

    }

}