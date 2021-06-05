import { $, isValueAvailable, ERROR_MSSAGE } from "./utils.js"

export default class TodoInput {
    constructor ($todoList){
        this.todoInput = $(".input_text");
        this.inputBtn = $(".input_btn");
        this.todoList = $todoList;
        this.addInputEvent();
    }

    addInputEvent(){
        this.inputBtn.addEventListener('click', () => this.writeTodo(this));
    }

    writeTodo(that){
        const inputText = that.todoInput.value;
        let currentState = that.todoList.state;
        if (isValueAvailable(inputText))
            throw new Error(ERROR_MSSAGE.INPUT_TEXT_ERROR)
        const data = {
            text : inputText,
            isCompleted : false
        }
        currentState = currentState != null ? [...currentState, data] : [data];
        that.todoList.setState(currentState);
    }
}