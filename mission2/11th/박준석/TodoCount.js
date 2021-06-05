

export default class TodoCount {
    constructor($todoList){
        this.todoList = $todoList;
        this.render();
    }


    render(){
        let listCnt = this.todoList.state.length;
        let doneCnt = 0;
        this.todoList.state.forEach((data) => {
            if(data.isCompleted) doneCnt++;
        })

        console.log(listCnt, doneCnt);
    }
}