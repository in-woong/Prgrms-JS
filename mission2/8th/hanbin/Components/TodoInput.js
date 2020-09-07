export default function TodoInput($target, addTodo, removeAllTodo) {

    this.$target = $target;

    this.render = function() {
        this.inputBox = document.createElement('input');
        this.inputBox.className = 'inputBox';
        this.inputBox.type = 'text';
        this.inputBox.placeholder = '할 일 입력';
        this.$target.appendChild(this.inputBox);

        this.submitBtn = document.createElement('button');
        this.submitBtn.className = 'submitBtn';
        this.submitBtn.innerHTML = '+';
        this.$target.appendChild(this.submitBtn);

        this.removeAllBtn = document.createElement('button');
        this.removeAllBtn.className = 'removeAllBtn';
        this.removeAllBtn.innerHTML = '모두 삭제';
        this.$target.appendChild(this.removeAllBtn);
    }
    
    this.makeAddEvent = function(){
        this.submitBtn.addEventListener('click', () => {
            addTodo(this.inputBox.value);
            this.inputBox.value ='';
        });
    }

    this.makeRemoveAllEvent = function(){
        this.removeAllBtn.addEventListener('click', () => {
            removeAllTodo();
        })
    }

    this.render();
    this.makeAddEvent();
    this.makeRemoveAllEvent();
}
