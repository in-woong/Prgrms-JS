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

        this.addEventDelegator();
        this.render();
    }

    render() {
        this.$target.innerHTML = `<ul>${this.data.reduce((acc, { text, isCompleted }, index) => `${acc} <li class="todo-item" data-index=${index}>${isCompleted ? `<s>${text}</s>` : text} <button class="todo-remove-btn" data-index=${index}>삭제</button></li>`, '')}</ul>`;
    }

    setState(nextData) {
        validateData(nextData);
        this.data = nextData;
        this.render();
    }

    addToList(newText){
        const newItem = {
            text : newText,
            isCompleted : false
        }
        validateData([newItem]);
        this.data.push(newItem);
        this.render();
    }

    addEventDelegator() {
        this.$target.addEventListener('click', ({ target: { className, dataset: { index } } }) => {
            switch (className) {
                case 'todo-item':
                    this.data[index].isCompleted = true;
                    this.render();
                    break;
                case 'todo-remove-btn':
                    this.data.splice(index, 1);
                    this.render();
                    break;
            }
        });
    }

}
