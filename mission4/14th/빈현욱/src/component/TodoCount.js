export default function TodoCount({$app, initialState}){
    this.state = initialState;
    this.$count = document.createElement('div');
    this.$count.className = "todo-count";

    $app.appendChild(this.$count);

    this.setState = (nextState) => {
        this.state = nextState;
        this.render();
    }

    this.render = () => {
        const totalcount = this.state.length;
        const completecount = this.state.filter(todo => todo.isCompleted).length;
        this.$count.innerHTML = `<span>총 개수: ${totalcount} | 완료 개수 ${completecount}</span>`;
    }

    this.render();
};
