import { $ } from "./utils.js"
import { todoCountTemplate } from "./DOM.js"

export default class TodoCount {
    constructor($todoList){
        this.target = $('#todo-count');
        this.todoList = $todoList;
        this.render();
    }

    listChange(data){
        this.rerender = data;
    }

    render(){
        let listCnt = this.todoList.state.length;
        let doneCnt = 0;
        this.todoList.state.forEach((data) => {
            if(data.isCompleted) doneCnt++;
        })
        this.target.innerHTML = todoCountTemplate(listCnt, doneCnt);
    }
}