export class TodoInput {
    constructor($app, $todoList) {

        this.$app = $app;
        this.$list = $todoList;
        this.$target = document.createElement('div');

        this.textInput = document.createElement('input');
        this.textInput.setAttribute('type', 'text');

        this.removeAllbtn = document.createElement('button');
        this.removeAllbtn.innerHTML = "모두 삭제";

        this.attatchEvent();

        this.$target.appendChild(this.textInput);
        this.$target.appendChild(this.removeAllbtn);

        this.$app.appendChild(this.$target);

    }

    attatchEvent() {
        this.textInput.onkeydown = ({ code, isComposing }) => {
            if (!isComposing && this.textInput.value && code === 'Enter') {
                const newItem = {
                    text : this.textInput.value,
                    isCompleted : false
                };

                this.$list.setState([...this.$list.data, newItem]);
                this.textInput.value = '';
            }
        };

        this.removeAllbtn.onclick = () =>{
            this.$app.dispatchEvent(new CustomEvent('removeAll'));
        }
    }
}
