export class TodoList {
    constructor({ $app, initState, onToggleItem, onRemoveItem }) {
        this.state = initState;
        this.onToggleItem = onToggleItem;
        this.onRemoveItem = onRemoveItem;

        this.$target = document.createElement('ul');
        this.$target.classList.add('todo-list');

        $app.appendChild(this.$target);

        this.addEventDelegator();
        this.render();
    }

    render() {
        this.$target.innerHTML = `${this.state.reduce((acc, { text, isCompleted }, index) => `${acc} <li data-index=${index}>${isCompleted ? `<s>${text}</s>` : text} <button>삭제</button></li>`, '')}`;
    }

    setState(newState) {
        this.state = newState;
        this.render();
    }

    addEventDelegator() {
        this.$target.addEventListener('click', ({ target }) => {
            const { index } = target.closest('li').dataset;
            const { nodeName } = target;
            switch (nodeName) {
                case "BUTTON":
                    this.onRemoveItem(index);
                    break;
                case "LI":
                case "S":
                    this.onToggleItem(index);
                    break;

            }

        });
    }

}
