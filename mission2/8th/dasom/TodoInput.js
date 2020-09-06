function TodoInput($target, addTodo){
    this.$target = $target;
    this.$div = document.createElement('div');
    this.$input = document.createElement('input');
    this.$inputBtn = document.createElement( 'button' );

    this.render = () => {
        this.$target.appendChild(this.$div);

        this.$input.setAttribute('type', 'text');
        this.$div.appendChild(this.$input);

        const inputBtnText = document.createTextNode( 'Click' );
        this.$inputBtn.appendChild(inputBtnText);
        this.$div.appendChild(this.$inputBtn);
    }


    this.todoAddInputEventListener = () => {
        this.$inputBtn.addEventListener('click', this.addTodo); 
    }

    this.resetInputValue = () => {
        this.$input.value = '';
    }

    this.addTodo = () => {
        addTodo(this.$input.value);
        this.resetInputValue();
    }
   

    this.render();
    this.todoAddInputEventListener();
}