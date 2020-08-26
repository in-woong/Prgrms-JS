export default class TodoCount {
    constructor({
        todos
    }) {
        this.todos = todos
        this.countHTML = document.getElementById('todoCount')
        this.setState(todos)
    }

    renderCount = (totalNUM, completedNUM) => {
        this.countHTML.innerHTML = `
        <p>지금까지 한 일은 총${completedNUM}개입니다.</p>
        <p>오늘의 할 일은 총 ${totalNUM}개입니다.</p>`
    }

    setState = (todos) => {
        const totalNUM = todos.length
        const completedNUM = todos.reduce((acc, cur) => {
            if (cur.isCompleted) {
                acc += 1
            }
            return acc;
        }, 0)
        this.renderCount(totalNUM, completedNUM)
    }
}
