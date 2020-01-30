class TodoList{
    constructor(todoData, targetId){
        this.todoData = todoData;
        this.targetId = targetId;
        const validator = new TodoListValidator();
        validator.validate(this);
    }

    render(){ 
        const $targetID = document.querySelector(`#${this.targetId}`)
        const split = ($targetID.innerHTML).split('>');
        const innerHTMLText = split[0] + '>' + split[1] + '>';
        const addedHTMLText = this.todoData.map(element => this.convertTodoDataIntoHtmlText(element));
        $targetID.innerHTML = innerHTMLText + addedHTMLText.join('');
    }

    setState(nextData){
        this.todoData = nextData;
        this.render();
    }

    convertTodoDataIntoHtmlText(todoData){
        const completedText = `<li class="card-default card-content"><del>${todoData.text}</del></li>`;
        const notCompletedText = `<li class="card-default card-content">${todoData.text}</li>`;
        return todoData.isCompleted ? completedText : notCompletedText;
    }
}
