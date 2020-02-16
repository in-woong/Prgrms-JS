function TodoList(data, element) {
    this.data = data;

    if (!(this instanceof TodoList)) throw new Error("new로 생성 후 사용해야 함");
    this.validate = function(data) {
        if (data === null || data === undefined) throw new Error("null or undefined");
        if (data.every((t) => t.text === undefined)) throw new Error ("data에는 text가 있어야 함");
        if (!(Array.isArray(data))) throw new Error("not Array");
    }

    this.render = function() {
        this.validate(data);

        let todoHtml = '';
        data.forEach(function(item){
          todoHtml += '<div>' + (item.isCompleted ? '<s>' : '') + item.text +  (item.isCompleted ? '</s>' : '') + ' <button>del</button></div>';
        })
        element.innerHTML = todoHtml;   
    }
    this.setState  = function(nextData) {
        this.data = nextData;
        this.render();
    }
    this.render();
}
