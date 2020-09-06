export default function TodoInput($target, addTodo) {

    this.$target = $target;

    this.render = function() {
        const inputBox = document.createElement('input');
        inputBox.className = 'inputBox';
        inputBox.type = 'text';
        inputBox.placeholder = '할 일 입력';
        this.$target.appendChild(inputBox);

        const submitBtn = document.createElement('button');
        submitBtn.className = 'submitBtn';
        submitBtn.innerHTML = '+';
        this.$target.appendChild(submitBtn);
    }
    
    this.makeAddEvent = function(){
        const inputBox = document.querySelector('.inputBox');
        const submitBtn = document.querySelector('.submitBtn');

        submitBtn.addEventListener('click', () => {
            addTodo(inputBox.value);
            inputBox.value ='';
        });
    }

    this.render();
    this.makeAddEvent();
}
