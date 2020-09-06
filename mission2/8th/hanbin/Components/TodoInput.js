export default function TodoInput($target) {

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
    
    this.render();
}
