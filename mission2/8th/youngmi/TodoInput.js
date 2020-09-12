// Todo 추가하는 함수
const $todoInput = document.querySelector('.todoInput');

function TodoInput(app) {
    this.app = app;

    this.addTodo = (e) => {
        if (e.key == 'Enter' && e.target.value !== '') {
            const newTodo = e.target.value;
            this.app.addTodo({
                text: newTodo,
                isCompleted: false
            })
            $todoInput.value = '';
        }
    }
    $todoInput.addEventListener('keypress', this.addTodo);
}
export default TodoInput;