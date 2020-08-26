export default class TodoInput {
    constructor({
        addTodo,
        removeAllEvent
    }) {
        this.addTodo = addTodo
        this.removeAllBtn = document.getElementById('removeAll')
        this.submitBOX = document.getElementById('submitBOX');
        this.submitInput = document.getElementById('submitInput');

        this.submitBOX.addEventListener('submit', (e) => {
            e.preventDefault();
            this.submitTodo(e)
        })

        this.removeAllBtn.addEventListener('click', function() {
            this.dispatchEvent(removeAllEvent)
        })
    }

    submitTodo = () => {
        const submittedTodo = this.submitInput.value;
        this.addTodo(submittedTodo)
        this.submitInput.value = '';
    }
}
