function TodoInput($todoList){
    this.todoList = $todoList
    this.data = $todoList.data

    //TODO: validate

    this.addInput = function (inputText){
        this.data.push({
            text: inputText,
            isCompleted: false
        });

        this.todoList.setState(this.data)
    }
}
