export default function TodoInput(params) {
    const $target = document.createElement('form');
    params.$target.appendChild($target);

    const onInput = params.onInput;
    
    this.render = function () {
        if (this.isDisabled) {
            $target.innerHTML = '';
        } else {
            $target.innerHTML = `<input class='input-todo'></input><input type='submit' class='button-input-todo' value='Add Todo'></input>`;
        }
    };
    
    this.setDisabled = function (isDisabled) {
        this.isDisabled = isDisabled;
        this.render();
    }

    $target.addEventListener('submit', function (e) {
        e.preventDefault();
        
        const $inputTarget = document.querySelector('.input-todo');
        onInput($inputTarget.value);
        $inputTarget.value = '';
    });
}
