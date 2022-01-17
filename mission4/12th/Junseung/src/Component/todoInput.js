function TodoInput(props){

    const $todoInput = document.createElement("form");
    const { $target , addTodo } = props;

    this.$target = $target;    
    this.addTodo = addTodo;

    this.render = () => {
        this.$target.appendChild($todoInput);

        $todoInput.innerHTML = `
            <input class = "todoInputTag" type = "text" /> 
            <button type = "submit"> 할 일 추가 </button>
        `
    }

    this.inputEvent = () => {
        $todoInput.addEventListener("submit", (e) => {
            e.preventDefault();
            const $input = document.querySelector("input");

            this.addTodo($input);
        })
    }

    // 실행
    this.render();
    this.inputEvent();
}

export default TodoInput;