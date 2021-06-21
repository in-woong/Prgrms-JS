export class SearchHistory {
    constructor({target, onHistoryClick}) {
        this.target = target;
        this.onHistoryClick = onHistoryClick;
        this.data = [];

        this.target.addEventListener('click', (e) => {
            const targetList = e.target.closest('li');
            this.onHistoryClick(targetList.dataset.keyword);
        })
    }

    setState(newKeyword) {
        this.data.push(newKeyword);
        this.render(this.data);
    }

    render() {
        this.target.innerHTML = this.data.map(item => `<li data-keyword="${item}">${item}</li>`).join('');
    }
}
