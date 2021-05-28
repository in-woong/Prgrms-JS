const validateData = (data) => {
    const throwError = (msg) => { throw new Error(msg) };
    !data && throwError('빈 데이터입니다.');
    !Array.isArray && throwError('배열 값만 사용할 수 있습니다.');
    !data.every(e => e.text && typeof e.text === 'string') && throwError('잘못된 데이터입니다.');
}

export class TodoList {
    constructor(el, data) {
        this.el = el;
        validateData(data);
        this.data = data;
    }

    render() {
        this.el.innerHTML = this.data.reduce((acc, cur) => `${acc} ${cur.isCompleted ? `<s><p>${cur.text}</p></s>` : `<p>${cur.text}</p>` }`, '');
    }

    setState(nextData) {
        this.data = nextData;
        validateData(nextData);
        this.render();
    }

}