// Todo 추가하는 함수
const $todoInput = document.querySelector('.todoInput');

function TodoInput(data, todoList) {
    this.data = data;
    this.$todoList = todoList;

    if (e.key == 'Enter') {
        const newTodo = {
            text: e.target.value,
            isCompleted: true
        };
        this.data.push(newTodo);
        this.$todoList.setState(this.data);
        $todoInput.value = '';
    }

    $todoInput.addEventListener('keypress', todoInput);
}
