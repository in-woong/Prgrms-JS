function TodoInput($target, addTodo){
    this.$target = $target;
    this.$div = document.createElement('div');
    this.$input = document.createElement('input');
    this.$inputBtn = document.createElement( 'button' );

    this.render = () => {
        this.$target.appendChild(this.$div);

        this.$input.setAttribute('type', 'text');
        this.$div.appendChild(this.$input);

        var inputBtnText = document.createTextNode( 'Click' );
        this.$inputBtn.appendChild(inputBtnText);
        this.$div.appendChild(this.$inputBtn);
    }

    this.setState = () => {
        this.$target.appendChild(this.$div);
    }

    this.initAddEvent = () => {
        this.$inputBtn.addEventListener('click', (e) => {
            addTodo();
        }) 
    }

   

    this.render();
    this.initAddEvent();
}