export default function TodoCount($target, data){

    this.data = data;

    this.prerender = () => {
        this.$todoCntElem = document.createElement('div');
        this.$todoCntElem.id = 'todo-count';
        $target.appendChild(this.$todoCntElem);
    }

    this.setState = (newData) => {
        this.data = newData;
        this.render();
    }

    this.render = () => {
        this.$todoCntElem.innerHTML = 
            `Todo 개수 : ${this.data.todos.length} </br>
             완료한 Todo 개수 : ${this.data.todos.filter(todo => todo.isCompleted).length}`
    }

    this.prerender();
    this.render();

}
