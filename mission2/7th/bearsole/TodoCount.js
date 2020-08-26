function TodoCount(data){

    if(!(this instanceof TodoCount)){
        throw new Error('new 키워드로 함수로 생성해주세요');
    }

    this.todos = data;

    this.render = function(){
        const completeCnt = this.todos.filter(isCompleted => isCompleted );

        document.getElementById('todo-count').innerHTML = `완료 ${completeCnt.length} / ${this.todos.length}`
    }

    this.setState = function(nextData){
        this.todos = nextData;
        this.render();
    }
}