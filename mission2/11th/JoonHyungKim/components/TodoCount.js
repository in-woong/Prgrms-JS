export class TodoCount {
    constructor({ $app, initState }) {
        this.state = initState;

        this.$target = document.createElement('div');
        this.$target.classList.add('todo-count');

        $app.appendChild(this.$target);

        this.render();
    }

    render() {
        this.$target.innerHTML = `완료 : ${this.state.reduce((acc, { isCompleted }) => acc + isCompleted, 0)} / 전체 : ${this.state.length}`;
    }

    setState(newState){
        this.state = newState;
        this.render();
    }
    
}
