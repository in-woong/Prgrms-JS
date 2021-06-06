import { $ } from "./utils.js"
import { todoCountTemplate } from "./DOM.js"

export default class TodoCount {
    constructor($todoListState){
        this.target = $('#todo-count');
        this.todoListState = $todoListState;
        this.render();
    }

    render(){
        let listCnt = this.todoListState.length;
        let doneCnt = 0;
        this.todoListState.forEach((data) => {
            if(data.isCompleted) doneCnt++;
        })
        this.target.innerHTML = todoCountTemplate(listCnt, doneCnt);
    }

    setState(nextState){
        this.todoListState = nextState;
        this.render();
    }
}