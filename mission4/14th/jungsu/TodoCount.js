
export default function TodoCount ({ $target, initialState}) {
    this.$element = document.createElement('div');
    this.state = initialState;

    $target.appendChild(this.$element);

    this.setState = (nextState) => {
        this.state = nextState;
        this.render();
    }

    this.render = () => {
        this.$element.innerHTML = `
            Todo Total Count: ${this.state.totalCount} <br>
            Todo Complete Count: ${this.state.completeCount}
        `;
    };

    this.render();
}