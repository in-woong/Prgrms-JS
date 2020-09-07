export default function TodoCount($target, data){

    this.$target = $target;
    this.data = data;

    this.prerender = function(){
        this.$todoCntElem = document.createElement('div');
        this.$todoCntElem.id = 'todo-count';
        this.$target.appendChild(this.$todoCntElem);
    }

    this.render = function(){
        const totalTodoNum = this.data.length;
        let completedTodoNum = 0;

        this.data.forEach( item => {
            if(item.isCompleted){
                completedTodoNum += 1;
            }
        })

        this.$todoCntElem.innerHTML = 
            `Todo 개수 : ${totalTodoNum} </br>
             완료한 Todo 개수 : ${completedTodoNum}`
    }

    this.prerender();
    this.render();

}