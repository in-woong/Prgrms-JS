export default function TodoInput($target, addTodo) {

    this.$target = $target;

    this.render = () => {
        this.inputBox = document.createElement('input');
        this.inputBox.className = 'inputBox';
        this.inputBox.type = 'text';
        this.inputBox.placeholder = '할 일 입력';
        this.$target.appendChild(this.inputBox);

        this.addBtn = document.createElement('button');
        this.addBtn.className = 'addBtn';
        this.addBtn.innerHTML = '추가';
        this.$target.appendChild(this.addBtn);
    }
    
    this.attachEvent = () => {
        this.addBtn.addEventListener("click", () => {
            addTodo(this.inputBox.value);
            this.inputBox.value = "";
            this.inputBox.focus();
        })  
    }
    

    this.render();
    this.attachEvent();
}

