export default function TodoCount($target, countTodo){
    this.$target = $target;
    this.$div = document.createElement('div');

    this.render = () => {
        const todoCount = countTodo();
        this.$div.innerText = `완료된 일 ; ${todoCount.completeTodo}
                                미완료된 일 ; ${todoCount.incompleteTodo}`;
        this.$target.firstElementChild.after(this.$div);

    }


    this.render();
}