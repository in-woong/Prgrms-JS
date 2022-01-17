function TodoCount({$app, initialState}) {
    
    this.$element = document.createElement('div');
    $app.appendChild(this.$element);
    
    this.render = () => {
        this.$element.innerHTML = `
            Completed works : ${this.state.completedWorks} / Total works : ${this.state.totalWorks}
        `;
    };

    this.setState = (newState) => {
        this.state = newState;
        this.render();
    };

    this.setState(initialState);

}
