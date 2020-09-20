export default function TodoInput($target, addTodo, deleteAllTodo){
    this.$target = $target;
    this.$div = document.createElement('div');
    this.$input = document.createElement('input');
    this.$inputBtn = document.createElement( 'button' );
    this.$deleteBtn = document.createElement( 'button' );

    this.render = () => {
        this.$target.appendChild(this.$div);

        this.$input.setAttribute('type', 'text');
        this.$div.appendChild(this.$input);

        const inputBtnText = document.createTextNode( 'Click' );
        this.$inputBtn.appendChild(inputBtnText);
        this.$div.appendChild(this.$inputBtn);

        const deleteBtnText = document.createTextNode('remove All');
        this.$deleteBtn.appendChild(deleteBtnText);
        this.$div.appendChild(this.$deleteBtn);

    }


    this.todoInputAddEventListener = () => {
        this.$inputBtn.addEventListener('click', this.addTodo); 
        
        const removeAllTodo = new CustomEvent('removeAll');
        this.$deleteBtn.addEventListener('removeAll', this.deleteAllTodo);
        this.$deleteBtn.addEventListener('click', (e) => {
            e.target.dispatchEvent(removeAllTodo);
        })
    }

    this.resetInputValue = () => {
        this.$input.value = '';
    }

    this.addTodo = () => {
        addTodo(this.$input.value);
        this.resetInputValue();
    }

    this.deleteAllTodo = () => {
        deleteAllTodo();
    }
   

    this.render();
    this.todoInputAddEventListener();
}
