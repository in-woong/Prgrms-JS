export default class TodoInput{
    constructor(params){
        this.targetButton = params.targetButton;
        this.targetInput = params.targetInput;
        this.inputEvent = params.inputEvent;

        this.targetButton.addEventListener('click', () => this.inputEventHandler());
    }

    inputEventHandler(){
        const inputValue = this.targetInput.value.trim();
        this.targetInput.value = '';
        this.targetInput.focus();
        if (inputValue.length === 0){
            throw new Error ("공백은 입력할 수 없습니다!")
        } else{
            this.inputEvent(inputValue);
        }
    }
}