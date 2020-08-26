class TodoCount {
    constructor({
        elementId,
        totalCount
    }) {
        this.$todoCount = document.getElementById(elementId);
        this.$totalCntElement = document.createElement('span');
        this.totalCount = totalCount;

        this.render();
    }

    setState(totalCount) {
        this.totalCount = totalCount;
        this.render();
    }
    
    render() {
        this.$totalCntElement.innerText = `${this.totalCount} 개`;
        this.$todoCount.appendChild(this.$totalCntElement);
    }
}

export default TodoCount;
