function TodoList({$app, initialState, doWhenClicked}) {

    this.validateState = (state) => {
        if (Array.isArray(state) === false) throw new Error("state는 배열 객체여야만 합니다.");

        const hasInvalidText = (todo) => typeof(todo.text) !== "string" || todo.text.length == 0;
        const hasInvalidIsCompleted = (todo) => typeof(todo.isCompleted) !== "boolean";

        if (state.some(hasInvalidText)) throw new Error("state엔 text 항목이 String으로 정의되어야 하고 길이는 1 이상이어야 합니다.");
        if (state.some(hasInvalidIsCompleted)) throw new Error("state엔 isCompleted 항목이 Boolean으로 정의되어야 함니다.");
    }

    this.setState = (nextState) => {
        this.validateState(nextState);
        this.state = nextState;
        this.render();
    }

    this.render = () => {
        this.$element.innerHTML = `
            ${this.state.map(({text, isCompleted}, index) => `<li class='todo' data-index="${index}">${isCompleted ? `<s>${text}</s>` : text}</li>`).join('')}
        `;
    }

    if (!new.target) throw new Error("TodoList는 new 키워드를 통해 호출하여야 합니다.");

    this.$element = document.createElement('ul');
    $app.appendChild(this.$element);

    this.$element.addEventListener('click', (event) => {
        const $target = event.target.closest("LI");
        if ($target.className === "todo") doWhenClicked(parseInt($target.dataset.index));
    });

    this.setState(initialState);
}
