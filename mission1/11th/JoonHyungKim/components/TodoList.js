export class TodoList {
    constructor(el, data) {
        this.el = el;
        this.data = data;
    }

    render() {
        this.el.innerHTML = this.data.reduce((acc, cur) => `${acc} <p>${cur.text}</p>`, '');
    }

}