function TodoList(data, elementId, todoCount){
    // new 를 안붙일 시 예외처리
    if(this === window) throw new Error('error message');

    this.data = data;
    this.todoCount = todoCount;
    this.render = function(){
        try{
            // 여러가지 함수 및 ES6 써보기..
            document.getElementById(elementId).innerHTML = this.data.map(
              (d, index) => (
                 d.isCompleted 
                 ? `<s class="list-group-item done" data-no="${index}">${d.text}</s>` 
                 : `<div class="list-group-item todo" data-no="${index}">${d.text}</div>`
              )
            ).join('');
            this.todoCount.render();
        }
        catch(e){
            //throw new Error('error message');
        }
    }
    this.setStatus = function(data){
      this.data = data;
      this.render();
    }
    
}