class TodoCount {
    constructor(app) {
        this.data = app.data;
        this.element = app.element.querySelector('#todo-count');
        this.current = 0;
        this.total = 0;
    }

    setCount = function() {
        let count = 0;
        this.data.map((value) => {
            if(value.isCompleted)
                count += 1;
        });
        this.current = count;
        this.total = this.data.length;
    }

    setState = function(nextData) {
        this.data = nextData;
        this.render();
    };

    render = function() {
        this.setCount();
        this.element.innerHTML = `<span>${this.current}</span>/<span>${this.total}</span>`;
    }
}