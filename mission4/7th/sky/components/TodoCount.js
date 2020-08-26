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

    loadApiData(isLoading, delay) {
        if(this.$totalCntElement.classList.contains('text')
        && this.$totalCntElement.classList.contains('loading')) {
            this.$totalCntElement.classList.remove('text', 'loading');
        }

        this.render();

        if(isLoading && parseInt(delay) !== 0) {
            this.$totalCntElement.textContent = '';
            this.$totalCntElement.classList.add('text', 'loading');
        }
    }
}

export default TodoCount;
