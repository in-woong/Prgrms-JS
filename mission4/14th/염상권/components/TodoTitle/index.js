export class TodoTitle {
    
    constructor({ $target, user }) {
        this.$todoTitle = $target;
        this.user = user;
    }

    generateHTML() {
        return `🤗 ${this.user}님의 Todo List 입니다.`;
    }

    render() {
        this.$todoTitle.innerHTML = this.generateHTML();
    }

    setState({ user }) {
        this.user = user;
        this.render();
    }
}
