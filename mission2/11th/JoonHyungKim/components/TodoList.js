const validateData = (data) => {
    if (data == null) {
        throw new Error('빈 데이터입니다.');
    }

    if (!Array.isArray(data)) {
        throw new Error('배열 값만 사용할 수 있습니다.');
    }

    if (!data.every(({ text = null, isCompleted = null }) => typeof text === 'string' && typeof isCompleted === 'boolean')) {
        throw new Error('잘못된 데이터입니다.');
    }
};

export class TodoList {
    constructor($app, data) {

        this.$app = $app;
        validateData(data);
        this.data = data;
        this.$target = document.createElement('div');
        this.$target.classList.add('todo-list');
        $app.appendChild(this.$target);
        this.render();
    }

    render() {
        this.$target.innerHTML = `<ul>${this.data.reduce((acc, { text, isCompleted }) => `${acc} ${isCompleted ? `<s><li>${text}</li></s>` : `<li>${text}</li>`}`, '')}</ul>`;
    }

    setState(nextData) {
        validateData(nextData);
        this.data = nextData;
        this.render();
    }

}
