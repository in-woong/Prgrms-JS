export default function TodoInput($target, onAddTodo, onRemoveAllTodo) {

    this.prerender = () => {
        this.inputBox = document.createElement('input');
        this.inputBox.className = 'inputBox';
        this.inputBox.type = 'text';
        this.inputBox.placeholder = '할 일 입력';
        $target.appendChild(this.inputBox);

        this.submitBtn = document.createElement('button');
        this.submitBtn.className = 'submitBtn';
        this.submitBtn.innerHTML = '+';
        $target.appendChild(this.submitBtn);

        this.removeAllBtn = document.createElement('button');
        this.removeAllBtn.className = 'removeAllBtn';
        this.removeAllBtn.innerHTML = '모두 삭제';
        $target.appendChild(this.removeAllBtn);
    }
    
    this.bindAddEvent = () => {
        this.submitBtn.addEventListener('click', () => {
            onAddTodo(this.inputBox.value);
            this.inputBox.value ='';
        });
    }

    this.bindRemoveAllEvent = () => {
        this.removeAllBtn.addEventListener('click', () => {
            onRemoveAllTodo();
        })
    }

    this.prerender();
    this.bindAddEvent();
    this.bindRemoveAllEvent();
}
