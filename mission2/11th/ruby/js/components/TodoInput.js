function TodoInput($appElem, todos, addTodo) {
    this.$appElem = $appElem;
    this.todos = todos;
    this.addTodo = addTodo;
    this.$formElem = document.createElement('form');

    this.$appElem.appendChild(this.$formElem);

    const todoInputEventHandler = () => {
        const $addTodoBtnElem = document.querySelector('.btn_add_todo');
        const $inputTodo = document.querySelector('.input_todo');
        const $removeAllBtnElem = document.querySelector('.btn_remove_all');

        $removeAllBtnElem.addEventListener('click', () => {
            const removeAllEvent = new Event('removeAllTodos');
            $appElem.dispatchEvent(removeAllEvent);
        });
        
        $addTodoBtnElem.addEventListener('click', (e) => {
            addTodo(this.todos, $inputTodo.value);
        });

        this.$formElem.addEventListener('keypress', (e) => {
            if(e.key === 'Enter') {
                addTodo(this.todos, $inputTodo.value);
            };
        });
    };

    this.render = () => {
        this.$formElem.innerHTML = `
            <input type="text" placeholder="할 일을 입력해주세요!" class="input_todo" autofocus />
            <button type="submit" class="btn_add_todo">추가</button>
            <button type="submit" class="btn_remove_all">전체 삭제</button>
        `

        todoInputEventHandler();
    };

    this.render();
};

export default TodoInput;
