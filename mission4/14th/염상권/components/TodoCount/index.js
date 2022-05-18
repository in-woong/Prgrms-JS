export class TodoCount {
    constructor({ $target,  todos }) {
        this.todos = todos;
        this.$todoCount = $target;
    }

    countTodoState() {
        return this.todos.reduce((acc, { isCompleted }) => {
            if (isCompleted) acc.done++;
            else acc.left++;

            return acc;
        }, { left: 0, done: 0 });
    }

    generateHTML({done, left}) { 
        return `<span>완료: ${done}</span>
                <span>미완료: ${left}</span>
                <span>전체: ${done + left}</span>`;
    }

    render() { 
        const { done, left } = this.countTodoState();
        this.$todoCount.innerHTML = this.generateHTML({ done, left });
    }

    setState({ todos }) { 
        this.todos = todos;
        this.render();
    }
}
