const validateData = (data) => {
    if (data == null) {
        throw new Error('빈 데이터입니다.');
    }
    
    if(!Array.isArray(data)){
        throw new Error('배열 값만 사용할 수 있습니다.');
    }
    
    if (!data.every(({text = null, isCompleted = null}) => typeof text === 'string' && typeof isCompleted === 'boolean')) {
        throw new Error('잘못된 데이터입니다.');
    }
};

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
        validateData(nextData);
        this.data = nextData;
        this.render();
    }

}
